#!/bin/bash

# Stop all containers with the name pattern
docker ps -a | grep 'frontend-r84k84048g4kgccksws44sgw' | awk '{print $1}' | xargs -r docker rm -f

# Remove all networks with the name pattern
docker network ls | grep 'ctm-network' | awk '{print $1}' | xargs -r docker network rm

# Remove unused networks
docker network prune -f

# Kill any process using port 3000 or 3001
lsof -ti:3000 | xargs -r kill -9
lsof -ti:3001 | xargs -r kill -9 