import disableStar from '../../public/assets/disable-star.svg';
import activeStar from '../../public/assets/active-star.svg';
import '../Ratings/index.css';

export const Ratings = ({ rating }) => {
  const range = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {range.map((rangeElement) =>
        rating >= rangeElement ? (
          <img
            className="rating_star"
            key={rangeElement.toString()}
            src={activeStar}
            alt=""
          />
        ) : (
          <img
            className="rating_star"
            key={rangeElement.toString()}
            src={disableStar}
            alt=""
          />
        )
      )}
    </div>
  );
};
