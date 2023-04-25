import "./style.css";

function CardPost() {
  return (
    <div className="container_card">
      <div style={{ backgroundImage: "url(../../src/assets/img2.jpg)" }}>
        <span>hello</span>
      </div>
      <div>
        <h1>hello</h1>
        <p>nome de quem publicou</p> <span>data</span>
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
