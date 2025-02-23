# TFG-A

This backend, handles user registration and login with all required validations. It supports CRUD operations for user-specific game data and utilizes a RabbitMQ event listener to seamlessly capture and store logs during registration.


## Table of Contents

- [Installation](#installation)
- [How to Use](#how-to-use)
- [Features](#features)
- [Techonlogies Used](#techonolgies-used)
- [Credits](#credits)

## Installation

1. Clone repository:
   
```
git clone https://github.com/itsRKhere/TFG-A.git 
```

2. Prerequisites:

- Install and run RabbitMQ on local server or just add cloud url to config file.
- Refer API curls for using all APIs in postman.

4. Run the Node.js server:
```
cd summarizer-backend
npm install
npm start
```

##  How to Use

    1. Make sure RabbitMQ service is running for log recording.
    2. Just clone the repo and run above required commands.
    3. Start using APIs in postman.

## Features

- Register a user.
- Login a user.
- Add user game data.
- Get user game data.
- Update user game points.
- Delete user game data.
- Get register user logs.

## Technologies Used

- JavaScript
- Node Js
- MySql
- MongoDb
- RabbitMQ 

Please note that the configuration details provided in config.json are used for testing and demonstration purposes. It is essential to exercise caution and avoid exposing such sensitive information in actual production environments.
