const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel.js");
const productRoute = require("./routes/productRoute.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

mongoose.connect('mongodb+srv://fahmihanafi680:ElYV3ayjmXUQJeXN@dbbackend.osjtpi9.mongodb.net/?retryWrites=true&w=majority&appName=dbBackend')
.then(() => {
    console.log('Connected!');
    app.listen(3000, () =>{
        console.log("Server is running on port 3000");
    });
})
.catch(() => { 
    console.log("Conection Failed");
});