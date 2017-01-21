import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {selectBook} from '../actions/index'

class BookList extends Component {
  renderList () {
    return this.props.book.map((book, index) => {
      return(
        <li
          key={index}
          onClick={() => this.props.selectBook(book)}
          className='list-group-item'>
          {book.title}
        </li>
      )
    })
  }
  render () {
    return (
      <div className='col-md-6'>
        <ul className='list-group col-md-5'>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.books
  }
}

function mapDispatchTopProps(dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchTopProps)(BookList)
