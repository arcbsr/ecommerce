const express = require('express');
const morgan = require('morgan');
const blogRouter = require('./routes/blogRoute');
const app = express();
app.listen(3000);
app.use(morgan('dev'));
app.use(express.static ('public'))
app.get('/',(req,res)=>{
    
    res.send("fruits");
});
app.use('/blogs',blogRouter)

app.use((req,res)=>{
    res.send('404, page not found');
});

