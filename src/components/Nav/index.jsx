import { Link } from 'react-router-dom';
import '../Nav/index.css';
import { useLocation } from 'react-router';

export const Nav = () => {
  const location = useLocation();

  return (
    <div className="nav">
      {location.pathname === '/' ? (
        <Link className="nav_link nav_link--active" to="/">
          Accueil
        </Link>
      ) : (
        <Link className="nav_link" to="/">
          Accueil
        </Link>
      )}
      {location.pathname === '/about' ? (
        <Link className="nav_link nav_link--active" to="/about">
          À propos
        </Link>
      ) : (
        <Link className="nav_link" to="/about">
          À propos
        </Link>
      )}
    </div>
  );
};
