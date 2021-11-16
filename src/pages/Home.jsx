import { Outlet } from 'react-router-dom';
import {Layout} from '../App'
import {Banner} from '../components/Banner'
import {Gallery} from '../components/Gallery'

export const Home = () => (
    <Layout>
      <Banner />
      <Gallery />
      <Outlet/>
    </Layout>
  );