import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./style.css";

import { getAuth, User } from "firebase/auth";

function Post() {
  const [user, setUser] = useState<User | null>(null);
  const [post, setPost] = useState<any>(null);
  const { id } = useParams();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      if (id) {
        await deleteDoc(doc(db, "posts", id));
        console.log("Post deleted successfully");
        <Alert severity="error">This is an error alert — check it out!</Alert>;
        navigate("/");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const open = Boolean(anchorEl);
  const idPop = open ? "simple-popover" : undefined;

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        const docRef = doc(db, "posts", id);
        const blogDetail = await getDoc(docRef);
        if (blogDetail.exists()) {
          setPost(blogDetail.data());
        } else {
          console.log("Post not found");
        }
      }
    };

    const userAuth = () => {
      const auth = getAuth();

      const unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
      });

      return unsubscribe;
    };

    userAuth();
    fetchPost();
  }, [id]);

  if (!post) {
    return (
      <div className="lds-ellipsis-post">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  const { title, image, author, content } = post;

  const timestamp = post.timestamp;
  const formattedDate = new Date(timestamp).toLocaleDateString("pt-BR");

  return (
    <div>
      <Header />
      <Container>
        <div className="content_post">
          <div className="container_title">
            <h1>{title}</h1>
            {user ? (
              <DeleteIcon
                onClick={handleClick}
                aria-describedby={id}
                sx={{
                  color: "#d50000",
                  transition: ".2s",
                  cursor: "pointer",
                  ":hover": {
                    transform: "scale(1.1)",
                  },
                }}
              />
            ) : (
              ""
            )}
            <Popover
              id={idPop}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <div className="popover">
                <Typography sx={{ p: 1 }}>Are you sure?</Typography>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </div>
            </Popover>
          </div>
          <img src={image} alt="" />
          <div className="post_date">
            <span>
              <CalendarMonthIcon />
              {formattedDate}
            </span>
            <span>
              <PersonIcon />
              {author}
            </span>
          </div>
          <div className="container_content_post">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Post;
