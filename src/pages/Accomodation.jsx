import { Layout } from '../App'
import { Carousel } from '../components/Carousel';
import { Tag } from '../components/Tag';
import { Host } from '../components/Host';
import { Ratings } from '../components/Ratings';
import { Dropdown } from '../components/Dropdown';
import { useParams } from "react-router-dom";
import { getAccomodation } from '../hooks/useAccomodations';

export const Accomodation = () => {
  let params = useParams();
  let accomodation = getAccomodation(params.accomodationId)
  return (
    <Layout>
    <div className='accomodationContent'>
      <Carousel />
      <div className="accomodationHeader">
        <div className="accomodationInformation">
          <h1>{accomodation.title}</h1>
          <h2>{accomodation.location}</h2>
          <div className="tags">
            {accomodation.tags.map(tag => (<Tag tag={tag} />))}
          </div>
        </div>
        <div className="hostInformation">
          <Host {...accomodation}/>
          <Ratings rating={accomodation.rating}/>
        </div>

        <div className="accomodationDetails">
          <Dropdown title='Description'>
            <p>{accomodation.description}</p>
            </Dropdown>
          <Dropdown title='Équipements'>
            <ul>{accomodation.equipments.map(equipment => (
              <li>{equipment}</li>
            ))}</ul>
            </Dropdown>
        </div>
      </div>
    </div>
  </Layout>
  )
};