import mongoose from 'mongoose';

const genreSchema = new mongoose.Schema({
    _id: { type: String, required: true},
})

const genreModel = mongoose.model("Genre", genreSchema)
export default genreModel;