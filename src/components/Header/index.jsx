import logo from "../../public/assets/logo.png";
import Nav from "../Nav";
import "./index.css";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Kasa" className="header_kasa-logo" />
      <Nav />
    </div>
  );
}
