import React, { Component } from "react";
import "./App.css";
import Nav from "./Components/menu/menu";
import SearchBar from "./Components/search/search-bar";
import CardList from "./Components/cards-list/card-list";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.state = {
      booktub: [],
      search: "Harry Potter",
      // url: `https://www.googleapis.com/books/v1/volumes?q=`,
      // hi: this.state.search
      // search+ terms
    };
  }

  componentDidMount() {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}`)
      // .then((response) => console.log(response))
      .then((books) => {
        // console.log("start");
        // console.log(books.data);
        this.setState({ booktub: books.data.items });
        console.log(this.state.booktub);
      })
      .catch((err) => console.log(err));
  }
  onSearchHandler() {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}`)
      .then((books) => this.setState({ booktub: books.data.items }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        {/* <input
          type="text"
          placeholder="search"
          value={this.state.search}
          onChange={(result) => this.setState({ search: result.target.value })}
        ></input> */}
        {/* <button
          type="submit"
          onClick={this.onSearchHandler}
          placeholder="Search"
        /> */}
        <Nav this={this}></Nav>
        <SearchBar input={this.state.search} this={this}></SearchBar>
        <CardList booktub={this.state.booktub}></CardList>
      </div>
    );
  }
}

export default App;
