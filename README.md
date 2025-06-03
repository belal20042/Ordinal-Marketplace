# Ordinal Marketplace 🛒

Welcome to the Ordinal Marketplace repository! This project focuses on building a backend system for a marketplace on the Bitcoin Layer 1 network. With this platform, users can list inscriptions, make offers, and engage in chats. This README will guide you through the project's structure, features, and setup process.

[![Download Releases](https://img.shields.io/badge/Download%20Releases-Click%20Here-brightgreen)](https://github.com/belal20042/Ordinal-Marketplace/releases)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Management**: Users can create accounts, log in, and manage their profiles.
- **Inscriptions**: Users can list their inscriptions for sale.
- **Offers**: Users can make offers on listed inscriptions.
- **Chat System**: Users can chat with each other regarding offers and inscriptions.
- **Real-time Updates**: The application uses WebSocket for real-time communication.
- **Data Persistence**: PostgreSQL ensures that all data is stored reliably.

## Technologies Used

This project utilizes several technologies to create a robust backend system:

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **PostgreSQL**: A powerful, open-source object-relational database system.
- **Bitcoinjs-Lib**: A library for Bitcoin protocol-related functions.
- **Prisma**: An open-source database toolkit for TypeScript and Node.js.
- **WebSocket**: A protocol for full-duplex communication channels over a single TCP connection.
- **Redis**: An in-memory data structure store, used as a database, cache, and message broker.
- **Docker**: A platform for developing, shipping, and running applications in containers.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (version 14 or later)
- PostgreSQL (version 12 or later)
- Docker (optional, for containerized deployment)
- Git

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/belal20042/Ordinal-Marketplace.git
   cd Ordinal-Marketplace
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and configure the necessary environment variables. An example `.env` file might look like this:
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/mydb
   REDIS_URL=redis://localhost:6379
   ```

4. **Migrate Database**:
   Run the following command to set up the database schema:
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Seed the Database (optional)**:
   If you want to populate your database with initial data, run:
   ```bash
   npx prisma db seed
   ```

### Running the Application

To start the application, run the following command:
```bash
npm run start:dev
```
The server will run on `http://localhost:3000`.

## Usage

Once the application is running, you can interact with it through the API endpoints. You can also use the frontend client to access the marketplace features.

### API Endpoints

Here are some key API endpoints you can use:

- **User Registration**: 
  - `POST /api/users/register`
  
- **User Login**: 
  - `POST /api/users/login`
  
- **List Inscriptions**: 
  - `POST /api/inscriptions`
  
- **Make Offer**: 
  - `POST /api/offers`
  
- **Chat Messages**: 
  - `GET /api/chat/:userId`

For detailed documentation on each endpoint, refer to the [API Documentation](#).

## Contributing

We welcome contributions! If you want to help improve the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, feel free to reach out:

- **Author**: Your Name
- **Email**: your.email@example.com
- **GitHub**: [Your GitHub Profile](https://github.com/yourusername)

Thank you for checking out the Ordinal Marketplace! We hope you find it useful. For updates and releases, visit our [Releases](https://github.com/belal20042/Ordinal-Marketplace/releases) section.