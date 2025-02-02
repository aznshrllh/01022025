# Product Management API

Simple REST API for managing products with categories and status.

## Tech Stack & Dependencies

### Main Dependencies

| Package           | Version | Description        |
| ----------------- | ------- | ------------------ |
| express           | ^4.21.2 | Web framework      |
| sequelize         | ^6.37.5 | ORM for PostgreSQL |
| pg                | ^8.13.1 | PostgreSQL client  |
| cors              | ^2.8.5  | CORS middleware    |
| axios             | ^1.7.9  | HTTP client        |
| express-validator | ^7.2.1  | Input validation   |

### Dev Dependencies

| Package       | Version | Description            |
| ------------- | ------- | ---------------------- |
| dotenv        | ^16.4.7 | Environment variables  |
| nodemon       | ^3.1.9  | Development server     |
| sequelize-cli | ^6.6.2  | Sequelize command line |

## Setup

### Prerequisites

- Node.js
- PostgreSQL
- npm

### Database Configuration

Update `config/config.json`:

```json
{
  "development": {
    "username": "your_username",
    "password": "your_password",
    "database": "your_database_name",
    "host": "your_host",
    "dialect": "postgres"
  },
  "test": {
    "username": "your_username",
    "password": "your_password",
    "database": "your_database_name_test",
    "host": "your_host",
    "dialect": "postgres"
  },
  "production": {
    "username": "your_username",
    "password": "your_password",
    "database": "your_database_name_production",
    "host": "your_host",
    "dialect": "postgres"
  }
}
```

### Installation

```bash
# Install dependencies
npm install

# Database Setup
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

## API Endpoints

### Products

- GET /products - Get all products
- GET /products/sellable - Get sellable products only
- POST /products - Create new product
- PUT /products/:id - Update product
- DELETE /products/:id - Delete product

## Request Body Example (Create/Update)

```json
{
  "nama_produk": "Test Product",
  "harga": 15000,
  "kategori_id": 1,
  "status_id": 1
}
```

## Database Schema

### Products

- id_produk (STRING, PK)
- nama_produk (STRING)
- harga (DECIMAL)
- kategori_id (INTEGER, FK)
- status_id (INTEGER, FK)

### Categories

- id (INTEGER, PK)
- name (STRING)

### Statuses

- id (INTEGER, PK)
- name (STRING)

## Available Scripts

- npm run dev - Run server with nodemon
