import logo from "../../public/assets/logo-kasa-blanc.png";
import "../Footer/index.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <img alt="Logo Kasa"src={logo}/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}