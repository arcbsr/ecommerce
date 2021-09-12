const express = require('express');
const morgan = require('morgan');
const blogRouter = require('./routes/blogRoute');
const mongoose = require('mongoose');

const dbURI = "mongodb+srv://ec2613:ec2613@appfinder.hclnu.mongodb.net/ecommerce";

const app = express();
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
//app.listen(3000)
app.use(express.static('public'))
app.get('/', (req, res) => {

    res.send("fruits");
});
app.use('/users', blogRouter)

app.use((req, res) => {
    res.send('404, page not found');
});

