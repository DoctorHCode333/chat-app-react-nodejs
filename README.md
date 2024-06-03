This is a web based application of advanced messaging secured using strong cryptography techniques. Developed using MERN Stack.
Web sockets used for asynchronous messaging.

Technologies and Tools:
  Frontend & Backend: React.js, Node.js, Express.js
  Database: MongoDB
  Cryptography: EX3DH, Double Ratchet function
  Version Control: Git
  Others: Web socket, Axios, Cors

Project used MongoDB database to store user chats and login credentials both of which are encrypted using advanced Extended Triple Diffe Hellman Algorithm (EX3DH).
This is implemented using the Signal-API. This makes the application end-to-end encrypted. The signal protocol uses a double rachet mechanism making the application chats immune
to any kind of cyber-attacks like brute-force or dictionary based. 

The user details and login credentials are encrypted using hash function and salting. 

The application is front-end is designed using React.js framework. The UI is rendered using several different components and Route method making it a SPA.

The backend is created using Node.js, Express.js.

Axios is used for simplifying communications with the browser i,e. to handle HTTP requests and hanling response with respect to server-side API's.

Web Sockets is used for asynchronous communication between users.


Project Deploymend Guide.
Use npm install command to install dependencies on both clientside and sever side
Open the server-side in new terminal and use command npm start to start the server and initailize MongoDB


# Steps to Start the App

## Install the Public Dependencies
## Install the Server Dependencies
## In the Server Directory there's a .env file. Change the value of mongodb inside the file. Set the value as your mongodb connection url.
## Now start the server by yarn start or npm start
## Now start the react by yarn start or npm start
## And the chat application would be running successfully by now.
