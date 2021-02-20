# Run `make build-no-cache` to update dependencies

#
# use alpine image with installed
# nodejs tools for reusable
#
FROM node:15.8.0-alpine AS prepared_node_env

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

#------------------------

#
# image for bundling application
#
FROM prepared_node_env AS bundler

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY .yarn .yarn
COPY yarn.lock package.json .yarnrc.yml ./

RUN yarn

COPY . .

RUN yarn bundle

#------------------------

#
# image for installing production dependencies
#
FROM prepared_node_env AS installer

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

# installing production dependencies.
# this helps to reduce the final image size by almost half
RUN yarn workspaces focus --all --production

#------------------------

#
# prod lightweight image
#

# we use an empty alpina image, 
# since we no longer need tools to build modules, 
# we only need a bash to run the application
FROM node:15.8.0-alpine

# default port
# overriding in docker build command
ARG PORT_TO_EXPOSE=80

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install the bash, 
# since alpina goes without it by default
RUN apk add --no-cache bash && \
    rm -rf /var/cache/apk/*

# copy bundle results
COPY --from=bundler /usr/src/app/dist dist
COPY --from=bundler /usr/src/app/public public

# copy prod dependencies
COPY --from=installer /usr/src/app/.yarn .yarn
COPY --from=installer /usr/src/app/.pnp.cjs .

# copy other
COPY bin bin
COPY package.json yarn.lock .yarnrc.yml ./

EXPOSE ${PORT_TO_EXPOSE}

ENTRYPOINT ["yarn", "run:server"]
