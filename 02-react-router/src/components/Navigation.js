import {NavLink, useNavigate} from 'react-router-dom'


export const Navigation = () => {
    const navigate = useNavigate();
    return (
      <>
        <nav className="navigation-header">
          <div className="app-logo" onClick={() => navigate('/')}></div>
          <NavLink id="menu-home" className={({isActive}) => (isActive ? "menu-item__active" : "menu-item")} to="/">
            Home
          </NavLink>
          <NavLink id="menu-books" className={({isActive}) => (isActive ? "menu-item__active" : "menu-item")} to="/books">
            Books
          </NavLink>
          <NavLink id="menu-users" className={({isActive}) => (isActive ? "menu-item__active" : "menu-item")} to="/users">
            Users
          </NavLink>
          <NavLink id="menu-invitations" className={({isActive}) => (isActive ? "menu-item__active" : "menu-item")} to="/users/invitations">
            Invitations
          </NavLink>
        </nav>
      </>
    );
  }