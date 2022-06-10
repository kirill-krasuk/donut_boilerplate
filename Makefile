# suppress echoing the output, use the "@" sign

# import env variables
ifneq (,$(wildcard ./.env))
	include .env
	export
	ENV_FILE_PARAM = --env-file .env
endif

# DOCKER COMMANDS
dev:
	@docker compose --file $(DOCKER_DEV_CONFIG_PATH) up

build-image:
	@DOCKER_BUILDKIT=1 docker build --build-arg PORT_TO_EXPOSE=$(PORT) -t $(DOCKER_TAG) -f $(DOCKER_PROD_CONFIG_PATH) .

build-no-cache:
	@DOCKER_BUILDKIT=1 docker build --no-cache --build-arg PORT_TO_EXPOSE=$(PORT) -t $(DOCKER_TAG) -f $(DOCKER_PROD_CONFIG_PATH) .

delete-image:
	@docker rmi $(DOCKER_TAG)

run-container:
	@docker run --rm -p $(PORT):$(PORT) $(ENV_FILE_PARAM) --name $(DOCKER_CONTAINER_NAME) $(DOCKER_TAG)

run-it-container:
	@docker run --rm -it -p $(PORT):$(PORT) $(ENV_FILE_PARAM) --name $(DOCKER_CONTAINER_NAME) $(DOCKER_TAG) bash

stop-container:
	@docker stop $(DOCKER_CONTAINER_NAME)

start-container:
	@docker start $(DOCKER_CONTAINER_NAME)

bash-container:
	@docker exec -it $(DOCKER_CONTAINER_NAME) bash

delete-unused-images:
	@docker images -a | grep none | awk '{print $3}' | xargs docker rmi

delete-all-containers:
	@docker rm $(docker ps -a -f status=exited -q)

# this example for use command
# if in directory with makefile
# exists file with name as command
.PHONY: test
test:
	@echo test
	