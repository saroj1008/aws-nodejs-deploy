const express = require("express");
const app = express();

app.get('/api/get', (req, res) => {
    res.send({ message: "Hello welcome to my server" })
})

app.listen(3000, () => {
    console.log("listen to 3000");
})