import ProductEnumGenre from "./../enums/productEnums"
import Product from "./../models/productModel";
import Genre from "./../models/genreModel";

module.exports.findAll = async function (req, res) {
    try {
        const genres = await Genre.find();
        return res.status(200).send(genres);
    } catch (error) {
        return res.status(500).json({ msg: "Error in getting product genres" });

    }
}

const getNameGenreById = async (id) => {
    let genre = await Genre.findOne({ _id: id })
        .populate('genre')
        // .skip(skip).limit(45)
        .lean(true).exec();
    console.log(genre.name)
    return genre;
}

module.exports.createGenre = async function (req, res) {
    try {
        const genre = { _id: req.body.id };
        const existedGenre = await Genre.findOne({ _id: genre });
        if (existedGenre) {
            console.log(`Genre: "${genre._id}" exists, no need to import.`);
            res.status(500).json({
                message: `Genre: ${genre._id} exists, no need to import.`
            });
        } else {
            await Genre.create(genre).then((newGenre, err) => {
                if (err) {
                    throw err;
                } else {
                    console.log(`Genre: "${genre._id}" is inserted in Genre Schema.`);
                    res.status(200).json({
                        message: `Genre: ${newGenre._id} is inserted in Genre Schema.`
                    });
                }
            });
        }
    } catch (error) {
        console.error(`Error occurs: ${error}`);
    }
}

module.exports.deleteGenre = async function (req, res) {
    try {
        const id = req.params.id;
        const existedProduct = await Product.findOne({ genres: id })
        console.log(id);
        if (existedProduct) {
            res.status(500).json({
                message: "Can not delete this Genre. Because existed product!"
            });
        }
        else {
            await Genre.findByIdAndRemove({ _id: id }, function (err, result) {
                if (err || !result) {
                    res.status(500).json({
                        message: "Author not exist!"
                    });
                    console.log(err);
                }
                else {
                    res.status(200).json({
                        message: "Author deleted successfully!"
                    });
                }
            })
        }
    } catch (error) {
        console.error(`Error occurs: ${error}`);
    }
}