import "./style.css";

import { PostData } from "../../Types/Post";
import { excerpt } from "../../utility";

import ReactHtmlParser from "react-html-parser";

function CardPost(props: PostData) {
  const { title, content, author, imageUrl, date } = props;

  const contentHtml = ReactHtmlParser(content);
  let firstParagraph = null;
  for (let i = 0; i < contentHtml.length; i++) {
    if (contentHtml[i].type === "p") {
      firstParagraph = contentHtml[i];
      break;
    }
  }
  const firstParagraphText =
    firstParagraph &&
    typeof firstParagraph.props.children[0] === "string" &&
    firstParagraph.props.children[0];

  console.log(firstParagraphText);

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
          <div>{firstParagraphText}</div>
          <a>Read More</a>
        </div>
      </div>
    </>
  );
}

export default CardPost;
