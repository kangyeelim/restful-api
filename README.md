# restful-api
This is the repository for task B1.

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

## To run API on deployed endpoints

* Go to https://restful-quote-api.herokuapp.com/
* Send GET, POST, DELETE etc to the API using postman/insomnia etc
* Instead of http://localhost:8080/, use https://restful-quote-api.herokuapp.com/  

## To run tests locally

```bash
# Clone repo

$ cd restful-api
$ cd backend

# Get all dependencies
$ npm run test
```
