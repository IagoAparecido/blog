import "./style.css";

import { PostData } from "../../Types/Post";

function CardPost(props: PostData) {
  const { title, author, date, image, categories } = props;
  return (
    <>
      <div className="container_card">
        <div className="img_card">
          <div
            className="img_card_content"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <div className="card_content">
          <span className="categories_card">
            {categories?.length ? <span>{categories[0]}</span> : ""}
          </span>
          <h2>{title}</h2>
          <div>
            <p>{author}</p>
            <span>{date}</span>
          </div>
          <a className="read_more">Read More</a>
        </div>
      </div>
    </>
  );
}

export default CardPost;
