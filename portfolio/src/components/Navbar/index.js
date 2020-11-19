import React from "react";
import "./style.css";

function Navbar(props) {
  return <div class="ui inverted center aligned segment" id="navbar">
  <div class="ui inverted secondary pointing four item fixed menu">
    <a class="active item" href="#main">
      Home
    </a>
    <a class="item" href="#featured">
      Projects
    </a>
    <a class="item" href="#about">
     About
    </a>
    <a class="item" href="#contact">
     Contact
    </a>
  </div>
</div>;
}

export default Navbar;


