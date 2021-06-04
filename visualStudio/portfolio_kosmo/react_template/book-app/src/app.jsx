import "./app.css";
import React, { Component } from "react";
import Books from "./components/books";

//스프레드 연산자
//객체리터럴

class App extends Component {
  eventIncrement = (book) => {
    console.log("increment" + book.name);
    book.count++;
    this.setState(this.state);
  };

  eventDecrement = (book) => {
    console.log("decrement" + book.name);
    book.count--;
    if (book.count < 0 ? 0 : book.count);
    this.setState(this.state);
  };

  eventZero = (book) => {
    console.log("zero" + book);
    this.setState(this.state);
  };

  render() {
    return (
      <>
        <Books
          onIncrement={this.eventIncrement}
          onDecrement={this.eventDecrement}
          onZero={this.eventZero}
        />
      </>
    );
  }
}

export default App;
