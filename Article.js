
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema ({

    title:{
        type: String, 
        required: true,
        minLenght: [ 25, "title shoud be longer than 25"],
      
    },
    article:{
        type:String,
        required: true,
        minLenght: [ 100, "title shoud be longer than 100"],

    }
})

const Article = mongoose.model("article", articleSchema);

module.exports = {
    Article
}