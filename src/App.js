import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getAll, update } from './BooksAPI'
import BookList from './BookList'
import Search from './Search'
import NotFound from './NotFound'

import './App.css'

class BooksApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { books: [] }
    this.changeShelf = this.changeShelf.bind(this)
  }

  componentDidMount() {
    getAll().then((books) => {
      	this.setState({ books })
    }).catch((e) => {
      console.log(e)
    })
  }

  changeShelf (changedBook, shelf) {
      update(changedBook, shelf).then(response => {
        changedBook.shelf = shelf
        this.setState((prevState) => ({
          books: prevState.books.filter(book => book.id !== changedBook.id).concat(changedBook)
        }))
      })
    }
	
  render() {
    const { books } = this.state
    return (
      <div className="app">
       <Switch>
       	<Route exact path="/"  render={() => (
    		<div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <BookList books={books} changeShelf={this.changeShelf} />
                <div className="open-search">
                  <Link to="/search">Search</Link>
                </div>
              </div>
    	)} 
  		/>
		<Route
            path="/search"
            render={() => (
              <Search books={books} changeShelf={this.changeShelf} />
            )}
          />
        <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
