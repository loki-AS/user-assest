const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
})

const UserModel = mongoose.model("Users", UserSchema)
module.exports = UserModel