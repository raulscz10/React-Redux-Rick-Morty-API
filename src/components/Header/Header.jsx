import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
   return (
      <div className="Header">
         <nav className="main-nav">
            <Link to="/">Characters</Link>
            <Link to="/about">About</Link>
         </nav>
      </div>
   );
}
