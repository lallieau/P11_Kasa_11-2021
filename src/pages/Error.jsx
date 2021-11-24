import { Layout } from '../utils/Layout';
import ErrorImage from '../assets/error-image.png';
import { Link } from 'react-router-dom';
import '../styles/error.css';

const Error404 = () => {
  return (
    <div className="error">
      <img className="error_image" src={ErrorImage} alt="Error 404" />
      <h1 className="error_message">
        Oups! La page que vous demandez n'existe pas.
      </h1>
      <Link className="error_link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export const Error = () => (
  <Layout>
    <Error404 />
  </Layout>
);
