import {useState} from 'react';
import Back from '../../assets/arrow-back.svg';
import Ahead from '../../assets/arrow-ahead.svg';
import './index.css';

const defaultRenderItems = items => {
  if (!Array.isArray(items)) {
    return <p>{items}</p>;
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export const Dropdown = ({title, data, renderItems = defaultRenderItems}) => {
  const [hasMore, setHasMore] = useState(false);
  const toogleDropdown = () => setHasMore(!hasMore);

  return (
    <div className="dropdown">
      <button className="dropdown_button" onClick={toogleDropdown}>
        <h1>{title}</h1>
        <img
          className="dropdown_button_arrow"
          src={hasMore ? Ahead : Back}
          alt={hasMore ? 'Ahead' : 'Back'}
        />
      </button>
      {hasMore ? (
        <div className="dropdown_content">{renderItems(data)}</div>
      ) : null}
    </div>
  );
};
