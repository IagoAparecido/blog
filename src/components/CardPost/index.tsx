import "./style.css";

import { PostData } from "../../Types/Post";

function CardPost(props: PostData) {
  const { title, content, author, date, image } = props;
  return (
    <>
      <div className="container_card">
        <div className="img_card">
          <div
            className="img_card_content"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          {/* <div style={{ backgroundImage: imageUrl }}></div> */}
        </div>
        <div className="card_content">
          <h2>{title}</h2>
          <div>
            <p>{author}</p>
            <span>{date}</span>
          </div>
          <div>{content}</div>
          <a className="read_more">Read More</a>
        </div>
      </div>
    </>
  );
}

export default CardPost;
