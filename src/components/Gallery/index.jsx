import {Thumbnail} from "../Thumbnail";
import "../Gallery/index.css";

import { useLodgings } from "../../hooks/useLodgings";

export const Gallery = () => {
  const lodgings = useLodgings();

  return (
    <div className="gallery">
      {lodgings.map((lodging) => (
        <Thumbnail title={lodging.title} cover={lodging.cover} />
      ))}
    </div>
  );
};

