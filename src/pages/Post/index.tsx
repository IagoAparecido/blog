import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./style.css";

function Post() {
  const [post, setPost] = useState<any>(null);
  const { id } = useParams();

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
          <h1>{title}</h1>
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
