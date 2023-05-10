import "./style.css";

import { PostData } from "../../Types/Post";

function CardPost(props: PostData) {
  const { title, content, author, imageUrl, date } = props;

  return (
    <>
      <div className="container_card">
        <div className="img_card">
          <div
            style={{ backgroundImage: "url(../../src/assets/img2.jpg)" }}
          ></div>
        </div>
        <div className="card_content">
          <h2>{title}</h2>
          <div>
            <p>{author}</p>
            <span>{date}</span>
          </div>
          <p>{content}</p>
          <a>Read More</a>
        </div>
      </div>
    </>
  );
}

export default CardPost;
