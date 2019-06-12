const express = require("express");
const exphbs = require("express-handlebars");
const app  = express();
const port = 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const students = ["alyssa", "jade", "ob", "sam"];

app.get("/", (req, res) => {
    res.render("home", {name: "Garret"});
});

app.get("/students", (req, res) => {
    res.send(students);
});

app.post("/students", (req, res) => {
    const { name } = req.body;
    students.push(name);
    res.sendStatus(201);
});

app.use((err, req, res, next) => {
    console.log("my apps error", err);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});