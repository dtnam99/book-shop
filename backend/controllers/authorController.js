import Author from "./../models/authorModel";
import Product from "./../models/productModel";

module.exports.findAll = async function (req, res) {
    const authors = await Author.find();
    res.json(authors)
}

module.exports.createAuthor = async function (req, res) {
    try {
        const author = { name: req.body.name };
        const existedAuthor = await Author.findOne({ name: author.name });
        if (existedAuthor) {
            console.log(`Author: "${author.name}" exists, no need to import.`);
            res.status(500).json({
                message: `Author: ${author.name} exists, no need to import.`
            });
        } else {
            await Author.create(author).then((newAuthor, err) => {
                if (err) {
                    throw err;
                } else {
                    console.log(`Author: "${newAuthor.name}" is inserted in Author Schema.`);
                    res.status(200).json({
                        message: `Author: ${newAuthor.name} is inserted in Author Schema.`
                    });
                }
            });
        }
    } catch (error) {
        console.error(`Error occurs: ${error}`);
    }
}

// module.exports.updateAuthor = async function (req, res) {
//     const id = req.params.id;

// }

module.exports.deleteAuthor = async function (req, res) {
    try {
        const id = req.params.id;
        const existedProduct = await Product.findOne({ authorIds: id })
        if (existedProduct) {
            res.status(500).json({
                message: "Can not delete this Author!"
            });
        }
        else {
            await Author.findByIdAndRemove({ _id: id }, function (err, result) {
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