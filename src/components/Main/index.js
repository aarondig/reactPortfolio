import React, { useState, useEffect } from "react";
import "./style.css";

function Main(props) {

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
      if (scrollTop < 300) {
      setScrolling( e.target.documentElement.scrollTop > scrollTop);
    }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const style = scrolling ? { opacity: 0 } : { opacity: 1 };

  return <div id="main">
          <div className="ui two column centered grid">
          <div className="center aligned row">
              <div className="ui container" id="mainContainer" style={style}>
                <h1 className="ui inverted header" id="mainHead">AARON DIGGDON</h1>
                <h2 className="ui inverted header" id="subHead">User experience driven web development.</h2>
            </div>
          </div>
          </div>
          <div id="line"></div>  
          <h1 className="ui header" id="background">AARON DIGGDON AARON DIGGDON AARON DIGGDON</h1>

        </div>;
}

export default Main;