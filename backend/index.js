const express = require("express")
const app = express()
const mongoose = require("mongoose")
const UserModel = require("./models/Users")

require('dotenv').config();

const cors = require("cors");

app.use(express.json());
app.use(cors());

const uri = process.env.MONGODB_URI

console.log(uri)

mongoose.connect(uri)
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (result, err) => {
        if(err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

app.post("/createUser", async(req, res) => {
    const user = req.body;
    const newUser = new UserModel(user)
    await newUser.save()

    res.json(user)
})

app.listen(3001, () => {
    console.log("Server runs perfectly")
})