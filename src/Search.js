import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { search }  from './BooksAPI'
import Book from './Book'

class Search extends Component {
  constructor(props) {
      super(props)
      this.state = {
        query: '',
        newBooks: [],
        error: false
      }
      this.getBooks = this.getBooks.bind(this)
   }

  getBooks (event) {
    const query = event.target.value
    const newState = { query }
    if (query) {
      search(query.trim(), 40).then(books => {
        const searchQuery = {}
        if (books.length > 0) {
          searchQuery.newBooks = books 
          searchQuery.error = false 
        } else {          
          searchQuery.newBooks = [] 
          searchQuery.error = true
  		}        
    	this.setState(searchQuery)
      })
    } else {
      newState.newBooks = []
      newState.error = false 
    }
    this.setState(newState)
  }

  render() {
    const { query, newBooks, error } = this.state
    const { books, changeShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Choose target book title or author"
              value={query}
              onChange={this.getBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
		{
              newBooks.length > 0 && (
                <div>
                  <h3>{newBooks.length} books found </h3>
                  <ol className="books-grid">
                    {
                      newBooks.map((book) => (
                        <Book
                          book={book}
                          books={books}
                          key={book.id}
                          changeShelf={changeShelf}
                        />
                      ))
					}
                  </ol>
                </div>
             )
		}
        {
          error && (
          <h3>Search did not return any books. Please try again!</h3>
          )
		}
        </div>
      </div>
    )
  }
}


Search.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}


export default Search