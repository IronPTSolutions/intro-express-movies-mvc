import Movie from '../models/movie.model.js'

export async function create(req, res) {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
}

export async function list(req, res) {
    const movies = await Movie.find();
    res.json(movies);
}

export async function detail(req, res) {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
    return res.status(404).json({ error: "movie not found" });
    }

    res.json(movie);
}

export async function update(req, res) {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);
    
    if (!movie) {
    return res.status(404).json({ error: "movie not found" });
    }

    res.json(movie);
}

export async function remove(req, res) {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
    return res.status(404).json({ error: "movie not found" });
    }

    await Movie.findByIdAndDelete(req.params.id);
    res.status(204).send();
}