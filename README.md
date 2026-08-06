# LATTICE Interoperability Engine

A framework-independent TypeScript interoperability layer for a Building Emergency Agent Network.

This project provides the core communication infrastructure that enables AI agents to discover each other, identify capabilities, and exchange standardized messages.

## Features

- Agent Registry
- Capability Discovery
- Agent Message Schemas
- Message Factory
- Message Router
- Framework-independent TypeScript

## Project Structure

```text
src/
├── registry/
│   ├── AgentRegistry.ts
│   ├── types.ts
│   └── index.ts
│
├── messaging/
│   ├── messageTypes.ts
│   ├── schemas.ts
│   ├── MessageFactory.ts
│   ├── MessageRouter.ts
│   └── index.ts
│
└── index.ts

tests/
```

## Technologies

- TypeScript
- Node.js

## Implemented Components

### Agent Registry

- Register agents
- Discover agents by capability
- Retrieve agents by ID
- Retrieve agents by building
- Update agent status
- Remove agents

### Messaging

- Standardized message types
- Request and Response messages
- Event and Error messages
- Message creation
- Basic message routing

## Run Tests

```bash
npx tsx tests/registry.test.ts

npx tsx tests/messaging.test.ts
```

## Status

- ✅ Agent Registry
- ✅ Capability Discovery
- ✅ Message Schemas
- ✅ Message Factory
- ✅ Message Router

---

This project is designed to be integrated into the larger **LATTICE Building Emergency Agent Network**, where specialized AI agents communicate through a common interoperability layer.