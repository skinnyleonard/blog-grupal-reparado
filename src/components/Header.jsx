import React from "react";
import logoBlog from "../logoBlog.png";
import { Link } from "react-router-dom";

function Header({ show, setShow, home }) {
  return (
    <header className="header">
      <Link to={`/poster`}>
        <h1>postea algo</h1>
      </Link>

      <a
        className="fa-brands fa-github"
        href="https://github.com/skinnyleonard/Blog_Grupal"
        target="_blank"
      ></a>
      <Link to={'/'}><img src={logoBlog} /></Link>
      <Link to={'/'}><h1 className="buscador">{home}</h1></Link>
      {show && <h2>sos administrador</h2>}
      {show && <button className="boton" onClick={() => { setShow(false) }}>salir del admin</button>}
    </header>
  );
}

export default Header;
