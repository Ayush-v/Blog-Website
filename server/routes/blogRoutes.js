const express = require("express");
const controller = require("../controller/blogController");
const routes = express.Router();

routes.get("/blogs", controller.blog_index);

routes.post("/add-blog", controller.blog_create_post);

routes.get("/blogs/:id", controller.blog_details);

routes.delete("/blogs/:id", controller.blog_delete);

routes.get("/api", controller.about_get);

module.exports = routes;
