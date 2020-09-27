[![Build Status](https://travis-ci.com/kangyeelim/restful-api.svg?branch=master)](https://travis-ci.com/kangyeelim/restful-api)

# restful-api
This is the repository for task B1. It is a quotes API.
Each quote has a message (the quote itself) and a category.

## To run API locally
* Ensure mongoDB is downloaded in your computer

```bash
# Clone repo
$ git clone this repository

$ cd restful-api
$ cd backend

# Check mongo is downloaded
$ mongo --version
# The version number should be returned

# Get all dependencies
$ npm install
```

* Create a .env file in the root directory
* Add URL=mongodb://localhost/restful-api in the .env file
* Add NODE_ENV=development

```bash
# Run
$ npm run dev
```

* Go to http://localhost:8080/
* Send GET, POST, DELETE etc to the API using postman/insomnia etc
* Eg. GET http://localhost:8080/api/quotes
* Eg. POST http://localhost:8080/api/quotes with json object
```
{
	"message": "One loyal friend is worth ten thousand relatives.",
	"category": "Friendship"
}
```
* Eg. DELETE http://localhost:8080/api/quotes/{quote_id}
* Eg. PATCH http://localhost:8080/api/quotes/{quote_id} with json object
* Eg. PUT http://localhost:8080/api/quotes/{quote_id} with json object
* Eg. GET http://localhost:8080/api/quotes/{quote_id}

## To run API on deployed endpoints (not working...)

* Go to https://restful-quote-api.herokuapp.com/
* Send GET, POST, DELETE etc to the API using postman/insomnia etc
* Instead of http://localhost:8080/, use https://restful-quote-api.herokuapp.com/  

## To run tests locally

```bash
# Clone repo

$ cd restful-api

# Get all dependencies
$ npm run test
```

## Travis run tests

* Travis runs the tests according to the package.json script for test

## To run frontend web application to interact with API

```bash
# Go to folder directory with the react app
$ cd client

# Get all dependencies
$ npm install

# Run frontend web application
$ npm start
```
