# MERN To-Do App

A simple and elegant Todo List application built using the **MERN stack** (MongoDB, Express, React, Node.js).  
You can create, update, and delete tasks, and mark them as completed via an intuitive UI.

---

## Features

-  Add new todo tasks with a title
-  Edit existing tasks and update their status
-  Delete tasks
-  Mark tasks as Pending or Completed
-  Responsive UI using Bootstrap

---

## Tech Stack

- **Frontend:** React, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **API Testing:** Axios

---

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB running locally or via cloud (like MongoDB Atlas)
- Git

### Backend Setup  

Create .env file and set MONGODB_URI
```
cd backend
npm install
npm start
```

### Frontend Setup

```
cd frontend  
npm install  
npm start
```

## API Endpoints   
| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| GET    | `/api/v1/todos`     | Get all todos     |
| GET    | `/api/v1/todos/:id` | Get a single todo |
| POST   | `/api/v1/todos`     | Create a new todo |
| PUT    | `/api/v1/todos/:id` | Update a todo     |
| DELETE | `/api/v1/todos/:id` | Delete a todo     |


## UI Screens  
* **Home Page:** To create and list tasks

* **Edit Page:** To update task status

---

## Credits  
Made by [Taanya Tapke](https://www.linkedin.com/in/taanya-tapke-2377a2273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)
