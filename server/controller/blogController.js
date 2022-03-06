const Blog = require("../models/blog");

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
};

const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.status(404);
      console.log(err);
    });
};

const blog_create_post = (req, res) => {
  console.log(req.body);
  const blog = new Blog(req.body);

  blog
    .save()
    .then(() => {})
    .catch((err) => console.log(err));
};

const blog_delete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.send("Post has been deleted...");
    })
    .catch((err) => console.log(err));
};

const about_get = (req, res) => {
  res.send({ message: "Hello from server! We did it" });
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_post,
  blog_delete,
  about_get,
};
