import React from "react";
import "./Navbar.css";

const Navbar = props => <nav className="navbar">{props.children}<ul><li className="brand"><a href="/">Clicky Game</a></li><li className="">You guessed correctly!</li><li>Score: 3 | Top Score: 3</li></ul></nav>

export default Navbar;