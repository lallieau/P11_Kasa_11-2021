import { useState } from 'react';
import '../Carousel/index.css';
import Prev from '../../public/assets/prev-arrow.svg';
import Next from '../../public/assets/next-arrow.svg';

export const Carousel = ({ pictures }) => {
  const [index, setIndex] = useState(0);

  let hasPrev = index > 0;
  let hasNext = index < pictures.length - 1;

  const handlePrevClick = () => {
    if (hasPrev) {
      setIndex(index - 1);
    } else {
      setIndex(pictures.length - 1);
    }
  };

  const handleNextClick = () => {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  let picture = pictures[index];

  return (
    <div className="carousel">
      <div className="carousel_button">
        <button
          className="carousel_button_prev"
          onClick={handlePrevClick}
          disabled={pictures.length <= 1}
        >
          <img className="carousel_button_arrow" src={Prev} alt="Précédent" />
        </button>
        <button
          className="carousel_button_next"
          onClick={handleNextClick}
          disabled={pictures.length <= 1}
        >
          <img className="carousel_button_arrow" src={Next} alt="Suivant" />
        </button>
      </div>
      <img
        className="carousel_image"
        key={picture}
        src={picture}
        alt="Accomodation"
      />
      {/*counter a rajouter*/}
    </div>
  );
};
