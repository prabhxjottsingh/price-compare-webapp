# Price Comparison Webapp -
 <a href = "https://drive.google.com/file/d/1w7_NEWz_kk9VfX4JPiIZYj6JqWzrsDta/view?usp=sharing" > Video Link </a>
 <br>
This web application, developed with <b>Node.js and Express</b>.js, facilitates price comparison across multiple websites by aggregating product details via APIs.
<br> &ensp; &#9745; Filter (highest price/lowest price/highest review & rating) [default: none]
<br> &ensp; &#9745; Top n [default: 3]
<br> &ensp; &#9745; Comparison websites – multi select from options [default: all]
<br> &ensp; &#9745; Used at least 5 websites from where you will get prices and product data
<br> &ensp; &#9745;  Ensure all requests to comparison websites are done async
<br> This repository showcases the implementation of a robust price comparison web application, leveraging <b>Node.js and Express.js</b> to create a seamless <b>API for comparing product prices</b> across multiple websites.

# Table of Contents

- [Prerequisites](#pre-req)
- [Getting Started](#gettinStart)
- [Running the Application](#run-app)
- [API](#api-endpoints)
- [Error Handling](#error-hand)
- [Dependencies](#depen)
- [Conclusion](#conc)


<a id="pre-req"></a>
## Prerequisites
Before you begin, ensure you have the following installed:
- NodeJS: <a href = "https://nodejs.org/en/download/"> Download and install Node </a>
- Git: <a href = "https://git-scm.com/downloads"> Download and install Git </a>

<a id="gettinStart"></a>
## Getting Started
1. Clone the repository to your local machine, and navigate into it,
```
git@github.com:prabhxjottsingh/price-compare-webapp.git
cd .\price-compare-webapp\
```
2.Run the following command to install all the requirements for the applicatin to run on your machine
```
npm install
```
3. Create a Mock REST API using JSON file by making your local machine act as a server for the mock API at port 3000, from where our data of products will be fetched
```
npm install -g json-server 
json-server --watch db.json --port 3000
```
4. 
```
nodemon src/index.js
```

<a id="run-app"></a>
## Running the application
To start the Application on local system, use the following command, open another terminal in github repository and run: 
```
nddemon src/index.js
```
This will start the server, and you should see a message indicating that the server is running on the specified port, 8000.

<a id = "api-endpoints"> </a>
##Mock API endpoints
The system provides the following API endpoints for fetching data like products, websites, and list of all range of products at particualr websites, 

```
Base URL: 'http://localhost:3000'
/products                    : Retrieve all available
/company                     : Retrieve all available websites
/{companyName}               : Retrieve all products available at the website name 'companyName'.
```

<a id = "error-hand"> </a>
## Error Handling
```Try``` and  ```catch``` blocks are included at every point of fetching of the data from API endpoints to take care in cases of no data fetched or other problems.    


<a id = "depen"></a>
## Dependencies
The system uses the following main dependencies:
```
Node: JavaScript runtime environment.
Express: Web framework for Node.js.
EJS: Templating language for generating HTML.
Nodemon: Automatic Node.js server restarts.
JSON-Server: Mock API development for testing.
```

<a id = "conc"></a>
## Conclusion
Explored the live comparison tool and its APIs to manage product comparisons. Extend and customize it as needed for personalized product analysis.