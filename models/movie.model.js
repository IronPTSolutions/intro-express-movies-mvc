import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "El nombre de la película es obligatorio"],
            minlength: [3, "El nombre debe tener al menos 3 caracteres"],
            maxlength: [100, "El nombre no puede exceder 100 caracteres"],
            trim: true,
        },

        year: {
            type: Number,
            required: true,
            min: 1888,
            max: new Date().getFullYear(),
        },

        director: {
            type: String,
            required: [true, "El director es obligatorio"],
            trim: true,
            maxlength: 100
        },

        duration: {
            type: String,
            maxlength: 50,
            trim: true,
        },

        genre: [{
            type: String,
            enum: [
                "Action",
                "Adventure",
                "Animation",
                "Biography",
                "Comedy",
                "Crime",
                "Documentary",
                "Drama",
                "Family",
                "Fantasy",
                "Film-Noir",
                "History",
                "Horror",
                "Music",
                "Musical",
                "Mystery",
                "Romance",
                "Sci-Fi",
                "Sport",
                "Thriller",
                "War",
                "Western",
                "Superhero",
                "Psychological",
                "Disaster",
                "Supernatural",
                "Martial Arts",
                "Cyberpunk",
                "Epic",
                "Coming-of-Age"
            ]
        }],

        rate: {
            type: Number,
            min: 0,
            max: 10
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;