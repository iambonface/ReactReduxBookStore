import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {selectBook} from '../actions/index'

class BookDetail extends Component {
  render () {
    if (!this.props.book) {
      return <div>Please select a book to get started:</div>
    }

    return (
      <div className='col-md-6'>
        <h3>BookDetail:</h3>
        <h5>{this.props.book.title}</h5> 
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

function mapDispatchTopProps(dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchTopProps)(BookDetail)
