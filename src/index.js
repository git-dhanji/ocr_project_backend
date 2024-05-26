/* eslint-disable no-constant-binary-expression */
/* eslint-disable no-undef */
import dotenv from "dotenv"; // add this in scripts for import : "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
import { app } from "./app.js";

// env configuritaion
dotenv.config({
  path: './env'
});

const port = 4000 ||  process.env.PORT 


try {
    app.on("error",(err)=>{
        console.log('error while starting server ::',err)
    })


    //app listener start 
    app.listen(port,()=>{
        console.log(`server is running on port :: http://localhost:${port}`)
    })
} catch (error) {
    console.log('error while running app ',error)
}
