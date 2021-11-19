import { useState } from 'react';
import '../Carousel/index.css';
import PrevIcon from '../../public/assets/prev-arrow.svg';
import NextIcon from '../../public/assets/next-arrow.svg';

const CarouselButton = ({ buttonClassName, event, isPrev }) => {
  return (
    <button className={buttonClassName} onClick={event}>
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

    setIndex(pictures.length - 1);
  };

  const handleNextClick = () => {
    if (hasNext) {
      return setIndex(index + 1);
    }
    setIndex(0);
  };

  const pictureUrl = pictures[index];
  const isDisable = pictures.length === 0;

  return (
    <div className="carousel">
      <div className="carousel_button">
        {!isDisable ? (
          <>
            <CarouselButton
              buttonClassName="carousel_button_prev"
              event={handlePrevClick}
              isPrev={true}
            />
            <CarouselButton
              buttonClassName="carousel_button_next"
              event={handleNextClick}
              isPrev={false}
            />
          </>
        ) : null}
      </div>
      <img
        className="carousel_image"
        key={pictureUrl}
        src={pictureUrl}
        alt="Accomodation"
      />
      {/*counter a rajouter*/}
    </div>
  );
};
