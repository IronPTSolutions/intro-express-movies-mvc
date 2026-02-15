import { Schema, model } from "mongoose";

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
      trim: true,
    },
    duration: {
      type: String,
    },
    genre: {
      type: [String],
    },
    rate: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

movieSchema.virtual("ratings", {
  ref: "Rating",        // Modelo de donde vienen los datos
  localField: "_id",    // Campo local (Movie._id)
  foreignField: "movie", // Campo en Rating que apunta a Movie
});

const Movie = model("Movie", movieSchema);

export default Movie;
