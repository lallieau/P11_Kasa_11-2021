// import { useState, useEffect } from 'react';

import ACCOMODATIONS from '../data.json';

export const useAccomodations = () => {
  const getAccomodations = () => ACCOMODATIONS;
  const getAccomodationById = (id) =>
    ACCOMODATIONS.find((accomodation) => accomodation.id === id);

  return { getAccomodations, getAccomodationById };
};

// export const useAccomodations = (id) => {
//   const [accomodations, setAccomodations] = useState(() => ACCOMODATIONS);

//   const getAccomodation = () => ACCOMODATIONS;
//   const getAccomodationById = (id) =>
//     ACCOMODATIONS.find((accomodation) => accomodation.id === id);

//   useEffect(() => {
//     if (id) {
//       setAccomodations(getAccomodationById(id));
//     }
//   }, [id]);

//   return { accomodations, getAccomodation, getAccomodationById };
// };
