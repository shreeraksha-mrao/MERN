import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { frontendURL, port } from './constants.js';
import { blogRouter } from './routes/blogs.router.js';
import { connectDB } from './db/config.js';


dotenv.config();

const app = express();
connectDB();

app.use(cors({origin: frontendURL}));
app.use(express.json());

const customMiddleware = (req,res,next)=>{
    console.log("Hello from the middleware")
    next();
}

const cm2 = (req,res,next)=>{
    console.log("Hello from next middleare");
    next()
}

app.use('/blogs',blogRouter);

app.get('/health',customMiddleware,cm2,(req,res)=>{
    console.log("Server is healthy");
    return res.json({message:"Server is healthy"});
});

app.listen(port , ()=>{
    console.log("Server listening on port " + port)
})