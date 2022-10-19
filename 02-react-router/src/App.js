import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './style.css';
import { Navigation } from './components/Navigation';
import { Books } from './components/Books'
import { UsersPage } from './components/UsersPage/UsersPage'
import { Invitations } from './components/UsersPage/Invitations' 
import { Home } from './components/Home'


function App() {
  return (
    <Router>
       <Navigation />

     <Routes>
        <Route path="books" element={<Books />}/>
        <Route path="books/1" element={<Books />} />
        <Route path="books/2" element={<Books />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/invitations" element={<Invitations/>} />
        <Route path="/" element={<Home />} />
      </Routes>

     

    </Router>
  );
}

export default App;
