# ts-express-api-template

A TypeScript API starter template using Express.js.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)

## Features

- Built with TypeScript for type safety and improved development experience
- Organized directory structure for controllers, middlewares, routes, and services
- Express.js for handling HTTP requests
- Easy to extend and customize

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repo:
   ```bash
   git clone https://github.com/Tomk1111/ts-express-api-template.git
   ```
2. Install the dependencies:
   ```
   npm install
   ```

3. Create the .env file using the .env.example as a reference. Edit the values as needed:
   ```
   cp .env.example .env
   ```

4. Start the development server:
   ```
   npm run dev
   ```

Your API will be running at http://localhost:3000. or whichever port you specified in the .env file, e.g:

```
PORT=3000
```

## Project Structure
   ```
   src/
├── api/
│   ├── controllers/        # Business logic and request handling
│   ├── middlewares/        # Custom middlewares for request processing
│   │   └── errorHandler.ts # Custom error handler middleware
│   ├── routes/             # Route definitions and management
│   ├── services/           # Business services and data handling
│   └── index.ts            # Exports all API routes
├── config/                 # Configuration files
│   └── index.ts            # Main configuration file
├── loaders/                # Application loaders
│   ├── express.ts          # Express app loader
│   ├── logger.ts           # Logger loader (winston)
│   └── index.ts            # Exports all loaders
├── types/                  # Type definitions
│   ├── config.ts           # Custom config types
│   └── error.ts            # Custom error types
├── app.ts                  # Entry point of the application

   ```

## Usage

### Development

To run the development server, use:

```
npm run dev
```
This command will start the server with hot reloading.

### Production
To build the application for production, run:

```
npm run build
```
Then start the production server:
```
npm start
```
