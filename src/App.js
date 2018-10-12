import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
  state = {
    booksOnShelves: [],
  };

  componentDidMount() {
    this.updateState();
  }

  updateState = () => {
    BooksAPI.getAll().then(books => this.setState({ booksOnShelves: books }));
  };

  handleBookChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.updateState());
  };

  bookshelfInfo = books => {
    const info = {};
    books.forEach(book => {
      info[book.id] = book.shelf;
    });
    return info;
  };

  render() {
    const { booksOnShelves } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              books={booksOnShelves}
              handleBookChange={this.handleBookChange}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              handleBookChange={this.handleBookChange}
              bookshelfInfo={this.bookshelfInfo(booksOnShelves)}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
