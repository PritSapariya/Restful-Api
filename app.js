const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();
const PORT = process.env.APP_PORT || 3000;

//MIDDLEWARES
app.use(cors());
app.use(express.json());

//DATABASE CONNECTIONS
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database is connected successfully'))
.catch((err) => console.log(err));

//IMPORTING ROUTES
const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user');

//ROUTES
app.use('/posts', postsRoute);
app.use('/user', userRoute);

app.get('/', (req,res) => {
    res.send('Hello World!!');
});

//LISTENING TO THE SERVER
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});