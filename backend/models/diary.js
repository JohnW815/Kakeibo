const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const diarySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        require: true
    }
    // user: {
    //     type: String,
    //     require: true,
    // }
}, {timestamps: true})

const Diary = mongoose.model('Diary', diarySchema);
module.exports = Diary;