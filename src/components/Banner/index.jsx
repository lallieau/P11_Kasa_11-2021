import '../Banner/index.css';

export const Banner = ({ children, image, title, size }) => {
  const sizes = {
    xs: '20vh',
    sm: '30vh',
    xl: '40vh',
  };

  if (!image) return null;

  return (
    <div className={'banner'} style={{ height: sizes[size] }}>
      {children}
      {title ? <h1 className="banner_title">{title}</h1> : null}
      <img
        src={image}
        alt="Paysage"
        className={'banner_image'}
        style={{ height: sizes[size] }}
      />
    </div>
  );
};
