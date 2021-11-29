import {useParams} from 'react-router-dom';
import {Layout} from '../utils/Layout';
import {Carousel} from '../components/Carousel';
import {Tag} from '../components/Tag';
import {Host} from '../components/Host';
import {Ratings} from '../components/Ratings';
import {Dropdown} from '../components/Dropdown';
import {Error} from '../pages/Error';
import {useAccomodations} from '../hooks/useAccomodations';
import '../styles/accomodation.css';

const Infos = ({title, location, tags}) => (
  <div className="accomodation_header_infos">
    <h1>{title}</h1>
    <h2>{location}</h2>
    <div className="accomodation_header_infos_tags">
      {tags && tags.map(tag => <Tag key={tag} tag={tag} />)}
    </div>
  </div>
);

const AccomodationHeader = ({
  accomodation: {rating, title, host, location, tags},
}) => (
  <div className="accomodation_header">
    <Infos title={title} location={location} tags={tags} />
    <div className="accomodation_header--rigth">
      <Host host={host} />
      <Ratings rating={rating} />
    </div>
  </div>
);

const AccomodationContent = ({description, equipments}) => {
  return (
    <div className="accomodation_details">
      <Dropdown title="Description" data={description} />
      <Dropdown title="Équipements" data={equipments} />
    </div>
  );
};

export const Accomodation = () => {
  const {accomodationId} = useParams();
  const {accomodations, loading} = useAccomodations(accomodationId);

  if (loading) return null; 
  if (!loading && !accomodations.length) return <Error />;

  const accomodation = accomodations[0];

  return (
    <Layout>
      <div className="accomodation">
        <Carousel pictures={accomodation?.pictures} />
        <AccomodationHeader accomodation={accomodation} />
        <AccomodationContent
          description={accomodation?.description}
          equipments={accomodation?.equipments}
        />
      </div>
    </Layout>
  );
};
