import mongoose from 'mongoose';
import { mongoUri } from '../constants.js';

export const connectDB = async () => {
    try {
        const connectionURL = await mongoose.connect(mongoUri); 
        console.log(connectionURL.connection.host);
    } catch (err) {
        console.log('Error connecting to the database ' + err);
    }
};