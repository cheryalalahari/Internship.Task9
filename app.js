const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/assignment-9", {
    useNewUrlParser : true,
    useUnifiedTopology : true
});

app.use(express.urlencoded({extended : true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(require("./routes/index"));
app.use(require("./routes/todo"));


app.listen(2000, () => {
    console.log("server starting at http://localhost:2000");
})
