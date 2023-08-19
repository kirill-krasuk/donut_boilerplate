# Run `make build:dev` to build dev image

FROM node:20.5.1-alpine AS prepared_node_env

WORKDIR /code

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

# disable cpp errors on arm arch
# in image lib
RUN CPPFLAGS=-DPNG_ARM_NEON_OPT=0 yarn

COPY . .

CMD ["yarn", "start"]
