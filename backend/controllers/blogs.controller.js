import Blog from "../models/blogs.models.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    return res
      .status(200)
      .json({ message: "Blog retrieved successfully", data: blogs });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findById(id);

    if (blog == null) {
      throw new Error("No blog found");
    }

    return res
      .status(200)
      .json({ message: "Blog retrieved successfully", data: blog });
  } catch (err) {
    console.log(err);
    return res.status(404).json({ message: "Error while fetching blog" });
  }
};

export const postBlog = async (req,res)=>{
    try{
        const {content,title,author} = req.body;   // {content: content , title : title, author: author , image: file()}
        const image = req.file?.path;
        if(!image){
            throw new Error("Image must be provided");
        }
        //cloudinary
        const cloudinaryResponse = await uploadOnCloudinary(image);
        const blog = await Blog.create({content,title,author,image:cloudinaryResponse.url});
        return res.status(200).json({message:"Blog posted successfully",data:blog});
    }
    catch(err){
        return res.status(401).json({ message: "Error while posting blog" });
    }
}

export const deleteBlog = async (req,res)=>{
    try {
        const id = req.params.id;
        const blog = await Blog.findByIdAndDelete(id);
        return res.status(200).json({message:"Blog deleted successfully",data: blog});
    } catch (err) {
        return res.status(401).json({ message: "Error while deleting blog" });
    }
}

export const updateBlog = async (req,res)=>{
    try{
        const id = req.params.id;
        let {content,title,author} = req.body;
        let updatedBlog = {content,title,author}
        if(req.file?.path){
            const cloudResponse = await uploadOnCloudinary(req.file?.path);
            updatedBlog = {...updatedBlog,image:cloudResponse.url};
        }
        const blog = await Blog.findByIdAndUpdate(id,updatedBlog,{new:true});
        return res.status(200).json({message:"Blog updated successfully",data:blog});
    }catch(err){
        return res.status(401).json({message:"Error while updating blog"})
    }
} 