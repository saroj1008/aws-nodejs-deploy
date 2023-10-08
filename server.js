const express = require("express");
const app = express();
require("dotenv").config

app.get('/api/get', (req, res) => {
    res.send({ message: "Hello welcome to my server" })
})

app.get('/api/get_user_details', (req, res)=> {
    res.send({
        user: {
            name:process.env.NAME,
            age: 22,
            contact: 122333
        }
    })
})

app.listen(process.env.PORT, () => {
    console.log("listen to 3000");
})