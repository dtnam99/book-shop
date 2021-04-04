import mongoose from 'mongoose';

const genresSchema = new mongoose.Schema({
    name: { type: String, required: true },
})

const genresModel = mongoose.model("Genre", genresSchema);

export default genresModel;