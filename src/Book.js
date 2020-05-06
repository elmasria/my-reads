import React from 'react'
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'

const Book = (props) => {
  const { book, books, changeShelf } = props
  
  const ImageCover = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "http://via.placeholder.com/128x188"
  const title = book.title ? book.title : 'N/A'

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ backgroundImage: `url(${ImageCover})` }}
          />
			<ShelfChanger book={book} books={books} changeShelf={changeShelf} />
        </div>
        <div className="book-title">{title}</div>
		{
		book.authors &&
          book.authors.map((item, i) => (
            <div className="book-authors" key={i}>
              {item}
            </div>
          ))
		}
      </div>
    </li>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default Book