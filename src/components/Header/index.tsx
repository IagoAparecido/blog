import "./style.css";

import { BsSearch } from "react-icons/bs";

function Header() {
  return (
    <div className="container_header">
      <div>
        <img src="../../../icon.svg" alt="" />
        <span>Blog</span>
      </div>
      <div className="nav_header">
        <a href="">Inicio</a>
        <a href="">Inicio</a>

        <a href="">Inicio</a>
        <a href="">Inicio</a>

        <form action="">
          <input type="text" />
          <button>
            <BsSearch />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
