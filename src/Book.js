import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { id, title, authors, thumbnail, shelf, handleChange } = props;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url(${thumbnail})`,
          }}
        >
          &nbsp;
        </div>
        <div className="book-shelf-changer">
          <select
            value={shelf}
            onChange={event => handleChange({ id }, event.target.value)}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors.join(', ')}</div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
  thumbnail: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Book;
