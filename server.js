const express = require("express");
const app = express();

app.get('/api/get', (req, res) => {
    res.send({ message: "Hello welcome to my server" })
})

app.get('/api/get_user_details', (req, res)=> {
    res.send({
        user: {
            name:"Satyam",
            age: 22,
            contact: 122333
        }
    })
})

app.listen(3000, () => {
    console.log("listen to 3000");
})