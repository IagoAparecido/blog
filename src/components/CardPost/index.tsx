import "./style.css";

function CardPost() {
  return (
    <div className="container_card">
      <div className="img_card">
        {/* <img src="" alt="" /> */}
        <div
          style={{ backgroundImage: "url(../../src/assets/img2.jpg)" }}
        ></div>
      </div>
      <div className="card_content">
        <h2>hello</h2>
        <div>
          <p>nome de quem publicou</p>
          <span>data</span>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe dolor
          vel unde eveniet enim reiciendis optio, consectetur veritatis numquam
          deserunt at accusantium dignissimos! Ratione, quis aut amet eaque
          explicabo mollitia?
        </p>
        <a>ler mais</a>
      </div>
    </div>
  );
}

export default CardPost;
