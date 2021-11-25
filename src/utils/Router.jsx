import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Accomodation } from '../pages/Accomodation';
import { About } from '../pages/About';
import { Error } from '../pages/Error';

export const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" index element={<Home />} />
      <Route path="/accomodation/:accomodationId" element={<Accomodation />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
