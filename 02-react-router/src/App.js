import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './style.css';
import { Navigation } from './components/Navigation';
import { Books } from './components/Books'
import { UsersPage } from './components/UsersPage/UsersPage'
import { Invitations } from './components/UsersPage/Invitations' 
import { Home } from './components/Home'
import { Book1 } from './components/Book1';
import { Book2 } from './components/Book2';
import { Book3 } from './components/Book3';


function App() {

  const[books, setBooks] = useState([])
  useEffect(() => {
  fetch("http://localhost:3002/books")
      .then((response) => response.json())
      .then((books) => {
          console.log(books)
          setBooks(books)}
          )
      }, [])


  return (
    <Router>
       <Navigation />

     <Routes>
        <Route path="books" element={<Books />}/>
        <Route path="users" element={<UsersPage />} />
        <Route path="users/invitations" element={<Invitations/>} />
        <Route path="/" element={<Home />} />
        <Route path="books/0" element={<Book1 book1={books[0]}/>}  />
        <Route path="books/1" element={<Book2 book2={books[1]}/>}  />
        <Route path="books/2" element={<Book3 book3={books[2]}/>}  />
      </Routes>

    </Router>
  );
}

export default App;
