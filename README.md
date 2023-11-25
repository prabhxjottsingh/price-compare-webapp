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
3. Install project dependencies by running, 
```
pip install -r requirements.txt
```
4. Activate the database and make the migrations,
```
python manage.py makemigrations
python manage.py migrate
```
5. In the end, don't forget to get out of the virtual environment using the command,
```
deactivate
```

<a id="run-app"></a>
## Running the application
To start the Bookstore Management System on local system, use the following command: 
```
python manage.py runserver
```
This will start the server, and you should see a message indicating that the server is running on the specified port.

<a id = "api-endpoints"> </a>
## API endpoints
The system provides the following API endpoints for managing CRUD operation, along with validation:

```
GET    /books                       : Retrieve all books
GET    /books/{id}                  : Retrieve single book by id
POST   /books/                      : Create a new Book
DELETE /books/{id}                  : DELETE an existing book
PUT    /books/{id}/partial-update/  : Partially update an existing book
```

<a id = "error-hand"> </a>
## Error Hadnling
Creating or updating a book with wrong information will give an error.

<a id = "depen"></a>
## Dependencies
The system uses the following main dependencies:
```
Python: A versatile and high-level programming language.
Django: A Python web framework for building web applications.
Django Rest Framework: A powerful tool for creating RESTful APIs in Django.
```

<a id = "conc"></a>
## Conclusion
```
You now have the Bookstore Management System up and running on your local machine. Use the provided API endpoints to manage book records in your bookstore. 
Customize and extend the system according to your needs.
```
