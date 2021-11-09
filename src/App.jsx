import { Routes, Route } from "react-router-dom";
import {Header} from "./components/Header";
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
      <Header />
      {children}
    </>
  );
};

export default function App() {
  return <Router />;
}
