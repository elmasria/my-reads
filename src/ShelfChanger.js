import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfChanger extends Component {
  constructor(props) {
    super(props);
    this.updateShelf = this.updateShelf.bind(this);
  }
  
  updateShelf = event =>
    this.props.changeShelf(this.props.book, event.target.value)

  render() {
    const { book, books } = this.props
    let currentShelf = 'none'

	books.some((item) => {
      if (item.id === book.id) {
        currentShelf = item.shelf
        return true
      }
      return false
    })
 
    return (
      <div className="book-shelf-changer">
        <select onChange={this.updateShelf} defaultValue={currentShelf}>
          <option value="none" disabled>
            Choose a Category...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">Store</option>
        </select>
      </div>
    );
  }
}

ShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default ShelfChanger