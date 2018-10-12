import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Bookshelf = props => {
  const { title, books, handleBookChange } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.id}>
              <Book
                id={book.id}
                title={book.title}
                authors={book.authors ? book.authors : []}
                thumbnail={book.imageLinks ? book.imageLinks.thumbnail : ''}
                shelf={book.shelf}
                handleChange={handleBookChange}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  handleBookChange: PropTypes.func.isRequired,
};

export default Bookshelf;
