import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container home-container">
      <Link className="card-btn btn--default details--btn" to="/incubators">
        Incubators Page
      </Link>
      <Link className="card-btn btn--secondary details--btn" to="/learn">
        Learn Page
      </Link>
    </div>
  );
}

export default Home;
