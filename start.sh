#!/bin/bash
docker-compose up -d database
sleep 3
docker-compose up -d back
sleep 3
docker-compose up -d loadbal
echo "Done...."
echo "The containers are:"
docker ps