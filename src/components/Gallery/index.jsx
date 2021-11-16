import {Thumbnail} from "../Thumbnail";
import "../Gallery/index.css";

import { useAccomodations } from "../../hooks/useAccomodations";

export const Gallery = () => {
  const accomodations = useAccomodations();

  return (
    <div className="gallery">
      {accomodations.map((accomodation) => (
        <Thumbnail {...accomodation} />
      ))}
    </div>
  );
};

