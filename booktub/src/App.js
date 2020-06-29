import React, { Component } from "react";
import "./App.css";
import Nav from "./Components/menu/menu";
import SearchBar from "./Components/search/search-bar";
import CardList from "./Components/cards-list/card-list";

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
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}`)
      .then((response) => response.json())
      // .then(books => console.log(books.items))d
      .then((books) => {
        this.setState({ booktub: books.items });
        console.log(this.state.booktub);
      })
      .catch(console.log("not found"));
  }
  onSearchHandler() {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}`)
      .then((response) => response.json())
      // .then(books => console.log(books.items))d
      .then((books) => this.setState({ booktub: books.items }))
      .catch(console.log("not found"));
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
