import express from 'express'
import cors from 'cors'


const app = express()


// App middleware for the server


app.listen(3000,()=>{
    console.log("App is running on port 3000")
});