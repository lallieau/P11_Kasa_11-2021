import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">Accueil</Link>
      <Link to="/about">À propos</Link>
    </div>
  );
};
