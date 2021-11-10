import "../Thumbnail/index.css";

export const Thumbnail = ({title, cover}) => {
  return (
    <a href="/lodging" className="thumb">
      <h2 className="thumb_title">{title}</h2>
      <div className="thumb_bg"></div>
      <img src={cover} alt="La location" className="thumb_image" />
    </a>
  );
}
