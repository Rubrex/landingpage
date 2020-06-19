import React from "react";
const Header = () => {
  // Stickey Header Functions
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    const element = document.querySelector("header");
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      console.log("Fading In");

      element.classList.add("sticky-header");
    } else {
      console.log("Fading Out");
      element.classList.remove("sticky-header");
    }
  }
  // END
  return (
    <header>
      <div className="navParent ">
        <div className="logo">Kats The Boss</div>
        <div className="navigation ">
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
