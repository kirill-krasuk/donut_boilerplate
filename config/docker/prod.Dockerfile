# Run `make build-no-cache` to update dependencies

#-------------------> base image for builders <--------------------

#
# use alpine image with installed
# nodejs tools for reusable
#
FROM node:20.5.1-alpine AS prepared_node_env

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# installing all tools for building 
# some nodejs modules
RUN apk add --no-cache --virtual .gyp \
	python3 \
	make \
	bash \
	g++ \
	automake \
	autoconf \
	nasm \
	libtool \
	libpng-dev \
	optipng \
	pngquant \
	gifsicle \
	libjpeg-turbo-utils

COPY .yarn .yarn
COPY yarn.lock package.json .yarnrc.yml ./

#---------> image for installing production dependencies <---------

FROM prepared_node_env AS installer

# installing production dependencies.
# this helps to reduce the final image size by almost half
RUN CPPFLAGS=-DPNG_ARM_NEON_OPT=0 yarn workspaces focus --production


#----------------> image for bundling application <----------------

FROM prepared_node_env AS bundler

# disable cpp errors on arm arch
# in image lib
RUN CPPFLAGS=-DPNG_ARM_NEON_OPT=0 yarn

COPY . .

RUN yarn bundle


#--------------------> prod lightweight image <--------------------

# we use an empty alpina image, 
# since we no longer need tools to build modules, 
# we only need a bash to run the application
FROM node:20.5.1-alpine

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
COPY --chown=node:node --from=bundler /usr/src/app/views views

# copy prod dependencies
COPY --chown=node:node --from=installer /usr/src/app/.yarn .yarn
COPY --chown=node:node --from=installer /usr/src/app/.pnp.cjs .

# copy other
COPY --chown=node:node tools tools
COPY --chown=node:node package.json yarn.lock .yarnrc.yml ./

EXPOSE ${PORT_TO_EXPOSE}

# dumb-init is a simple process supervisor and 
# init system designed to run as PID 1 
# inside minimal container environments
ENTRYPOINT [ "dumb-init", "--"]
CMD ["yarn", "run:server"]
