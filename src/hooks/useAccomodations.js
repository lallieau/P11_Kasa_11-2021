import {useEffect, useState} from 'react';
import ACCOMODATIONS from '../data.json';

export const useAccomodations = accomodationId => {
  const [accomodations, setAccomodations] = useState(null);
  const [loading, setLoading] = useState(true);

  const getAccomodations = () => ACCOMODATIONS;
  const getAccomodationById = id =>
    ACCOMODATIONS.filter(accomodation => accomodation.id === id);

  const handleAccomodations = accomodations => {
    setLoading(true);
    setAccomodations(accomodations);
    setLoading(false);
  };

  useEffect(() => {
    if (accomodationId) {
      return handleAccomodations(getAccomodationById(accomodationId));
    }

    handleAccomodations(getAccomodations());
  }, [accomodationId]);

  return {accomodations, loading, getAccomodations, getAccomodationById};
};
