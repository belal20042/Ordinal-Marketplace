# Ordinal Marketplace Backend

## Description

A robust backend system for an Ordinal NFT marketplace built with NestJS and PostgreSQL. This platform enables users to list Bitcoin Ordinal inscriptions, make offers, engage in discussions through comments, and participate in both global and direct messaging.

## Key Features

- **Inscription Management**
  - List and manage Ordinal inscriptions
  - Associate inscriptions with collections
  - Track inscription ownership and transfers

- **Trading System**
  - Create and manage swap offers
  - Support for buyer and seller interactions
  - PSBT (Partially Signed Bitcoin Transaction) handling
  - Secure transaction processing

- **Collection Management**
  - Create and manage collections
  - Associate inscriptions with collections
  - Collection metadata management (name, description, social links)

- **Communication System**
  - Global chat for community discussions
  - Direct messaging between users
  - Comment system for inscriptions
  - Real-time messaging using WebSocket
  - Message persistence in PostgreSQL
  - Redis pub/sub for message distribution

- **User System**
  - Wallet integration (UniSat, Hiro, Xverse)
  - User authentication via message signing
  - Role-based access control (customer, admin)

- **Performance Optimization**
  - LavinMQ integration for message queuing
  - Redis caching for high-performance data access
  - Optimized for handling large request volumes

## Technical Stack

- **Framework**: NestJS
- **Database**: PostgreSQL with TypeORM
- **Caching**: Redis
- **Message Queue**: LavinMQ
- **Authentication**: Bitcoin wallet signature verification
- **Bitcoin Integration**: BitcoinJS, BIP322

## Project Structure

```
src/
├── auth/                 # Authentication and authorization
├── collection/           # Collection management
├── inscription/          # Ordinal inscription handling
├── psbt/                # Bitcoin transaction handling
├── swap-offer/          # Trading system
├── user/                # User management
└── common/              # Shared utilities and types
```

## Database Schema

Key entities include:
- User
- Collection
- Inscription
- SwapOffer
- BuyerSwapInscription
- SellerSwapInscription
- SignMessage

## Local Development

### Prerequisites

- Node.js >= 18.12.1
- Docker and Docker Compose
- PostgreSQL
- Redis
- LavinMQ

### Setup with Docker

1. Install Docker and Docker Compose
2. Clone the repository
3. Run the development environment:

```bash
# Start the containers
docker-compose up -d

# Install dependencies
npm install

# Start the development server
npm run start:dev
```

Access the API documentation at `http://localhost:3005/docs`

### Database Connection

Connect to the local Postgres Database:

```bash
psql -h db -U postgres postgres
```
Password: `postgres`

## Available Scripts

```bash
# Development
npm run start:dev

# Production build
npm run build
npm run start:prod

# Testing
npm run test
npm run test:e2e
```

## API Documentation

The API documentation is available through Swagger UI at `/docs` endpoint when running the server.

## Performance Considerations

- Uses Redis caching for frequently accessed data
- LavinMQ for handling asynchronous tasks and large request volumes
- Optimized database queries and indexing
- Efficient PSBT handling for Bitcoin transactions

## Security Features

- Wallet-based authentication
- Message signing verification
- Role-based access control
- Secure PSBT handling
- Environment-based configuration
