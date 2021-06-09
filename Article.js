
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FEED  = new Schema ({

    title:{
        type: String, 
        required: true,
        minLenght: [ 15, "title shoud be longer than 15"],
      
    },
    article:{
        type:String,
        required: true,
        minLenght: [ 40, "title shoud be longer than 40"],

    }
})

const Article = mongoose.model("FEED", FEED );

module.exports = {
    Article
}