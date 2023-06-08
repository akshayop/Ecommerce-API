
# E-Commerce API

E-Commerce API is a API which provieds functionality for the admin to manage their product. API allows for viewing the inventory, creating new products, deleting exists product and updating the quantity of the products.

It is built using ejs, Javascript, Nodejs, Express JS and MongoDB


##  Functionality

- View Inventory
- Create a new Product
- Delete Product
- Update Product Quantity


## Tools Used

- NodeJS
- ExpressJS
- MongoDB




## Libraries Used

- express
- mongoose
- dotenv
## Run Locally

- Clone the project

```bash
  git clone https://github.com/akshayop/Ecommerce-API.git
```

- create a .env file root directory  and add the following 

    *PORT = port number*
    
    *DB_URI = MongoDB url*



- Install dependencies

```bash
  npm install
```
or

```bash
  npm i
```

- Start the server

    *(if nodemon globally installed or install it)*
```bash
  npm  start 
```
  or

```bash
  node index.js
```

  Now server successfuly running on your PORT Number 





  

## How to use Postman

- To view Products
   
  *By sending a GET request, admin can see all* *the products details*

  ![image](https://github.com/akshayop/Ecommerce-API/assets/106054360/587eba2c-10d1-4bbb-9bb5-3e9b6b1b59ac)

  *Response*

  ![image](https://github.com/akshayop/Ecommerce-API/assets/106054360/ce15be0e-08cd-40db-80f2-ae85399a64a9)


- To create a new Product

  *By sending a POST request, admin can add a new products*

  ![image](https://github.com/akshayop/Ecommerce-API/assets/106054360/a97adb30-d671-4d97-a1ec-a2c95313b3a0)

  *Response*

  ![image](https://github.com/akshayop/Ecommerce-API/assets/106054360/5454ff5f-b93d-43d7-bc80-7d4014bd1891)


- To Update Quantity of the Product

  *By sending POST request, admin can update quantity of the products*

  ![image](https://github.com/akshayop/Ecommerce-API/assets/106054360/4fd803c8-62e3-47af-a1ad-00086e8cb94a)

  *Response*

  ![image](https://github.com/akshayop/Ecommerce-API/assets/106054360/459ab735-0ce2-4fc6-b0cf-2be84e773d86)

- To Delete Product

  *By sending DELETE request, admin can Delete products*

  *Response*

  ![image](https://github.com/akshayop/Ecommerce-API/assets/106054360/ca262a1e-f789-422a-8c35-83434fba7ad2)
