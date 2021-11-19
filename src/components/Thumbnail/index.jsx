import '../Thumbnail/index.css';
import { Link } from 'react-router-dom';

export const Thumbnail = ({ title, cover, id }) => {
  return (
    <Link to={`/accomodation/${id}`} key={id} className="thumb">
      <h2 className="thumb_title">{title}</h2>
      <img src={cover} alt="La location" className="thumb_image" />
    </Link>
  );
};
