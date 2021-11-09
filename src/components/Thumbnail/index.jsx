//import "../styles/Thumb.css";

export default function Thumb({title, cover}) {
  return (
    <div className="thumb">
      <h2 className="thumb_title">{title}</h2>
      <div className="thumb_bg"></div>
      <img src={cover} alt="La location" className="thumb_image" />
    </div>
  );
}
