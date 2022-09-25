const express = require("express");
const app = express();

app.post("/post", (req, res) => {
    console.log("Connect to React");
    res.redirect("/");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server listening on port ${PORT}`));