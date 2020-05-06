  
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookList from './BookList'

const BookSection = props => {
  const { books, changeShelf } = props
  
  return (
    const { books, changeShelf } = this.props
    return (
      <div className="list-books">
      <div className="list-books-title">
     	 <h1>MyReads</h1>
      </div>
      <BookList books={books} changeShelf={this.changeShelf} />
      <div className="open-search">
      	<Link to="/search">Search</Link>
      </div>
    </div>
    )
  )
}

BookSection.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default BookSection