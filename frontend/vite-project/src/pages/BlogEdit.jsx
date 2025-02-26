import React, { useEffect, useState } from "react";
import api from "../axios/axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const BlogEdit = () => {
  const [data, setData] = useState({title:'',content:'',author:'',image:''}); // {title: "asdf", content: "asdf" , author: "asdf" , image: "asdf"}
  const [form,setForm] = useState(data);
    const {id} = useParams();
    const navigate = useNavigate();

  useEffect(() => {
    const fetchApi = async () => {
      const res = await api.get(`/blogs/${id}`);
      setData(res.data.data);
      setForm(res.data.data);
    };
    fetchApi();
  },[]);

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const handleImageChange = (e)=>{
    setForm({...form,image:e.target.files[0]})
  }

  const handleEdit = async (e)=>{
    
    try {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title",form.title);
        formData.append("content",form.content);
        formData.append("author",form.author);
        formData.append("image",form.image);
        const toastLoader = toast.loading("Updating the blog")
        await api.patch(`/blogs/${id}`,formData, {
            headers: {
                'Content-Type' : "multipart/form-data"
            }
        });
        toast.update(toastLoader , 
            {render:"Blog updated successfully",type:"success",autoClose:200,isLoading:false}
        );
        navigate(`/blogs/${id}`);
    } catch (error) {
        toast.update(toastLoader , 
            {render:"Error updating blog",type:"error",autoClose:200,isLoading:false}
        );
        navigate(`/blogs/${id}`);
    }

  }

  return (
    <div>
        <ToastContainer />
      <form onSubmit={handleEdit}>
        Title:{" "}
        <input
          type="text"
          value={form.title}
          name="title"
          onChange={handleChange}
        />

        Content:{" "}
        <input
          type="text"
          value={form.content}
          name="content"
          onChange={handleChange}
        />

        Author:{" "}
        <input
          type="text"
          value={form.author}
          name="author"
          onChange={handleChange}
        />

        Image:{" "}
        <input
          type="file"
          name="image"
          accept = "image/*"
          onChange={handleImageChange}
        />

        <input type="submit" value = "Edit" />
      </form>
    </div>
  );
};

export default BlogEdit;
