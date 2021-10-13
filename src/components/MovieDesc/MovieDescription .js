import React from "react";
import Menu from "../NavBar/Menu";
import { moviesData } from "../MoviesData";
import ReactPlayer from "react-player";
import Rate from "../Rate";
const MovieDescription = ({  id,rating  }) => {
  return (
    <div>
      <Menu />

      {moviesData
        .filter((movie) => movie.id == id)
        .map((selected, i) => (
          <div className="container">
            <div className="row g-0 h-100 ">
            <div className="card mb-3">
              <ReactPlayer
                className="react-player"
                url={selected.trailerUrl}
                width="100%"
                height="500PX"
              />
              <div className="card-body d-flex flex-row align-items-center justify-content-around">
                <div className="col-md-2">
                  <img
                    src={selected.posterURL}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <h2 className="card-title">{selected.title}</h2>
                  <p className="card-text">{selected.description}</p>
                  <span className="card-rating " style={{color:"#FFD700",fontSize:30}}>
              <Rate rating={selected.rating} />
            </span>
                </div>
              </div>
            </div>

          </div>
          </div>
        ))}
    </div>
  );
};

export default MovieDescription;
