# react-blog
Blog Website - React,  MongoDB (with AWS server), Postman testing, multer (img handling)

npm i react-router-dom 


## Part 1 - Front End:
    https://www.youtube.com/watch?v=tlTdbc5byAs&ab_channel=LamaDev


    Switch (working up to router-dom v.5); updated to Routing - WJK

### Part 1a - Front End:  "npm start" for client
    after moving Blogg front-end into separate "client" folder - to run "npm start" command please make sure you are in client folder directories (cd client in terminal)

## Part 2 - blog Database with Mongo DB: 
    https://www.youtube.com/watch?v=OML9f6LXUUs&ab_channel=LamaDev

    instal framework and libraries:

    npm i express mongoose dotenv multer

    mongoose - to connect mongo 
    dotenv - to hide private links&passes
    multer - to handle img files

    Atlas MongoDB used:
    MongoDB connection require MongoDB Driver
    - npm install mongodb 
    

    to initialise express server: run npm init in API folder and change package.json
    live update with nodemon
    - install nodemon (recomended: npm install -g nodemon) 

    ----------- ends at 27:08 ------------
    ----------------------------------------------------------------------------------------
    after Dec23 @babel/core have to be reinstaled ( npm install @babel/core --save )
    https://www.npmjs.com/package/@babel/plugin-transform-template-literals
    https://stackoverflow.com/questions/52067944/cannot-find-module-babel-core
    to fix below error:

            node:internal/modules/cjs/loader:1042
            throw err;
            ^

            Error: Cannot find module '@babel/plugin-transform-template-literals'
    ---------------------------------------------------------------------------------------

## Credits
Build and updated by WJK - based on Lama Dev (by Safak) YouTube training video

 original repository/source code 
 https://github.com/safak/youtube/blob/react-blog-ui/src/components/topbar/Topbar.jsx



