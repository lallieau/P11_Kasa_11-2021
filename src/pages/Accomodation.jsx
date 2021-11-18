import { Layout } from '../App';
import { Carousel } from '../components/Carousel';
import { Tag } from '../components/Tag';
import { Host } from '../components/Host';
import { Ratings } from '../components/Ratings';
import { Dropdown } from '../components/Dropdown';
import { useParams } from 'react-router-dom';
import { getAccomodation } from '../hooks/useAccomodations';
import '../styles/accomodation.css';

export const Accomodation = () => {
  let params = useParams();
  let accomodation = getAccomodation(params.accomodationId);
  return (
    <Layout>
      <div className="accomodation">
        <Carousel pictures={accomodation.pictures} />
        <div className="accomodation_header">
          <div className="accomodation_header_infos">
            <h1>{accomodation.title}</h1>
            <h2>{accomodation.location}</h2>
            <div className="accomodation_header_infos_tags">
              {accomodation.tags.map((tag) => (
                <Tag tag={tag} />
              ))}
            </div>
          </div>
          <div className="accomodation_header_host-infos">
            <Host {...accomodation} />
            <Ratings rating={accomodation.rating} />
          </div>
        </div>

        <div className="accomodation_details">
          <Dropdown title="Description">
            <p>{accomodation.description}</p>
          </Dropdown>
          <Dropdown title="Équipements">
            <ul>
              {accomodation.equipments.map((equipment) => (
                <li>{equipment}</li>
              ))}
            </ul>
          </Dropdown>
        </div>
      </div>
    </Layout>
  );
};
