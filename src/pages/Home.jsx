import { Layout } from '../utils/Layout';
import { Gallery } from '../components/Gallery';
import bannerImage from '../public/assets/bannerImage.png';

export const Home = () => (
  <Layout
    bannerImage={bannerImage}
    bannerTitle={'Chez vous, partout et ailleurs'}
    size={'xs'}
  >
    <Gallery />
  </Layout>
);
