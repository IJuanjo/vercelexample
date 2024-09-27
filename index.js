const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/humans", (req, res) => res.json({
    name: "John Doe",
    age: 30,
    email: ""
}));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;