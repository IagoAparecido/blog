import "./style.css";
import "react-quill/dist/quill.snow.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Popover from "@mui/material/Popover";

import { post as sendPostData } from "../../firebase";
import "firebase/database";

import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import Header from "../../components/Header";
import { Navigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";

interface Post {
  content: string;
  timestamp: number;
  categories: string[];
}

function AddPost() {
  const [value, setValue] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState<string>("");
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const quillRef = useRef(null);
  console.log(value);

  const myToolbar = [
    [{ header: [1, 2, 3, 4, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      {
        color: [
          "#000000",
          "#e60000",
          "#ff9900",
          "#ffff00",
          "#008a00",
          "#0066cc",
          "#9933ff",
          "#ffffff",
          "#facccc",
          "#ffebcc",
          "#ffffcc",
          "#cce8cc",
          "#cce0f5",
          "#ebd6ff",
          "#bbbbbb",
          "#f06666",
          "#ffc266",
          "#ffff66",
          "#66b966",
          "#66a3e0",
          "#c285ff",
          "#888888",
          "#a10000",
          "#b26b00",
          "#b2b200",
          "#006100",
          "#0047b2",
          "#6b24b2",
          "#444444",
          "#5c0000",
          "#663d00",
          "#666600",
          "#003700",
          "#002966",
          "#3d1466",
        ],
      },
    ],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video", "image-link"],
    ["clean"],
  ];

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "video",
  ];

  const handleSendData = async () => {
    const postData: Post = {
      content: value,
      timestamp: Date.now(),
      categories: categories,
    };

    await sendPostData(postData, title);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value == "" || value == " ") return;
    setLoading(true);

    handleSendData();

    setTimeout(() => {
      setValue("");
      setTitle("");
      setLoading(false);
      setRedirect(true);
    }, 2000);
  };

  if (redirect) {
    return <Navigate to="/post" />;
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNewCategoryChange = (event: any) => {
    setNewCategory(event.target.value);
  };

  const handleAddCategoryClick = () => {
    if (newCategory !== "") {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Container maxWidth="lg">
      <Header />
      <div className="container_add_post">
        <div className="content_add_post">
          <h1>Post</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Title"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />

            <div className="categories">
              <Button variant="contained" onClick={handleClick}>
                Add Category +
              </Button>
              <div>
                {categories.map((categoria: any) => (
                  <Button
                    key={categoria}
                    variant="outlined"
                    size="small"
                    sx={{ mr: 1, mt: 1 }}
                  >
                    {categoria}
                  </Button>
                ))}
              </div>
            </div>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography component="div" sx={{ p: 2 }}>
                <form>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="category"
                    label="Category"
                    name="category"
                    autoFocus
                    value={newCategory}
                    onChange={handleNewCategoryChange}
                  />
                  <Button
                    type="button"
                    onClick={handleAddCategoryClick}
                    variant="contained"
                  >
                    Add
                  </Button>
                </form>
              </Typography>
            </Popover>

            <div className="quill">
              <ReactQuill
                ref={quillRef}
                theme="snow"
                value={value}
                onChange={setValue}
                modules={{ toolbar: { container: myToolbar } }}
                formats={formats}
              />
            </div>
            {loading ? (
              <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              <Button
                type="submit"
                // fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send
              </Button>
            )}
          </form>
        </div>
      </div>
    </Container>
  );
}

export default AddPost;
