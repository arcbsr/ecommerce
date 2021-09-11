
var MongoClient = require('mongodb').MongoClient;

//https://www.w3schools.com/nodejs/nodejs_mongodb_find.asp
const dbURI = "mongodb+srv://ec2613:ec2613@appfinder.hclnu.mongodb.net/";
const dbName = "ecommerce";
const blog_index = (req, res) => {
    

    const blog = [{ title: "this is title2" }];
    res.send(blog);
}
const blog_list = (req, res) => {
    MongoClient.connect(dbURI, function (err, db) {
        if (err) { console.log(err); return; }
        var dbo = db.db(dbName);
        var myobj = { jame: "Company Inc", address: "Highway 37" };
        dbo.collection("users").find({}).toArray(function (err, result) {
            if (err) { console.log(err); return; }
            console.log(result);
            //res.send(result);

            res.send(result);
            db.close();
        });
    });
    // const blog = [{ title: "this is title2" }];
    // res.send(blog);
}
function User(name,age){
    this.name = name;
    this.age = age;
};
var fromJson = function (json){
    var obj = JSON.parse(JSON.stringify(json))
    return new User(obj.name, obj.age);
};
const blog_get = (req, res) => {
    const datas = JSON.parse(JSON.stringify(req.query));
    var user = fromJson(datas)
    if(!user.name){
        res.send("No name found")
        return;
    }
    MongoClient.connect(dbURI, function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        //var myobj = { jame: "Company Inc", address: "Highway 37" };
        
        dbo.collection("users").insertOne(datas, function (err, result) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
            res.send(datas);
        });
    });
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