import ACCOMODATIONS from '../data.json';

export const useAccomodations = () => {
  const getAccomodations = () => ACCOMODATIONS;
  const getAccomodationById = (id) =>
    ACCOMODATIONS.find((accomodation) => accomodation.id === id);

  return { getAccomodations, getAccomodationById };
};
