import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export const Header = () => {
  const { isAuthenticated, userEmail } = useContext(AuthContext);

  return (
    <header>
      <nav>
        <h1><Link to="/">BookStore</Link></h1>
        {isAuthenticated && (<span>Welcome {userEmail}</span>)}
        <ul>
          <li><Link to="/catalog">All books</Link></li>

          {isAuthenticated && (
            <>
              <li><Link to="/create">Create Book</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </>
          )}

          {!isAuthenticated && (
            <>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          )}

        </ul>
      </nav>
    </header>

  );
}