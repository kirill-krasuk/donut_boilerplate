# import env variables
ifneq (,$(wildcard ./.env))
	include .env
	export
	ENV_FILE_PARAM = --env-file .env
endif

# DOCKER COMMANDS
build-image:
	docker build --build-arg PORT_TO_EXPOSE=$(PORT) -t $(DOCKER_TAG) -f $(DOCKER_CONFIG_PATH) .

build-no-cache:
	docker build --no-cache --build-arg PORT_TO_EXPOSE=$(PORT) -t $(DOCKER_TAG) -f $(DOCKER_CONFIG_PATH) .

delete-image:
	docker rmi $(DOCKER_TAG)

run-container:
	docker run --rm -p $(PORT):$(PORT) $(ENV_FILE_PARAM) --name $(DOCKER_CONTAINER_NAME) $(DOCKER_TAG)

stop-container:
	docker stop $(DOCKER_CONTAINER_NAME)

start-container:
	docker start $(DOCKER_CONTAINER_NAME)

bash-container:
	docker exec -it $(DOCKER_CONTAINER_NAME) bash

delete-unused-images:
	docker images -a | grep none | awk '{print $3}' | xargs docker rmi

delete-all-containers:
	docker rm $(docker ps -a -f status=exited -q)
