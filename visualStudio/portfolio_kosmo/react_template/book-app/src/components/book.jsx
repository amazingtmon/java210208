import React, { Component } from "react";

class Book extends Component {
  state = {
    count: 0,
  };

  eventIncrement = (event) => {
    //console.log(event);
    this.setState({ count: this.state.count + 1 });
  };

  eventZero = (event) => {
    //console.log(event);
    this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        <span className="book-name">java programing</span>
        <span className="book-count">{this.state.count}</span>
        <button className="book-increase" onClick={this.eventIncrement}>
          <i className="fas fa-plus-circle"></i>
        </button>
        <button className="book-zero" onClick={this.eventZero}>
          <i className="fab fa-creative-commons-zero"></i>
        </button>
      </>
    );
  }
}

export default Book;
