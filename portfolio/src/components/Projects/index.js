import React from "react";
import "./style.css";

function Featured(props) {
  return <div id="featured">
    <div class="ui vertical stripe segment">
    <h2 class="ui header">PROJECTS</h2>
      <div class="ui middle aligned stackable grid container">
      <div class='row'>
        <div class='ten wide centered column'>
          <h3>Born and raised in Northern California</h3>
        </div>
      </div>

      <div class="row">
        <div class="fourteen wide centered column">
          <a href="https://aarondig.github.io/factCheck/">
            <img class="img-fluid" src="https://github.com/aarondig/factCheck/blob/main/assets/banner.png?raw=true"></img>
          </a>
        </div>
        <div class="fourteen wide centered column">
          <div class='column'>
            <h2 class="title">Google Fact Checker</h2>
          </div>
          <div class="column">
            <h3>Using Google's Fact Check API, this application ruturns fact checked articles based on the user's input search query. Using CSS and jquery animations, this appliaction displays the capabilities of my coding and design skillset.</h3>
            <hr/>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="fourteen wide centered column">
          <a href="https://github.com/aarondig/burgerEater">
            <img class="img-fluid" src="https://github.com/aarondig/burgerEater/blob/main/assets/Screen%20Shot%202020-11-04%20at%208.46.43%20PM.png?raw=true"></img>
          </a>
        </div>
        <div class="fourteen wide centered column">
          <div class='column'>
            <h2 class="title">Burger Eater</h2>
          </div>
          <div class="column">
            <h3>Using a mySQL database, this application allows a user to write-to, update, and edit a database in the form of eating burgers.</h3>
            <hr/>
          </div>
        </div>
      </div>
      
          
    </div>
  </div>
</div> ;
}

export default Featured;