import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div
      style={{ textAlign: "center", backgroundColor: "forestgreen" }}
      className="jumbotron"
    >
      <h1>Google Books Search</h1>
    </div>
  );
}

export default Jumbotron;