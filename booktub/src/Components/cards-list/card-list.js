import React from "react";
import Card from "./card.js";
import "./card-list.css";

function CardList(props) {
  return (
    <div className="card-list">
      {props.booktub.map((book) => (
        <Card key={book.id} book={book}></Card>
      ))}
      {/* <input onChange={this.setState{url:eventtarget.value}}>search</input> */}
    </div>
  );
}

export default CardList;
