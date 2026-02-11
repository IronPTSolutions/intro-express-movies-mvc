import mongoose from "mongoose";

const MONGODB_URI = "mongodb://127.0.0.1:27017/crud_express_db_2";

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log("✅ Conectado a MongoDB exitosamente");
    })
    .catch((err) => {
        console.error("❌ Error al conectar a MongoDB:", err);
    });