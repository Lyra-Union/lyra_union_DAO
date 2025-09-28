# Lyra Union DAO

Lyra Union DAO is a decentralized platform for creating and managing Decentralized Autonomous Organizations (DAOs) on the Hedera Hashgraph network. It provides a suite of tools for governance, treasury management, and a Decentralized Exchange (DEX).

## Features

- **DAO Creation**: Easily create and customize your own DAO.
  - **Multi-Sig DAOs**: For groups that require multiple parties to sign transactions.
  - **Governance Token DAOs**: Where voting power is based on the amount of governance tokens held.
  - **NFT DAOs**: Where voting power is determined by ownership of specific NFTs.
- **DAO Management**: A dashboard to manage DAO proposals, voting, and membership.
- **Decentralized Exchange (DEX)**: A built-in DEX for swapping tokens and providing liquidity.

## Project Structure

The codebase is organized into modules:

- `src/dao`: Core logic for DAO functionalities.
- `src/dex`: Components and services for the Decentralized Exchange.
- `src/shared`: Shared components, services, and utilities.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/lyra-union/dao-dex-app.git
    cd dao-dex-app
    ```

2.  **Install dependencies:**
    ```bash
    yarn install
    ```

3.  **Run the application:**
    ```bash
    yarn dev
    ```

## Technologies

- **Blockchain**: Hedera Hashgraph
- **Frontend**: React, TypeScript, Vite
- **State Management**: Redux Toolkit
- **Smart Contracts**: Solidity (via JSON ABI files)

## Contributing

Contributions are welcome. Please read our contributing guidelines before submitting a pull request.

## License

This project is licensed under the terms of the LICENSE file.
