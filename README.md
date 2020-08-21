# restful-api
This is the repository for task B1. 

## To run API locally
* Ensure mongoDB is downloaded in your computer

```bash
# Clone repo
$ git clone this repository

$ cd restful-api

# Check mongo is downloaded 
$ mongo --version
# The version number should be returned
```

* Replace URL in index.js with 'mongodb://localhost/restful-api'

```bash
# Run
$ node index
```

* Go to http://localhost:8080/
* Send GET, POST, DELETE etc to the API using postman/insomnia etc or the browswer