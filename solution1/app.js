const express = required("express");
const app = express();
const axios = require("axios");

app.get("/",(req,res)=>{
    console.log("user hit the resource");
    axios.get("http://localhost:8090/prime").then(function (response){
        console.log(response.data);
    });
    res.status(200).send("Home Page");
});
app.listen(5000,() => {
    console.log("server is listening on port 5000....")
});