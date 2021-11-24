import { useState } from 'react';
import Back from '../../assets/arrow-back.svg';
import Ahead from '../../assets/arrow-ahead.svg';
import './index.css';

export const Dropdown = ({ title, content }) => {
  const [showMore, setShowMore] = useState(false);
  const handleMoreClick = () => setShowMore(!showMore);

  return (
    <div className="dropdown">
      <button className="dropdown_button" onClick={handleMoreClick}>
        {title}
        {showMore ? (
          <img className="dropdown_button_arrow" src={Back} alt="Back" />
        ) : (
          <img className="dropdown_button_arrow" src={Ahead} alt="Ahead" />
        )}
      </button>
      {showMore && <div className="dropdown_content">{content}</div>}
    </div>
  );
};
