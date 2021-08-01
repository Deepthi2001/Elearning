## LearnFree Website
  - Live Demo https://studyfree-app.herokuapp.com/
  
### Website Key Features
1. User Features 
   - Login (email,password)
   - Signup (Name,email,password,profile picture)
   - ProfileUpdate (name,email,password,profile picture)
2. TaskManager
   - Main Features (Create,Edit,Delete,Search)
   - Task Features (Title,Description,Category,Deadline)
3. CoursePage
   - Courses (embedded videos and resource links)

## Tech Stack Used:
  - ReactJS, Bootstrap, HTML/CSS - frontend
 - NodeJS & ExpressJS - backend
 - MongoDB - database
 - User Authentication using JWTs
 ## Other
 - Cloudinary for image(profile pic) storage
 - Postman for building,updating and testing user and task APIs
 - Redux devtools for our action status (error,success,fail)
## API 
<h4> Users </h4>
<ul>
  <li> <b>POST</b> /api/users/ </li>
  <li> <b>POST</b>  /api/users/login  </li>
  <li> <b>DELETE</b>  /api/users/profile </li>
</ul>

<h4> Tasks </h4>
<ul>
  <li> <b>GET</b> /api/notes </li>
  <li> <b>POST</b> /api/notes/create </li>
  <li> <b>DELETE</b> /api/notes/:id </li>
  <li> <b>PUT</b> /api/notes/:id </li>
  <li> <b>GET</b> /api/notes/:id </li>
</ul>

## Running Client Side
   - cd into the frontend folder 
   - run `npm install --save` to install dependencies.
   - Run `npm start` to start the application.
   - Open your browser at `localhost:3000` to view the application
```
cd frontend
npm install --save
npm start
```
   
## Running Server Side
   - cd into the backend folder 
   - run `npm install --save` to install dependencies.
   - Run `npm start` to start the application.
   - Open your browser at `localhost:5000` to view the application
 ```
cd backend
npm install --save
npm start
```
   
## Steps to run the whole project
  - Fork the repo and clone it.
  - run `npm install --save` to install dependencies.
  - Run `npm start dev` to start the application.
  - Open your browser at `localhost:5000` to view the application
 ```
npm install --save
npm run dev
```

## Git commands
 ```
git init
git add .
git commit -m "commit message"
git remote add origin https://github.com/Deepthi2001/Elearning.git
git branch -M main
git push -u origin main
```
