import express , { Application, Request, Response, NextFunction } from "express";

import * as findMatchController from './controller/findMatchController';
import bodyParser = require('body-parser');

const app: Application = express();
const port = 8000; //port

// define a route handler for the default home page
app.get( "/", ( req:Request, res:Response, next:NextFunction ) => {
    res.send( "Welcome to the typescript matchMaking Api Service" );
});


//call body parser
app.use(bodyParser.json());
//API Endpoints

app.get("/users", findMatchController.allUsers);
app.get("/user/:id", findMatchController.getUser);
app.post("/user/:id", findMatchController.updateUser);
app.put("/user", findMatchController.addUser);
app.delete("/users", findMatchController.deleteUser);
//match finder
// app.get("/uers/matches", findMatchController.findUserMatches);

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
});