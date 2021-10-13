import { Link } from "react-router-dom";
import React from "react";

import { moviesData } from "../MoviesData";

const Menu = () => {

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="/">
              <a class="nav-link" >
                Home <span class="sr-only">(current)</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
