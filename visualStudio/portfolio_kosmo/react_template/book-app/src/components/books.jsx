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
  /*
    새로운 도서정보가 입력되면 항상 복사해 와야 한다.
    books라는 새로운 배열을 만들건데, 우선 기존에 있는 state에 books를
    하나하나씩 이것을 spread syntax라고 하며 books에 있는 아이템들을
    하나씩 새로운 배열에 복사해 오는 것이다.
    이렇게 각각을 복사해 오고 주어진 이름을 이용해서 새로운 book도 만들어야 한다.
    
  */
  eventIncrement = (book) => {
    console.log("increment " + book.name);
    const books = [...this.state.books];
    const index = books.indexOf(book);
    console.log("index: " + index);
    books[index].count++;
    this.setState({ books });
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
