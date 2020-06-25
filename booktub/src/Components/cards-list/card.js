import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card-container">
      <img alt="book" src={props.book.volumeInfo.imageLinks.thumbnail}></img>
      {/* {console.dir(props.book.volumeInfo.imageLinks.thumbnail)} */}
      <h1>{props.book.volumeInfo.title}</h1>
    </div>
  );
}

export default Card;
