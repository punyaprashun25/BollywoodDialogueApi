const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DialogueSchema = new Schema({

    Dialogue: {
        type: String,
        required: true
    },
    Movie: {
        type: String,
        required: true
    },
    Year:{
        type:String
    }
});

const Dialogue = mongoose.model('dialogue', DialogueSchema);

module.exports = Dialogue;