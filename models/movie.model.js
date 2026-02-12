import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [1, "Title must have at least 1 character"],
      maxlength: [120, "Title must be at most 120 characters"],
    },
    year: {
      type: String,
      required: [true, "Year is required"],
      trim: true,
      maxlength: [32, "Year must be at most 32 characters"],
    },
    director: {
      type: String,
      required: [true, "Director is required"],
      trim: true,
      minlength: [2, "Director must have at least 2 characters"],
      maxlength: [80, "Director must be at most 80 characters"],
    },
    duration: {
      type: String,
      required: [true, "Duration is required"],
      trim: true,
      match: [/^\d+h( \d+min)?$/, "Duration must look like '2h 22min' or '2h'"],
    },
    genre: {
      type: [String],
      required: [true, "Genre is required"],
      validate: [
        (genres) => Array.isArray(genres) && genres.length > 0,
        "Genre must have at least 1 value",
      ],
      set: (genres) =>
        Array.isArray(genres)
          ? genres.map((genre) => genre.trim()).filter(Boolean)
          : genres,
    },
    rate: {
      type: Number,
      required: [true, "Rate is required"],
      min: [0, "Rate must be at least 0"],
      max: [10, "Rate must be at most 10"],
    },
  },
  { timestamps: true },
);


const Movie = mongoose.model("Movie", movieSchema);

export default Movie;