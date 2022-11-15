import React from "react";
import "./Card.scss";

const ScssCard = () => {
  return (
    <div className="main">
      <div className="upSection"></div>
      <div className="bottomSection">
        <div>
          <span>****</span>
          <span>5722</span>
        </div>
        <div>
          <span>Debit Card</span>
          <span>Visa</span>
        </div>
      </div>
    </div>
  );
};

export default ScssCard;
