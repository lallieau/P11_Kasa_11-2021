import { useState } from 'react';
import '../Carousel/index.css';
import PrevIcon from '../../assets/prev-arrow.svg';
import NextIcon from '../../assets/next-arrow.svg';

const CarouselButton = ({ buttonClassName, event, isPrev, isDisable }) => {
  return (
    <button className={buttonClassName} disabled={isDisable} onClick={event}>
      {isPrev ? (
        <img className="carousel_button_arrow" src={PrevIcon} alt="Précédent" />
      ) : (
        <img className="carousel_button_arrow" src={NextIcon} alt="Suivant" />
      )}
    </button>
  );
};

export const Carousel = ({ pictures }) => {
  const [index, setIndex] = useState(0);

  const hasPrev = index > 0;
  const hasNext = index < pictures.length - 1;

  const handlePrevClick = () => {
    if (hasPrev) {
      return setIndex(index - 1);
    }
    if (pictures) {
      setIndex(pictures.length - 1);
    }
  };

  const handleNextClick = () => {
    if (hasNext) {
      return setIndex(index + 1);
    }
    setIndex(0);
  };

  const pictureUrl = pictures[index];
  const isDisable = pictures.length === 1;

  return (
    <div className="carousel">
      <div className="carousel_button">
        <>
          <CarouselButton
            buttonClassName="carousel_button_prev"
            event={handlePrevClick}
            isPrev
            isDisable={isDisable}
          />
          <CarouselButton
            buttonClassName="carousel_button_next"
            event={handleNextClick}
            isPrev={false}
            isDisable={isDisable}
          />
        </>
      </div>
      <img
        className="carousel_image"
        key={pictureUrl}
        src={pictureUrl}
        alt="Accomodation"
      />
      <p className="carousel_counter">
        {index + 1}/{pictures.length}
      </p>
    </div>
  );
};
