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

      <div class="row">
        <div class="fourteen wide centered column">
          <a href="https://github.com/aarondig/clickyGame">
            <img class="img-fluid" src="https://github.com/aarondig/clickyGame/blob/main/assets/Screen%20Shot%202020-11-12%20at%206.22.42%20PM.png?raw=true"></img>
          </a>
        </div>
        <div class="fourteen wide centered column">
          <div class='column'>
            <h2 class="title">Memory Game</h2>
          </div>
          <div class="column">
            <h3>This game uses REACT to display a grid of images with onClick event listeners that trigger a function when selected. The onClick function within the game.js file determines if that same image has been clicked before. If it has, the game is lost and all state components are returned to their initial value, and setting the highscore as the user's current number of points. If it hasn't, the game continues, adding a point to the banner and shuffling cards using a math.random function.</h3>
            <hr/>
          </div>
        </div>
      </div>
      
      <div class="row">
        <div class="fourteen wide centered column">
          <a href="https://github.com/aarondig/workdayScheduler">
            <img class="img-fluid" src="https://github.com/aarondig/workdayScheduler/blob/master/_Users_Aaron_Desktop_workdayScheduler_index.html.png?raw=true"></img>
          </a>
        </div>
        <div class="fourteen wide centered column">
          <div class='column'>
            <h2 class="title">Workday Scheduler</h2>
          </div>
          <div class="column">
            <h3>A scheduling application that uses moment.js to relay real time colors on text boxes that save text using local storage.</h3>
          </div>
        </div>
      </div>
          
    </div>
  </div>
</div> ;
}

export default Featured;