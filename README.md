# Marshalleo Backend

Marshalleo is a backend API built using Node.js, Express, and Sequelize. It provides user authentication, JWT-based authorization, and CRUD operations for managing products. This app is example of my code.

## Features

- **User Registration and Login**: Secure authentication via JWT.
- **Product Management**: Create, Read, Update, and Delete products with admin privileges.
- **JWT Authentication**: Protect routes requiring authentication.

## Technologies

- Node.js
- Express
- Sequelize (ORM for database interaction)
- SQLite (Database)
- JWT (JSON Web Token)
- CORS
- Helmet
- Morgan

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## API Endpoints

### 1. User Registration (POST `/api/auth/register`)

- **Description**: Register a new user in the system.
- **Request Body**:
  
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "123456"
  }
  ```

### 2. User Login (POST `/api/auth/login`)

- **Description**: Login a user and receive a JWT token.
- **Request Body**:

  ```json
  {
    "email": "john@example.com",
    "password": "123456"
  }
  ```

- **Response**:

  ```json
  {
    "token": "your_jwt_token_here"
  }
  ```

### 3. Get Products (GET `/api/products`)

- **Description**: Fetch all products (authentication required).
- **Headers**:

  ```bash
  Authorization: Bearer your_jwt_token_here
  ```

- **Response**:

  ```json
  [
    {
      "id": 1,
      "name": "Marshall Major IV",
      "price": 199.99,
      "brand": "Marshall"
    },
    {
      "id": 2,
      "name": "Marshall Mode II",
      "price": 149.99,
      "brand": "Marshall"
    }
  ]
  ```

### 4. Get Product Details (GET `/api/products/:id`)

- **Description**: Get detailed information about a specific product.
- **Example Request**: `GET /api/products/1`
  
- **Response**:

  ```json
  {
    "id": 1,
    "name": "Marshall Major IV",
    "price": 199.99,
    "brand": "Marshall",
    "description": "Wireless Bluetooth headphones with 80+ hours of battery life."
  }
  ```

### 5. Add Product (POST `/api/products`)

- **Description**: Add a new product to the catalog (admin access required).
- **Headers**:

  ```bash
  Authorization: Bearer your_admin_jwt_token_here
  ```

- **Request Body**:

  ```json
  {
    "name": "Marshall Monitor II",
    "price": 299.99,
    "brand": "Marshall",
    "description": "Active Noise Cancelling headphones."
  }
  ```

- **Response**:

  ```json
  {
    "message": "Product added successfully",
    "productId": 3
  }
  ```
  
### 7. Delete Product (DELETE `/api/products/:id`)

- **Description**: Delete a product by its ID (admin access required).
- **Headers**:

  ```bash
  Authorization: Bearer your_admin_jwt_token_here
  ```

- **Response**:

  ```json
  {
    "message": "Product deleted successfully"
  }
  ```

### 8. Check Authentication (GET `/api/auth/me`)

- **Description**: Get information about the currently authenticated user.
- **Headers**:

  ```bash
  Authorization: Bearer your_jwt_token_here
  ```

- **Response**:

  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
  ```

## Testing the API

You can use **Postman** or **cURL** to test the API endpoints. Example cURL requests:

- **User Registration**:
  ```bash
  curl -X POST http://localhost:5000/api/auth/register -H "Content-Type: application/json" -d '{"name":"John Doe","email":"john@example.com","password":"123456"}'
  ```

- **User Login**:
  ```bash
  curl -X POST http://localhost:5000/api/auth/login -H "Content-Type: application/json" -d '{"email":"john@example.com","password":"123456"}'
  ```
