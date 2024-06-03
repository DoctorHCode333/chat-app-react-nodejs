# Advanced Messaging Application

This is a web-based application for advanced messaging secured using strong cryptography techniques. It's developed using the MERN Stack, with web sockets used for asynchronous messaging.

## Technologies and Tools:

- **Frontend & Backend**: React.js, Node.js, Express.js
- **Database**: MongoDB
- **Cryptography**: EX3DH, Double Ratchet function
- **Version Control**: Git
- **Others**: Web socket, Axios, Cors

## Project Overview:

The project utilizes MongoDB to store user chats and login credentials, both of which are encrypted using the advanced Extended Triple Diffie-Hellman Algorithm (EX3DH) implemented using the Signal-API. This ensures end-to-end encryption, making the application chats immune to cyber-attacks like brute-force or dictionary-based.

User details and login credentials are encrypted using hash functions and salting.

The frontend is designed using the React.js framework, with the UI rendered using several different components and the Route method, making it a Single Page Application (SPA).

The backend is created using Node.js and Express.js.

Axios is used to simplify communications with the browser, handling HTTP requests and responses with respect to server-side APIs.

Web Sockets are used for asynchronous communication between users.

## Project Deployment Guide:

### Steps to Start the App:

# 1. Install the Public Dependencies
# 2. Install the Server Dependencies
# 3. In the Server Directory, there's a `.env` file. Change the value of `mongodb` inside the file. Set the value as your MongoDB connection URL.
# 4. Start the server by running `yarn start` or `npm start`
# 5. Start React by running `yarn start` or `npm start`
# 6. The chat application should be running successfully by now.
