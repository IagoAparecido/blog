import "./style.css";

import CardPost from "../CardPost";
import { BsSearch } from "react-icons/bs";

function RecentPosts() {
  return (
    <div className="recent_container">
      <div className="nav_header-recent">
        <a href="">Inicio</a>

        <form action="">
          <input type="text" />
          <button>
            <BsSearch />
          </button>
        </form>
      </div>
      <h1>Posts Recentes</h1>
      <div className="recent_content">
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
      </div>
    </div>
  );
}

export default RecentPosts;
