import React, { useEffect, useState } from "react";
import api from "../axios/axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const BlogDetail = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch Blog Details
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await api.get(`/blogs/${id}`);
        setData(res.data.data);
      } catch (err) {
        console.error("Error fetching blog data:", err);
        toast.error("Failed to load blog data");
      }
    };
    fetchApi();
  }, [id]);

  // Handle Deletion
  const handleDelete = async () => {
    const toastLoader = toast.loading("Deleting blog...");
    try {
      await api.delete(`/blogs/${id}`);
      toast.update(toastLoader, {
        render: "Blog deleted successfully!",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
      navigate("/blogs");
    } catch (err) {
      console.error("Error deleting blog:", err);
      toast.update(toastLoader, {
        render: "Failed while deleting blog",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <h2>{data?.title}</h2>
      <p>{data?.content}</p>
      <p><strong>{data?.author}</strong></p>
      {data?.image && <img width={400} height={400} src={data.image} alt="Blog" />}
      <br />
      <button
        onClick={handleDelete}
        style={{
          cursor: "pointer",
          background: "red",
          color: "white",
          fontSize: "2rem",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
        }}
      >
        X
      </button>
    </div>
  );
};

export default BlogDetail;
