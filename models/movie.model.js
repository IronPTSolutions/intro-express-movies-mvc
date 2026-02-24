
import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    "title": {
        type: String,
        required: [true, 'Required']
    },
    "year": {
        type: Number,
        required: [true, 'Required']
    },
    "director": {
        type: String,
        required: [true, 'Required']
    },
    "duration": {
        type: String,
        required: [true, 'Required']
    },
    "genre": {
        type: Array,
        required: [true, 'Required']
    },
    "rate": {
        type: Number
    }
},
{
    timestamps: true,
    versionKey: false,
});

const Movies = mongoose.model('Movies', movieSchema);

export default Movies;