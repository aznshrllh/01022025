# FastPrint Client Application

A React-based web application for managing products and inventory.

## Tech Stack

- React + Vite
- TailwindCSS + DaisyUI
- React Router Dom
- Axios
- SweetAlert2

## Prerequisites

- Node.js
- npm

## Installation

```bash
# Install dependencies
npm install
```

## Set Up config

Go to the src/configs/axiosInstance.js
edit the baseURL, by default it is http://localhost:3000

```js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'your server url'
});

export default instance;
```

## Configuration

### Tailwind + DaisyUI Setup

The project uses Tailwind CSS with DaisyUI for styling. Configuration files are:

- `tailwind.config.js`
- `postcss.config.js`

### Router Setup

Routes are configured in `src/router.jsx` using React Router v6.

## Dependencies

### Main Dependencies

- react
- react-dom
- react-router-dom
- axios
- sweetalert2
- tailwindcss
- daisyui

### Dev Dependencies

- @vitejs/plugin-react
- autoprefixer
- postcss
- tailwindcss

## Running the Application

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open browser at: `http://localhost:5173`

## Project Structure

```
src/
├── components/     # Reusable components
├── configs/       # Configuration files
├── pages/         # Page components
├── router.jsx     # Route definitions
└── main.jsx       # Application entry point
```
