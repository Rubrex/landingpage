import React from "react";
const Header = () => {
  return (
    <header>
      <div className="navParent">
        <div className="logo">Kats The Boss</div>
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
  );
};

export default Header;
