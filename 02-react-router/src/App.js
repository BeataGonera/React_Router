import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './style.css';

function UsersPage() {
  return (
    <div>
      <ul>
        <li>Adam</li>
        <li>Natalia</li>
      </ul>
    </div>
  );
}

function AppContent() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navigation-header">
        <div className="app-logo" onClick={() => navigate('/')}></div>
        <Link id="menu-home" className="menu-item" to="/">
          Home
        </Link>
        <Link id="menu-books" className="menu-item" to="/books">
          Books
        </Link>
        <Link id="menu-users" className="menu-item" to="/users">
          Users
        </Link>
        <Link id="menu-invitations" className="menu-item" to="/users/invitations.html">
          Invitations
        </Link>
      </nav>
      <p>Helllooooo</p>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="books" element="I am a books" />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/invitations" element="I am invitations" />
        <Route path="/" element="Welcome" />
      </Routes>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
