const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.APP_PORT || 3000;

//MIDDLEWARES
app.use(cors());
app.use(express.json());

//DATABASE CONNECTION
require('./config');

//IMPORTING ROUTES
const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user');

//ROUTES
app.use('/posts', postsRoute);
app.use('/user', userRoute);

//LISTENING TO THE SERVER
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});