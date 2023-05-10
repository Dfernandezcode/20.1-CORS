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
    <div className="App">
      <h1>Books</h1>
      <ul>
        {books?.map((book) => (
          <>
            <li>{book.title}</li>
            <li>{book.author}</li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;
