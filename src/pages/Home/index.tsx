import "./style.css";

import Header from "../../components/Header";
import TopPosts from "../../components/TopPosts";
import RecentPosts from "../../components/RecentPosts";

function Home() {
  return (
    <div className="container_home">
      <Header />
      <TopPosts />
      <RecentPosts />

      {/* <p>Hello</p>
      <a target="_blank" href="https://icons8.com/icon/65072/blogger">
        Blogger
      </a>{" "}
      icon by{" "}
      <a target="_blank" href="https://icons8.com">
        Icons8
      </a> */}
    </div>
  );
}

export default Home;
