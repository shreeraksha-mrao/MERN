import React, { useRef, useState } from "react";
import api from "../axios/axios";
import { toast, ToastContainer } from 'react-toastify';

const AddBlog = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
    image: null,
  });

  const imageRef = useRef(null);

  const handleImage = (e)=>{
    setForm({...form,image:e.target.files[0]})
  }

  const handleSubmit = (e)=>{
        e.preventDefault();
        const loaderToast = toast.loading("Adding blog");
        const postBlog = async ()=>{
          try{
            const data = new FormData();
            data.append("title",form.title);
            data.append("content",form.content);
            data.append("author",form.author);
            data.append("image",form.image);
            
            await api.post('/blogs',data,{
              headers: {
                "Content-Type":"multipart/form-data"
              }
            });
            toast.update(loaderToast,{render:"Blog added",type:"success",isLoading:false,autoClose:500})  
            setForm({title:"",content:"",author:"",image:null})    
            imageRef.current.value = null;      
          }catch(err){
            toast.update(loaderToast,{render:"Error while adding blog",type:"error",isLoading:false,autoClose:500})            

          }
          }
          postBlog();
        }

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        Title:{" "}
        <input
          type="text"
          value={form.title}
          name="title"
          onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
        />

        Content:{" "}
        <input
          type="text"
          value={form.content}
          name="content"
          onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
        />
        Author:{" "}
        <input
          type="text"
          value={form.author}
          name="author"
          onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
        />

        Image : {" "}
        <input
            type = "file"
            name = "image"
            accept = "image/*"
            onChange = {handleImage}
            ref = {imageRef}
            />

            <input type = "submit" value = "Add Blog" />
      </form>
    </div>
  );
};

export default AddBlog;
