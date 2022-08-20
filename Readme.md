#To build docker images
`docker build -t build <docker-image-name>`

#To run docker the docker container on PORT 9000 pointing to Node PORT 3000 eith bind mount with readOnly permission (-v ${pwd}:/app:ro) , remove bind mount in production environment 
`docker run -v ${pwd}:/app -p 9000:3000 -d --name <docker-container-name> <docker-image-name>`

#To remove docker container with volume
`docker rm <docker-container-name> -fv`

#To see running docker containers
`docker ps`

#To see filesystem of the docker container
`docker exec -it <docker-container-name> bash`

#To run the docker container services easily use docker compose ,to rebuild the image (--build)
`docker-compose up -d`

#To delete the docker container services set by docker compose along with volumes attached to it
`docker-compose down -v`

#To run docker services in dev environment
`docker-compose -f <base-docker-compose-file> -f <docker-compose-dev-file> up -d`

#To connect to the mongodb container directly
`docker exec -it <docker-mongo-service-container-name> mongo -u "<username>" -p "<password>"`