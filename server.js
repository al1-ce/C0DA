const express = require("express");
const path = require("path");

const app = express();

app.use(express.json())
app.use(express.static(__dirname, { extensions: ["html", "htm"] }));

app.all("*", (req, res) => { res.status(404).sendFile(path.join(__dirname, "/404.html")); })

const port = process.env.PORT || 3000;

app.listen(port, (err, res) => {
    if (err) {
        console.log(err);
        return res.status(500).send(err.message);
    } else {
        console.log('[INFO] Server Running on port:', port);
    }
})

module.exports = app;

