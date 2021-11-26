import {Thumbnail} from '../Thumbnail';
import '../Gallery/index.css';
import {useAccomodations} from '../../hooks/useAccomodations';

export const Gallery = () => {
  const {accomodations} = useAccomodations();

  if (!accomodations) return null;

  return (
    <div className="gallery">
      {accomodations.map(accomodation => (
        <Thumbnail key={accomodation.id} {...accomodation} />
      ))}
    </div>
  );
};
