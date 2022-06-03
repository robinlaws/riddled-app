const mongoose = require('mongoose');

const RiddleSchema = new mongoose.Schema({
    riddle: {
        type: String,
        required: true,
    },
    solution: {
        type: String,
        required: true,
    }
});
const RiddleModel = mongoose.model("riddles", RiddleSchema);
module.exports = RiddleModel;