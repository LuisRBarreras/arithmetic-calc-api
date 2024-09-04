# Arithmetic Calculator API
This project serves as the API for an application that provides simple calculator functionality, offering users basic arithmetic operations



## Prerequisites:
### Make sure you have Node.js version 20 or a similar version installed on your system.
1. Install NVM:
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash`
2. Install Nodejs version 20:
`nvm install 20.6.0`
3. Use Nodejs version 2`
`nvm use 20.6.0`

### Make sure you have Docker your system.

## Instruction to execute project locally:
1. Copy the .env_sample file and rename it to .env:
2. Run `npm run database`
3. Run `npm run migration`
4. Run `npm run seed-all`
5. Run `npm run start`

## Usage Instructions
Start the Application: After starting the application, you can explore the available endpoints documented in the provided Postman collection.

Authentication: First, log in using the appropriate login endpoint. Once logged in, copy the generated token.

Accessing Endpoints: Use the token to authenticate your requests while testing the endpoints in the Postman collection.