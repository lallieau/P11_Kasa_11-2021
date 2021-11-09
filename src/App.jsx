import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Home } from '../src/pages/Home'
import Nav from '../src/components/Nav'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
    </Routes>
  );
};

export const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Header />
      {children}
    </>
  );
};

export default function App() {
  return <Router />;
}
