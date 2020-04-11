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
                <button>Cats</button>
              </li>
              <li>
                <button>Dogs</button>
              </li>
              <li>
                <button>Rabits</button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main></main>
      <footer>
        <div className="footerContainer">
          <div className="footerChild">
            <h1>Flor De Muerto</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
              nesciunt aspernatur reprehenderit quod illo officia, fugiat odio
              totam saepe ex voluptates repudiandae asperiores quos ab
              repellendus illum, accusantium, quaerat tenetur.
            </p>
            <strong>
              Subscribe to the site{" "}
              <span role="img" aria-label="bell">
                🔔
              </span>
            </strong>
          </div>
          <div className="footerChild">
            <h1>Flor De Muerto</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
              nesciunt aspernatur reprehenderit quod illo officia, fugiat odio
              totam saepe ex voluptates repudiandae asperiores quos ab
              repellendus illum, accusantium, quaerat tenetur.
            </p>
            <strong>
              Make a Donation{" "}
              <span role="img" aria-label="money">
                💰
              </span>
            </strong>
          </div>
          <div className="footerChild">
            <h1>Flor De Muerto</h1>
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
