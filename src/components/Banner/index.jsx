import "../Banner/index.css";
import bannerImage from "../../public/assets/bannerImage.png"

export const Banner = () => {
  return (
    <div className="banner">
      <h1 className="banner_title">Chez vous, partout et ailleurs</h1>
      <div className="banner_bg"></div>
      <img src={bannerImage} alt="Paysage" className="banner_image" />
    </div>
  );
}
