import React from "react";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <header>
        <div className="navParent">
          <div className="logo">RubReX</div>
          <div className="navigation">
            <ul>
              <li>
                <button class="waves-effect waves-light btn">Cats</button>
              </li>
              <li>
                <button class="waves-effect waves-light btn">Dogs</button>
              </li>
              <li>
                <button class="waves-effect waves-light btn">Rabits</button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main></main>
      <footer>
        <div className="footerContainer">
          <div className="footerChild">
            <h3>Flor De Muerto</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
              nesciunt aspernatur reprehenderit quod illo officia, fugiat odio
              totam saepe ex voluptates repudiandae asperiores quos ab
              repellendus illum, quaerat tenetur.
            </p>
            <strong>
              Sub to the site
              <span role="img" aria-label="bell">
                🔔
              </span>
            </strong>
          </div>
          <div className="footerChild">
            <h3>Flor De Muerto</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
              nesciunt aspernatur reprehenderit quod illo officia, fugiat odio
              totam saepe ex voluptates repudiandae asperiores quos ab
              repellendus illum, accusantium, quaerat tenetur.
            </p>
            <strong>
              Make a Donation
              <span role="img" aria-label="money">
                💰
              </span>
            </strong>
          </div>
          <div className="footerChild">
            <h3>Flor De Muerto</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
              nesciunt aspernatur reprehenderit quod illo officia, fugiat odio
              totam saepe ex voluptates repudiandae asperiores quos ab
              repellendus illum, accusantium, quaerat tenetur.
            </p>
            <strong>
              Contribute{" "}
              <span role="img" aria-label="heart">
                ❤️
              </span>
            </strong>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
