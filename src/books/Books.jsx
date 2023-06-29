import { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../config";
import BookDisplayer from './BooksDisplayer'

function Books() {
  const [books, setBooks] = useState([])
  
  const getBooks = async () => {
    axios.get(`${API_URL}/books`)
      .then((response) => {
        setBooks(response.data)
        console.log(response.data)
    })
  }

  useEffect(() => {
    getBooks();
  }, [])

  return(
    <div>
      <h1>Libros</h1>
      {books.map((book, index) => (
        <BookDisplayer name={book.name} author={book.author} price={book.price}/>
      ))}
      
    </div>
  )
}

export default Books;