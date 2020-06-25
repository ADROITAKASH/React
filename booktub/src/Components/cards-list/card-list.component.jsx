import React from "react";
import { Card } from './card.component';
import './card-list.styles.css';



export const CardList = props => (
    < div className="card-list" >
        {
            props.booktub.map(book => (<Card key={book.id} book={book} ></Card>))
        }
        {/* <input onChange={this.setState{url:eventtarget.value}}>search</input> */}

    </div>
)
