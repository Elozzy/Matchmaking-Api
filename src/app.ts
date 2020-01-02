import express , { Application, Request, Response, NextFunction } from "express";

const app: Application = express();
const port = 8000; //port

// define a route handler for the default home page
app.get( "/", ( req:Request, res:Response, next:NextFunction ) => {
    res.send( "Welcome to the typescript matchMaking Api Service" );
});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
});