const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
mongoose.connect("mongodb://127.0.0.1:27017/todo");
const todoSchema = new mongoose.Schema({
    work: String
});
const item = mongoose.model("first", todoSchema);
/*const work1 = new item({
    work: "Reading"
});
const work2 = new item({
    work: "Bill payment"
});
const work3 = new item({
    work: "Exercise"
});*/
app.get("/", function (req, res) {
    item.find().then(data => {
        res.render("list", { ejes: data });
    }).catch(err => console.log(err));

})
app.post("/", (req, res) => {
    var wrk = req.body.ele1;
    const work1 = new item({
        work: wrk
    })
    work1.save();
    res.redirect("/");
});
app.post("/delete", (req, res) => {
    var checked = req.body.checkbox1;
    item.findByIdAndDelete(checked).then(data => { console.log("deleted succcessfully") }).catch(err => console.log(err));
    res.redirect("/");
})





app.listen(8000, function () {
    console.log("Server started");
});