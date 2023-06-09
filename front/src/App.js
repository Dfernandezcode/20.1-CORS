import "./App.css";
import React from "react";

function App() {
  const apiUrl = "https://20-1-cors-k9b9.vercel.app/book";
  const [books, setBooks] = React.useState();

  React.useEffect(() => {
    fetch(apiUrl).then((books) => {
      setBooks(books);
    });
  }, []);

  return (
    <div className="app">
      <h1>Books</h1>
      <ul>
        {books?.map((book) => (
          <>
            <li key={book._id}>{book.title}</li>
            <li key={book._id}>{book.author}</li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;
