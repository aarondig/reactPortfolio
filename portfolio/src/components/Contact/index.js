import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

function Contact(props) {
  return <div id="contact">
    <div class="ui vertical stripe segment">
      <div class="ui middle aligned stackable grid container">
      <div class='row'>
        <div class='fourteen wide column'>
          <h2 class="ui header">CONTACT</h2>
        </div>
        <div class='row'>
          <div class='ten wide column'>
            <div class="ui buttons">
              <button class="ui basic green inverted button" onClick={()=> alert("aarondiggdon@gmail.com")}>
                <i class="icon user"></i>
                  Email
              </button>
              <button class="ui basic blue inverted button" onClick={()=> window.open("https://www.linkedin.com/in/aarondiggdon")}>
              <i class="linkedin icon"></i>
                  Linkedin
              </button>
              <button class="ui basic yellow inverted button" onClick={()=> window.open("https://www.instagram.com/aarondiggdon")}>
              <i class="instagram icon"></i>
                  Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> ;
}

export default Contact;