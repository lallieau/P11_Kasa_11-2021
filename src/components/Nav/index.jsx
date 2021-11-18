import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">Accueil</Link>
      <Link to="/a-propos">À propos</Link>
    </div>
  );
};
