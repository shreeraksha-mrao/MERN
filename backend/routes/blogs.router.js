import { Router } from "express";
import { deleteBlog, getBlogById, getBlogs, postBlog, updateBlog } from "../controllers/blogs.controller.js";
import { upload } from "../middleware/multer.middleware.js";

export const blogRouter = Router();

blogRouter.route('/').get(getBlogs);
blogRouter.route('/').post(upload.single("image"),postBlog);
blogRouter.route('/:id').get(getBlogById);
blogRouter.route('/:id').delete(deleteBlog);
blogRouter.route('/:id').patch(upload.single("image"),updateBlog);