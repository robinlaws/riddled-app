const express = require("express");
const app = express();
const mongoose = require('mongoose');
const RiddleModel = require("./models/riddles");
const cors = require('cors');
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://robinlaws:36Empire@riddledcluster.7nxyj.mongodb.net/riddledDatabase?retryWrites=true&w=majority");

app.get("/api/getRiddle", (req, res) => {
    RiddleModel.find({}, (err, result) => {
        if (err) {
            res.json(error);
        } else {
            res.json(result);
        }
    });

});

app.post("/api/userGuess", async (req, res) => {
    const userGuess = req.body;
    console.log(userGuess);

});

app.listen(8000, () => {console.log("Listening on port 8000");
});