import React, { Component } from 'react';
import './App.css';
import { CardList } from "./Components/cards-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      booktub: [],
      search: 'search + terms',
      // url: `https://www.googleapis.com/books/v1/volumes?q=`,
      // hi: this.state.search
      // search+ terms
    };
  }

  componentDidMount() {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}`)
      .then(response => response.json())
      // .then(books => console.log(books.items))d
      .then(books => this.setState({ booktub: books.items }))
      .catch(console.log('not found'))
  }

  render() {
    return (
      <div className='App'>
        <input type='text' placeholder='search' onChange={result => this.setState({ search: result.target.value })}></input>
        <button onClick={this.componentDidMount()} placeholder='Search' />
        {console.log(this.state.search)}
        {console.dir(this.state)}
        {console.log(this.state.url)}
        <CardList booktub={this.state.booktub}></CardList>
      </div>
    )
  }
}

export default App;

// {
//   {
//     name: '20 naalil Js padipathu eppadi',
//       id: 'bk-1'
//   },
//   {
//     name: '20 naalil Js padipathu eppadi',
//       id: 'bk-2'
//   },
//   {
//     name: '20 naalil Js padipathu eppadi',
//       id: 'bk-3'
//   },
//   {
//     name: '20 naalil Js padipathu eppadi',
//       id: 'bk-4'
//   },
//   {
//     name: '20 naalil Js padipathu eppadi',
//       id: 'bk-5'
//   },
//   {
//     name: '20 naalil Js padipathu eppadi',
//       id: 'bk-6'
//   },
//   {
//     name: '20 naalil Js padipathu eppadi',
//       id: 'bk-7'
//   },
//   {
//     name: '20 naalil Js padipathu eppadi',
//       id: 'bk-8'
//   },
//   {
//     name: '20 naalil Js padipathu eppadi',
//       id: 'bk-9'
//   },
//   {
//     name: '20 naalil Js padipathu eppadi',
//       id: 'bk-10'
//   },
//   {
//     name: '20 naalil Js padipathu eppadi',
//       id: 'bk-11'
//   },
//   {
//     name: '20 naalil Js padipathu eppadi',
//       id: 'bk-12'
//   },
//   {
//     name: '20 naalil Js padipathu eppadi',
//       id: 'bk-13'
//   },
//   {
//     name: '20 naalil Js padipathu eppadi',
//       id: 'bk-14'
//   },
//   {
//     name: '20 naalil Js padipathu eppadi',
//       id: 'bk-15'
//   },
//   {
//     name: '20 naalil Js padipathu eppadi',
//       id: 'bk-16'
//   },
//   {
//     name: '20 naalil Js padipathu eppadi',
//       id: 'bk-17'
//   },
//   {
//     name: '20 naalil Js padipathu eppadi',
//       id: 'bk-18'
//   },
//   {
//     name: '20 naalil Js padipathu eppadi',
//       id: 'bk-19'
//   },
//   {
//     name: '20 naalil Js padipathu eppadi',
//       id: 'bk-20'
//   }}