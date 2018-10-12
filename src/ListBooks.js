import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';

const ListBooks = props => {
  const { books, handleBookChange } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            title="Currently Reading"
            books={books.filter(book => book.shelf === 'currentlyReading')}
            handleBookChange={handleBookChange}
          />
          <Bookshelf
            title="Want to Read"
            books={books.filter(book => book.shelf === 'wantToRead')}
            handleBookChange={handleBookChange}
          />
          <Bookshelf
            title="Read"
            books={books.filter(book => book.shelf === 'read')}
            handleBookChange={handleBookChange}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  handleBookChange: PropTypes.func.isRequired,
};

export default ListBooks;
