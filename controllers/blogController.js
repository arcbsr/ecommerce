
const blog_index = (req, res) =>{
    const blog = [{title: "this is title2"}];
    res.send(blog);
}
const blog_get = (req, res) =>{
    //res.send(req.params.id);
    res.send(req.query);

}

module.exports = {
    blog_index,
    blog_get

}