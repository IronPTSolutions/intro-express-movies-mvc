import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
//importar configuración de la base de datos (inicia la conexión)
import "../config/db.config.js"
//importar el modelo del movie
import Movie from "../models/movie.model.js";

async function seed() {
    console.log("Seeding the database...");
    console.log("drop database");

    await mongoose.connection.dropDatabase();
    console.log("Drop database...[OK]");

    //CREAR 100 movies con dados generados por faker
    console.log("sending books...");
    for (let i = 0; i < 100; i++) {
        const movie = await Movie.create({
            title: faker.lorem.words(3),
            director: faker.person.fullName(),
            year: faker.number.int({ min: 1500, max: 2026 }),
            genre: faker.music.genre(),
            summary: faker.lorem.paragraph(),
        });

        console.log(movie.title);
    }
    console.log("sending movies...[ok]");

    //cerrar la conexion con mongoDB
    console.log("close connection");
    await mongoose.connection.close();
    console.log("close connection ... [ok]");
}

seed();