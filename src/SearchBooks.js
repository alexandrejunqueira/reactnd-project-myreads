import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {
  state = {
    booksResults: [],
  };

  static propTypes = {
    bookshelfInfo: PropTypes.object.isRequired,
    handleBookChange: PropTypes.func.isRequired,
  };

  handleQueryChange = event => {
    const query = event.target.value.trim();

    if (query === '') {
      this.setState({ booksResults: [] });
    } else {
      BooksAPI.search(query).then(books => {
        this.setState({ booksResults: Array.isArray(books) ? books : [] });
      });
    }
  };

  render() {
    const { bookshelfInfo, handleBookChange } = this.props;
    const { booksResults } = this.state;

    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                onChange={this.handleQueryChange}
                placeholder="Search by title or author"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {booksResults.map(book => (
                <li key={book.id}>
                  <Book
                    id={book.id}
                    title={book.title}
                    authors={book.authors ? book.authors : []}
                    thumbnail={book.imageLinks ? book.imageLinks.thumbnail : ''}
                    shelf={
                      bookshelfInfo[book.id] ? bookshelfInfo[book.id] : 'none'
                    }
                    handleChange={handleBookChange}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
