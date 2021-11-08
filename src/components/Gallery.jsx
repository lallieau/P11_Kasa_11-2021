import Thumb from "./Thumb";
import "../styles/Gallery.css";
import lodgings from '../data.json';

export default function Gallery() {
  return (
    <div className="gallery">
      {lodgings.map(lodging => {
        return <Thumb title={lodging.title} cover={lodging.cover}/>
      })}
     
    </div>
  );
}
