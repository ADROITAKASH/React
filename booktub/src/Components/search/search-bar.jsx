import React from "react";
import "./search-bar.css";
function SearchBar(props) {
  return (
    <div className="container">
      {console.log("hi")}
      {console.log(props.input.state)}
      <input
        type="text"
        placeholder="search..."
        value={props.input}
        onChange={(result) =>
          props.this.setState({ search: result.target.value })
        }
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            props.this.onSearchHandler();
          }
        }}
      ></input>
      <button
        className="search pulse-grow"
        type="submit"
        onClick={props.this.onSearchHandler}
        placeholder="Search"
      />
      {console.log(props.this.state.active + " abcd")}
    </div>
  );
}

export default SearchBar;
