import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Accomodation } from '../pages/Accomodation';
import { About } from '../pages/About';
import { Error } from '../pages/Error';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/accomodation" element={<Accomodation />}>
        <Route path=":accomodationId" element={<Accomodation />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/error" element={<Error />} />
      {/* <Route component={Error} /> */}
    </Routes>
  );
};
