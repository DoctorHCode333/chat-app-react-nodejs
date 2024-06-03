# Advanced Web-Chat Application

This is a web-based application for advanced messaging secured using strong cryptography techniques. It's developed using the MERN Stack, with web sockets used for asynchronous messaging.

## Technologies and Tools:

- **Frontend & Backend**: React.js, Node.js, Express.js
- **Database**: MongoDB
- **Cryptography**: EX3DH, Double Ratchet function
- **Version Control**: Git
- **Others**: Web socket, Axios, Cors

## Project Overview:

The MERN Chat Application stores user chats and login credentials securely in a MongoDB database. Messages and credentials are encrypted using advanced cryptography techniques, specifically the Extended Triple Diffie-Hellman Algorithm (EX3DH) implemented via the Signal API. This ensures end-to-end encryption, safeguarding chats from cyber-attacks such as brute force or dictionary-based attacks.

User details and login credentials are further protected using hash functions and salting.

The frontend of the application is developed using the React.js framework, offering a dynamic and interactive user interface. React Router is employed for navigation, enabling a seamless single-page application (SPA) experience.

On the backend, Node.js and Express.js are utilized to handle server-side logic and API routes.

Axios simplifies communication between the browser and server by handling HTTP requests and responses.

Web sockets facilitate real-time, bidirectional communication between users, enabling instant messaging capabilities.
## Project Deployment Guide:

### Steps to Start the App:

# 1. Install the Public Dependencies
# 2. Install the Server Dependencies
# 3. In the Server Directory, there's a `.env` file. Change the value of `mongodb` inside the file. Set the value as your MongoDB connection URL.
# 4. Start the server by running `yarn start` or `npm start`
# 5. Start React by running `yarn start` or `npm start`
# 6. The chat application should be running successfully by now.
