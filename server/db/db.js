const mongoose = require('mongoose');

const url = process.env.mongo_url;
mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .catch(e =>{
        console.log('Connection error', e.message)
    });

const db = mongoose.connection;
db.once('open',()=>{
    console.log("MongoDB database connection established successfully");
})

module.exports = db;