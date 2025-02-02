# Product Management API

Simple REST API for managing products with categories and status.

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

# Setup database
npm run db:create
npm run db:migrate
npm run db:seed:all
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
- npm run db:create - Create database
- npm run db:migrate - Run migrations
- npm run db:seed:all - Run seeders
