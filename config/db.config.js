
import mongoose from "mongoose";

const MONGOOSE_URI = 'mongodb://127.0.0.1:27017/crud_movie_db';

mongoose
    .connect(MONGOOSE_URI)
    .then(() => {
        console.info('Conected Mongo db')
    }).catch((err) => {
        console.error('Error mongo db' . err);
    });