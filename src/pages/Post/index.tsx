import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { Container } from "@mui/material";

import "./style.css";

function Post() {
  return (
    <div>
      <Header />
      <Container>
        <div className="content_post">
          <h1>Título da postagem</h1>
          <img src="" alt="" />
          <div className="post_date">
            <span>Data da postagem</span>
            <span>Autor da postagem</span>
          </div>
          <div className="container_content_post">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              asperiores, laborum laboriosam inventore nisi doloremque corporis
              porro repudiandae est ipsam, magnam dignissimos sit velit. Dolor,
              possimus inventore! Obcaecati, vero quod? Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. In dolor sed voluptas delectus
              sunt quasi? Perferendis error eveniet doloremque quia sapiente
              exercitationem nobis harum enim, cum minima eius nemo provident.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              reprehenderit beatae magnam sequi magni deserunt. Amet, in
              aperiam. Harum rerum sint atque autem possimus maxime vel debitis
              velit commodi! Non.
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Post;
