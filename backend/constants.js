import dotenv from 'dotenv';
dotenv.config();

export const frontendURL = process.env.FRONTEND_URI 
export const port = process.env.PORT 
export const mongoUri = process.env.MONGODB_URI