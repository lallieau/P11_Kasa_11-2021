import Thumb from "../Thumbnail";
//import "../Gallery/index.css";

import { useLodgings } from "../../hooks/useLodgings";

export const Gallery = () => {
  const lodgings = useLodgings();

  return (
    <div className="gallery">
      {lodgings.map((lodging) => (
        <Thumb title={lodging.title} cover={lodging.cover} />
      ))}
    </div>
  );
};

