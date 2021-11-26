import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Banner } from '../components/Banner';

export const Layout = ({ children, bannerImage, bannerTitle, size }) => {
  return (
    <div className="container">
      <div className="content">
        <Header />
        <Banner image={bannerImage} title={bannerTitle} size={size} />
        {children}
      </div>
      <Footer />
    </div>
  );
};
