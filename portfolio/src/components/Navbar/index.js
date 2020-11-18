import React from "react";
import "./style.css";

function Navbar(props) {
  return <div class="ui inverted center aligned segment" id="navbar">
  <div class="ui inverted secondary pointing five item menu">
    <a class="active item">
      Home
    </a>
    <a class="item">
      Projects
    </a>
    <a class="item">
     About
    </a>
    <a class="item">
     Contact
    </a>
  </div>
</div>;
}

export default Navbar;


