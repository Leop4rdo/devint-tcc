import { NextFunction, Request, Response } from "express";
import BusinessLogicError from "../handler/BusinessLogicError ";
import IResponse from "../Responses/IResponse";
import BadRequestResponse from "../Responses/BadRequestResponse";
import errors from "../handler/errors.handler";

function errorHandlerMiddleware(
  err: Error | BusinessLogicError,
  req: Request,
  res: Response,
  next: NextFunction
) {

  /* 
        try{
        next()
        } catch(err) {
        res.status(400).json(new BadRequestResponse({
            status : 400,
            errorMessage : err.message || errors.BASE.message,
            errorCode : errors.BASE.code
          }))
      
        }
  */

   res.status(450).json(new BadRequestResponse({
     status : 450,
     errorMessage :  errors.AUTH_SERVICE.message,
     errorCode : errors.AUTH_SERVICE.code
    })
   )

   
  /* 
      
        app.use(function(err, req, res, next) {
        console.error(err.message);
        if (!err.statusCode) err.statusCode = 500; // Sets a generic server error status code if none is part of the err

        if (err.shouldRedirect) {
          res.render('myErrorPage') // Renders a myErrorPage.html for the user
        } else {
          res.status(err.statusCode).send(err.message); // If shouldRedirect is not defined in our error, sends our original err data
        }
      });

      ########################################
      
      app.use(function(err, req, res, next) {
      console.error(err.message); // Log error message in our server's console
      if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
      res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});
   
   */
}

export default errorHandlerMiddleware;
