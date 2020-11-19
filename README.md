# React Portfolio

<img src="assets/reactPortfolio.png" alt="User Image">

<br>
<br>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<br>

## Description

This application uses REACT to create a portfolio that displays recent projects from my GitHub. Designed in the form of a SPA (Single Page Application), the application uses scroll to unveal new components, like the About, Projects, and Contact. A fixed navbar can be used to jump to specific components on the page. 

<br>

## File Format:

Components within the app.js file are formatted like so:

    function App() {
    return (
        <div className="App">
            <Wrapper>
                <Navbar />
                <Main/>
                <About />
                <Projects/>
                <Contact/>
            </Wrapper>
        </div>
    );
    }

However, the Main component acts most like the wrapper. Fixed elements within Main have a z-index of -5 as to act like a background for the rest of the components which all have z-index's of 2 and positions of absolute. This gives the page a simple 'parallax' feel on scroll.

<br>

## Table of Contents

- [Installation](#installation)

- [Test](#test)

- [Usage](#usage)

- [License](#license)

- [Questions](#questions)

<br>

## Test

[Deployed Link](https://aarondig.github.io/reactPortfolio/)

<br>

## Usage

This project uses: React, Javascript, and CSS

<br>

## License

Copyright protected under the open source MIT License.

<br>

## Questions

If you have any questions, open an issue.
<br>
<br>
<br>

More of my work can be found at [aarondig](https://github.com/aarondig).

<br>
<br>

<img src="https://avatars3.githubusercontent.com/u/70933425?v=4" width="50%" alt="User Image">