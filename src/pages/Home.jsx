import { Outlet } from 'react-router-dom';
import {Layout} from '../App';
import {Banner} from '../components/Banner';
import {Gallery} from '../components/Gallery';
import bannerImage from "../public/assets/bannerImage.png";

export const Home = () => (
    <Layout>
      <Banner image={bannerImage}>
        <h1 className="banner_title">Chez vous, partout et ailleurs</h1>
      </Banner>
      <Gallery />
      <Outlet/>
    </Layout>
  );