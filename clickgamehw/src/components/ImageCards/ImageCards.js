import React from "react";
import "./ImageCards.css";

const ImageCards = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <span onClick={() => props.cycleImages(props.id)} className="cycle" />
  </div>
);

export default ImageCards;
