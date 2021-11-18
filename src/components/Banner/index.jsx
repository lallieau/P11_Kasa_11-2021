import '../Banner/index.css';

export const Banner = ({ children, image, className }) => {
  return (
    <div className="banner">
      {children}
      <img src={image} alt="Paysage" className={'banner_image ' + className} />
    </div>
  );
};
