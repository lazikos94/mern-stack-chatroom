const express = require('express');
const cors = require('cors');
var BodyParser = require('body-parser');

require('dotenv').config();

const db = require('./db/db');
const routes = require('./routes/routes');
const io = require('./socket.io/socket.io')
const app = express();
const port = process.env.PORT;
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use('/',routes)
db.on('error',console.error.bind(console,'MongoDB connection error:'))

const server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

io.listen(server)






