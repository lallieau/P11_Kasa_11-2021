import accomodation from '../data.json';

export const useAccomodations = () => {
    return accomodation;
}

export const getAccomodation = (id) => {
    return accomodation.find(
        accomodation => accomodation.id === id
    )
}