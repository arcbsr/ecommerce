
const Blog = require('./models/blog');

//https://www.w3schools.com/nodejs/nodejs_mongodb_find.asp
const dbURI = "mongodb+srv://ec2613:ec2613@appfinder.hclnu.mongodb.net/";
const dbName = "ecommerce";


const blog_index = (req, res) => {
    res.send("I am here");
}
const blog_list = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
}

const blog_get = (req, res) => {
    const data = {title:"bappy"}
    const blog = new Blog(data);
    blog.save()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
    //res.send(req.params);
}



//res.send(req.params.id);
// console.log(process.env.NODE_ENV)
// const obj = JSON.parse(JSON.stringify(req.query));
// var length = Object.keys(obj).length;
// console.log(">>>"+length)
// if(length > 0){
//     //res.send(obj.count);
//     res.send("Name is " + obj.name);
// }
// else
//     res.send(obj);
//const user = new User(req.params);
module.exports = {
    blog_index,
    blog_get, blog_list

}