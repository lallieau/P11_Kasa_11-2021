import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from '../src/pages/Home';
import { Accomodation } from './pages/Accomodation';
import { About } from './pages/About';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/accomodation" element={<Accomodation />}>
        <Route path=":accomodationId" element={<Accomodation />} />
      </Route>
      <Route path="/a-propos" element={<About />} />
    </Routes>
  );
};

export const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="content">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default function App() {
  return <Router />;
}
