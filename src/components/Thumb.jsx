import Img from "../assets/Img.png";
import "../styles/Thumb.css";

export default function Thumb() {
  return (
    <div className="thumb">
      <h2 className="thumb_title">Titre de la location</h2>
      <div className="thumb_bg"></div>
      <img src={Img} alt="La location" className="thumb_image" />
    </div>
  );
}
