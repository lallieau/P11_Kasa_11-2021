import '../Banner/index.css';

export const Banner = ({ children, image, title = null, size = 'xs' }) => {
  const sizes = {
    xs: '20vh',
    sm: '30vh',
    xl: '40vh',
  };

  return (
    <div className={'banner'} style={{ height: sizes[size] }}>
      {children}
      {title ? (
        <h1 className="banner_title">Chez vous, partout et ailleurs</h1>
      ) : null}
      <img
        src={image}
        alt="Paysage"
        className={'banner_image'}
        style={{ height: sizes[size] }}
      />
    </div>
  );
};
