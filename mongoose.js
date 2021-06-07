const mongoose = require("mongoose");
const db = "mongodb://localhost/egana_project";

mongoose.set("useFindAndModify", false);
mongoose.connect(db, {useNewUrlParser:true, useUnifiedTopology:true})
.then (()=> console.log("connected to DB"))
.catch (()=> console.log("err in DB"))
