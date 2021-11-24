import { Layout } from '../utils/Layout';
import { Carousel } from '../components/Carousel';
import { Tag } from '../components/Tag';
import { Host } from '../components/Host';
import { Ratings } from '../components/Ratings';
import { Dropdown } from '../components/Dropdown';
import { useParams } from 'react-router-dom';
import { useAccomodations } from '../hooks/useAccomodations';
import '../styles/accomodation.css';

const MainInfos = ({ title, location, tags }) => (
  <div className="accomodation_header_infos">
    <h1>{title}</h1>
    <h2>{location}</h2>
    <div className="accomodation_header_infos_tags">
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  </div>
);

const HostInfos = ({ host, rating }) => (
  <div className="accomodation_header_host-infos">
    <Host host={host} />
    <Ratings rating={rating} />
  </div>
);

const Header = ({ rating, title, host, location, tags }) => (
  <div className="accomodation_header">
    <MainInfos title={title} location={location} tags={tags} />
    <HostInfos host={host} rating={rating} />
  </div>
);

const Content = ({ description, equipments }) => (
  <div className="accomodation_details">
    <Dropdown title="Description" content={<p>{description}</p>} />
    <Dropdown
      title="Équipements"
      content={
        <ul>
          {equipments.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        </ul>
      }
    />
  </div>
);

export const Accomodation = () => {
  const accomodation = useAccomodations().getAccomodationById(
    useParams().accomodationId
  );

  return (
    <Layout>
      <div className="accomodation">
        <Carousel pictures={accomodation.pictures} />
        <Header {...accomodation} />
        <Content
          description={accomodation.description}
          equipments={accomodation.equipments}
        />
      </div>
    </Layout>
  );
};
