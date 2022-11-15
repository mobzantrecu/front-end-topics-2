import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div
      className="h-72 
    w-64 flex flex-col border border-transparent 
    rounded-xl border-solid 
    overflow-hidden"
    >
      <div className="h-2/3 upSection"></div>
      <div className="h-1/2 bottomSection p-4 flex flex-col justify-between">
        <div className="flex">
          <span className="text w-max mr-5">****</span>
          <span className="text">5722</span>
        </div>
        <div className="flex justify-between">
          <span className="cardType">Debit Card</span>
          <span className="text">Visa</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
