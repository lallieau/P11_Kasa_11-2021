import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Banner } from '../components/Banner';

export const Layout = ({ children, bannerImage, bannerTitle, size }) => {
  return (
    <div className="container">
      <div className="content">
        <Header />
        {bannerImage ? (
          <Banner image={bannerImage} title={bannerTitle} size={size} />
        ) : null}
        {children}
      </div>
      <Footer />
    </div>
  );
};
