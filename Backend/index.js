const express = require('express');
const app = express();
const port = 5000;

const mongoDB = require("./db");
mongoDB();

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://myntra-clone-aziz.vercel.app/");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})
app.use(express.json())
app.use("/api", require("./Routes/CreateUser"))
app.use("/api",require("./Routes/DisplayData"))

app.get('/',(req,res)=>{
    res.send('Hello World')
})


app.listen(port,()=>{
    console.log("hi bro");
})
