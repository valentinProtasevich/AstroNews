import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

import SimpleSlider from "../../simpleSlider/SimpleSlider";

import './homePage.scss';

import bg_planet from '../../../resources/img/home-img.jpg';

const Homepage = () => {
  return (
    <>
      <Helmet>
      <meta
          name="description"
          content="AstroNews information portal"
        />
        <title>AstroNews</title>
      </Helmet>
      <div className="homePage__grid">
        <img className="homePage__backgroundPlanet" src={bg_planet} alt="Jupiter" />
        <article className="homePage__about">
          <h1>AstroNews — <br /> портал о космосе</h1>
          <p>Статьи о космосе и космических объектах</p>
          <Link to='/articles'>Статьи</Link>
          {/* <SimpleSlider/> */}
        </article>
      </div>
    </>
  )
}

export default Homepage;