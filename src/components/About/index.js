import React from "react";
import "./style.css";

function About(props) {
  return <div id="about">
    <div class="ui vertical stripe segment">
      <div class="ui middle aligned stackable grid container">
      <div class='row'>
        <div class='two wide column'>
          <h2 class="ui header">ABOUT</h2>
        </div>
        <div class='ten wide right floated column'>
          <h3>Born and raised in Northern California, I grew into a passion of telling visual narratives and refining aesthetics. I believe a foundational step to any application is the user experience, and the way a user interacts with the product.</h3>
        </div>
      </div>
    </div>
  </div>
</div> ;
}

export default About;