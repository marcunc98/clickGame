import React from "react";
import "./ImageCards.css";

const ImageCards = props => (
  <div className="card">
    <div className="img-container">
      <img
        onClick={() => props.shuffleImages(props.id)}
        alt={props.name}
        src={props.image}
      />
    </div>
  </div>
);

export default ImageCards;
