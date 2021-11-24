import logo from '../../assets/logo.png';
import { Nav } from '../Nav';
import './index.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="header">
      <Link className="header_link" to="/">
        <img src={logo} alt="Kasa" className="header_kasa-logo" />
      </Link>
      <Nav />
    </div>
  );
};
