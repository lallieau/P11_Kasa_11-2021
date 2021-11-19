import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Banner } from '../components/Banner';

export const Layout = ({ children, bannerImage, bannerTitle }) => {
  return (
    <div className="container">
      <div className="content">
        <Header />
        {bannerImage ? (
          <Banner image={bannerImage} title={bannerTitle} />
        ) : null}
        {children}
      </div>
      <Footer />
    </div>
  );
};
