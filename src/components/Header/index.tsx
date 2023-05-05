import "./style.css";
import { useState } from "react";

import { User } from "firebase/auth";

import { BsSearch } from "react-icons/bs";

function Header() {
  const [user, setUser] = useState<User | null>(null);

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
        {!user ? <button>Quit</button> : ""}
      </div>
    </div>
  );
}

export default Header;
