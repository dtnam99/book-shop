import User from './../models/userModel'


module.exports.findAll = async function (req, res) {
    try {
        const users = await User.find();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).json({ msg: "Error in getting product genres" });

    }
}