# Run `make build-no-cache` to update dependencies

#
# use alpine image with installed
# nodejs tools for reusable
#
FROM node:15.8.0-alpine AS prepared_node_env

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# installing all tools for building 
# some nodejs modules
RUN apk add --no-cache --virtual .gyp \
    python \
    make \
    g++ \
    automake \
    autoconf \
    nasm \
    libtool \
    libpng-dev \
    libjpeg-turbo-dev

COPY .yarn .yarn
COPY yarn.lock package.json .yarnrc.yml ./


#---------> image for installing production dependencies <---------

FROM prepared_node_env AS installer

# installing production dependencies.
# this helps to reduce the final image size by almost half
RUN yarn workspaces focus --all --production


#----------------> image for bundling application <----------------

FROM prepared_node_env AS bundler

RUN yarn

COPY . .

RUN yarn bundle


#--------------------> prod lightweight image <--------------------

# we use an empty alpina image, 
# since we no longer need tools to build modules, 
# we only need a bash to run the application
FROM node:15.8.0-alpine

# default port
# overriding in docker build command
ARG PORT_TO_EXPOSE=80

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN chown node:node .

# install the bash,
# since alpina goes without it by default
RUN apk add --no-cache bash \
    dumb-init \
    && rm -rf /var/cache/apk/*

USER node

# copy bundle results
COPY --chown=node:node --from=bundler /usr/src/app/dist dist
COPY --chown=node:node --from=bundler /usr/src/app/public public

# copy prod dependencies
COPY --chown=node:node --from=installer /usr/src/app/.yarn .yarn
COPY --chown=node:node --from=installer /usr/src/app/.pnp.cjs .

# copy other
COPY --chown=node:node bin bin
COPY --chown=node:node package.json yarn.lock .yarnrc.yml ./

EXPOSE ${PORT_TO_EXPOSE}

# dumb-init is a simple process supervisor and 
# init system designed to run as PID 1 
# inside minimal container environments
ENTRYPOINT [ "dumb-init", "--"]
CMD ["yarn", "run:server"]
