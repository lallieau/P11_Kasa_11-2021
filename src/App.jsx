import { Routes, Route } from "react-router-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer"
import { Home } from '../src/pages/Home';
import { Lodging } from '../src/pages/Lodging';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/lodging" index element={<Lodging />} />
    </Routes>
  );
};

export const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default function App() {
  return <Router />;
}
