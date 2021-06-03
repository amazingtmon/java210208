import React, { Component } from "react";
import Book from "./book";

class Books extends Component {
  state = {
    books: [
      { id: 1, name: "HTML", count: 0 },
      { id: 2, name: "JAVA", count: 0 },
      { id: 3, name: "SPRING", count: 0 },
    ],
  };

  eventIncrement = (book) => {
    console.log("increment " + book.name);
    book.count++;
    this.setState(this.state);
  };

  eventDecrement = (book) => {
    console.log("decrement " + book);
    book.count--;
    const count = book.count;
    this.setState({ count: count < 0 ? 0 : count });
  };

  eventZero = (book) => {
    console.log("zero " + book);
    book.count = 0;
    this.setState(this.state);
  };

  render() {
    return (
      <>
        <ul>
          Books Component
          {this.state.books.map((book) => (
            <Book
              key={book.id}
              book={book}
              onIncrement={this.eventIncrement}
              onDecrement={this.eventDecrement}
              onZero={this.eventZero}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default Books;
