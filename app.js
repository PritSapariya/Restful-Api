const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();


//MIDDLEWARES
app.use(cors());
app.use(express.json());

//DATABASE CONNECTIONS
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database connetion completed.'))
.catch((err) => console.log(err));

//IMPORTING ROUTES
const postsRoute = require('./routes/posts');


//ROUTES
app.use('/posts', postsRoute);

app.get('/', (req,res) => {
    res.send('Hello World!!');
});

//LISTENING TO THE SERVER
app.listen(3000, () => {
    console.log('Node Application Started');
});