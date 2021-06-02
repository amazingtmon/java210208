import React, { Component } from "react";

class Book extends Component {
  state = {
    count: 0,
  };

  eventIncrement = (event) => {
    //console.log(event);
    this.setState({ count: this.state.count + 1 });
  };

  eventDecrement = (event) => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  };

  eventZero = (event) => {
    //console.log(event);
    this.setState({ count: 0 });
  };

  render() {
    console.log(this.props);
    const { name, count, onIncrement } = this.props.book;
    return (
      <>
        <div className="book-box">
          <span className="book-name">{name}</span>
          <span className="book-count">{count}</span>
          <button className="book-increase" onClick={this.eventIncrement}>
            <i className="fas fa-plus-circle"></i>
          </button>
          <button className="book-minus" onClick={this.eventDecrement}>
            <i className="fas fa-minus-circle"></i>
          </button>
          <button className="book-zero" onClick={this.eventZero}>
            <i className="fab fa-creative-commons-zero"></i>
          </button>
        </div>
      </>
    );
  }
}

export default Book;
