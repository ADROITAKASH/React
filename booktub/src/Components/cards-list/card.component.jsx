import React from "react";
import './card.style.css'

export const Card = props => (
    <div className='card-container'>
        <img alt='book' src={props.book.volumeInfo.imageLinks.thumbnail} k></img>
        {/* {console.dir(props.book.volumeInfo.imageLinks.thumbnail)} */}
        <h1>{props.book.volumeInfo.title}</h1>
    </div>
)

