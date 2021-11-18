import logo from '../../public/assets/logo.png';
import { Nav } from '../Nav';
import './index.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Kasa" className="header_kasa-logo" />
      </Link>
      <Nav />
    </div>
  );
};
