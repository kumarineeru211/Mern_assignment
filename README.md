
#  User Data Management App - Full Stack Web Application

 This repository contains a full-stack web application, built using Node.js, Express.js, MongoDB, React.js, and fetch. The User Data Management App allows users to manage user data through a clean and intuitive user interface on frontend interface, interacting with the backend API to handle data validation and storage.


## Deployment Environment Set Up

To Install the necessary packages and dependencies on backend by running this

```bash
  cd backend 
  npm i
  npm run dev
```
To Install the necessary packages and dependencies on frontend by running this

```bash
  cd frontend 
  npm i
  npm start
```



## Backend Development

The backend of this application is built using Node.js, Express.js, and Mongoose. It provides a RESTful API with robust input validation and error handling for user data management. When the frontend sends user data to the backend, the API performs thorough validation to ensure data integrity and reject invalid entries.

API Endpoints:

GET /users: Retrieve all users from the MongoDB database.
POST /users: Create a new user with client-side input validation.
PUT /users/:id: Update an existing user with client-side input validation.
DELETE /users/:id: Delete an existing user.
## Features

- Display a list of users retrieved from the backend API.
- Implement a form to create a new user with client-side input validation.
- Allow updating and deleting users with appropriate confirmation prompts.
- Real-time client-side input validation to guide users and prevent invalid data submission.




## Frontend Development

The frontend is built with React.js and Axios to interact with the backend API. It offers a user-friendly interface to manage user data efficiently. Client-side input validation is implemented to provide real-time feedback to users and prevent invalid data from being sent to the backend.
