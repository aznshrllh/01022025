# FastPrint Product Management System

Full-stack application for managing FastPrint's product inventory.

## Quick Start

### Server Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Setup database (PostgreSQL required)
# Update config/config.json with your database credentials

# Run migrations and seeds
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

# Start server
npm run dev
```

### Client Setup

```bash
# Open new terminal
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start client
npm run dev
```

## Default URLs

- Server: http://localhost:3000
- Client: http://localhost:5173

## Database Configuration

- Install PostgreSQL if not already installed
- Create database user and password
- Update server/config/config.json with your credentials:

```json
{
  "development": {
    "username": "your_username",
    "password": "your_password",
    "database": "your_database_name",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

## Detailed Documentation

- Server Documentation
- Client Documentation

## Prerequisites

- Node.js
- npm
- PostgreSQL

## Important Notes

- Ensure PostgreSQL is running before starting the server
- Check individual README files in server and client directories for detailed setup
- Server must be running for client to function properly
