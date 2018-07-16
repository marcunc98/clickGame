import React from "react";
import "./Navbar.css";

let score = 0;
let topScore = 0;
const Navbar = props => <nav className="navbar">{props.children}<ul><li className="brand"><a href="/">Clicky Game</a></li><li className="">You guessed correctly!</li><li>Score:{score} | Top Score:{topScore}</li></ul></nav>

export default Navbar;