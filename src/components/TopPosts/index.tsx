import "./style.css";

function TopPosts() {
  return (
    <div className="container_top">
      <div className="content_card">
        <div
          className="recent_card"
          style={{ backgroundImage: "url(../../src/assets/img1.jpg)" }}
        >
          <p>hello dsad asd ad sadadadsa dsa da d</p>
        </div>
        <div
          className="recent_card"
          style={{ backgroundImage: "url(../../src/assets/img2.jpg)" }}
        >
          <p>hello</p>
        </div>
      </div>

      <div
        className="recent_card_3"
        style={{ backgroundImage: "url(../../src/assets/img5.jpg)" }}
      >
        <p>Hello</p>
      </div>
      <div className="content_card card5">
        <div
          className="recent_card"
          style={{ backgroundImage: "url(../../src/assets/img3.jpg)" }}
        >
          <p>hello</p>
        </div>

        <div
          className="recent_card "
          style={{ backgroundImage: "url(../../src/assets/img4.jpg)" }}
        >
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}

export default TopPosts;
