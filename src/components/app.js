import React, { Component } from 'react';
import BookList from '../containers/book_list'
import BookDetail from '../containers/BookDetail'

export default class App extends Component {
  render() {
    return (
      <div className='row'>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
