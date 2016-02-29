# website

## Dependencies
- Docker (for ease of use)
- mongo (in case you don't want docker)
- nodejs (v4 for npm install. this needs to be the same as docker image. otherwise you need to add ``npm install`` in dockerfile)
- gulp (development workflow)

## Installation
``docker-compose up``

Thats it, everything you need to get the website up and running.

## Development workflow
``docker-compose up -d mongo``

``cd app``

``gulp``

## Folder structure
