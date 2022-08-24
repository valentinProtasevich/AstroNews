import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

import { useGetNewsQuery } from "../../../api/newsApi";

import SimpleSlider from "../../simpleSlider/SimpleSlider";

import './homePage.scss';

import bg_planet from '../../../resources/img/home-img.jpg';

const Homepage = () => {
  const {data = []} = useGetNewsQuery();

  let getDate = (date) => {
    let dateObj = new Date(Date.parse(date));
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    };
    let day = dateObj.getDate();
    return `${day}.${month}.${year}`;
  };
  
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
              <img src={item.imageUrl} alt="" />
              <a href={item.url}>{item.title}</a>
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