import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

import { useGetNewsQuery } from "../../../api/newsApi";

import SimpleSlider from "../../simpleSlider/SimpleSlider";
import getDate from "../../../helpers/getDate";

import './homePage.scss';

import bg_planet from '../../../resources/img/home-img.jpg';

const Homepage = () => {
  const {data = []} = useGetNewsQuery();
  
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
          <h1>AstroNews -<br /> портал о космосе</h1>
          <p>Статьи о космосе и космических объектах</p>
          <Link to='/articles'>Статьи</Link>
        </article>
        <SimpleSlider>
          {data.map(item => (
            <div key={item.id} className="homePage__newsContainer">
              <img src={item.imageUrl} alt="Demo" />
              <a href={item.url} target='_blank' rel="noreferrer">{item.title}</a>
              <div className="homePage__newsContainer_newsSite">
                <p>{item.newsSite} / </p>
                <p>{getDate(item.publishedAt)}</p>
              </div>
            </div>
          ))}
        </SimpleSlider>
      </div>
    </>
  )
}

export default Homepage;