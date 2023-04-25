import "./App.css";

import Header from "./components/Header";
import TopPosts from "./components/TopPosts";
import RecentPosts from "./components/RecentPosts";

function App() {
  return (
    <div className="container_app">
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

export default App;
