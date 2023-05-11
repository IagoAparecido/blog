import "./style.css";

import { PostData } from "../../Types/Post";
import { excerpt } from "../../utility";

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
          <div>{content}</div>
          <a>Read More</a>
        </div>
      </div>
    </>
  );
}

export default CardPost;
