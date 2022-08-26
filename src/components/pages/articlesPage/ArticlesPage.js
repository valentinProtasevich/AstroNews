import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

import { useGetNewsQuery, useGetBlogsQuery, useGetReportsQuery } from "../../../api/newsApi";
import getDate from "../../../helpers/getDate";

import './articlesPage.scss';

import openImg from '../../../resources/img/open-category.svg';

const ArticlesPage = () => {
  const [category, setCategory] = useState('Новости');
  const [amount, setAmount] = useState(5);
  const {data: news = []} = useGetNewsQuery(amount);
  const {data: blog = []} = useGetBlogsQuery(amount);
  const {data: reports = []} = useGetReportsQuery(amount);

  let listItems = news;
  
  const getContent = (category) => {
    switch (category) {
      case 'Новости':
        listItems = news;
        if (document.querySelector('.news')) {  
          document.querySelector('.news').classList.add('articles__active');
        }
        break;
      case 'Блоги':
        listItems = blog;
        if (document.querySelector('.blog')) {  
          document.querySelector('.blog').classList.add('articles__active');
        }
        break;
      case 'Отчеты':
        listItems = reports;
        if (document.querySelector('.reports')) {  
          document.querySelector('.reports').classList.add('articles__active');
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.querySelectorAll('.articles__button').forEach((element) => {
      element.classList.remove('articles__active');
    })
    getContent(category);
  });

  getContent(category);

  const activateNavigation = () => {
    document.querySelector('.articles__navigation').classList.toggle('open');
  }

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="AstroNews information portal"
        />
        <title>AstroNews articles</title>
      </Helmet>
      <div className="linkContainer">
        <NavLink to='/' className='link-white'>Главная /</NavLink>
        <NavLink to='/articles' className='link-gray'> Статьи</NavLink>
      </div>
      <div className="articles__flex">
        <nav className="articles__navigation">
          <p className="articles__navigation_activeCategory">{category}</p>
          <img 
            className="articles__navigation_openButton" 
            src={openImg} 
            alt="Open category" 
            width={12} 
            onClick={activateNavigation}/>
          <h2>Категории</h2>
          <button 
            className="articles__button news" 
            onClick={() => {
              if (category !== 'Новости') {
                setAmount(5)
              }
              setCategory('Новости'); 
              activateNavigation();
            }}>
            Новости
          </button>
          <button 
            className="articles__button blog" 
            onClick={() => {
              if (category !== 'Блоги') {
                setAmount(5)
              }
              setCategory('Блоги');
              activateNavigation();
            }}>
            Блоги
          </button>
          <button 
            className="articles__button reports" 
            onClick={() => {
              if (category !== 'Отчеты') {
                setAmount(5)
              }
              setCategory('Отчеты'); 
              activateNavigation();
            }}>
            Отчеты
          </button>
        </nav>
        <div className="articles__container">
          <h1>Статьи</h1>
          {listItems.map(item => (
            <div key={item.id} className="articles__section">
              <img src={item.imageUrl} alt="Demo" />
              <div className="articles__section_description">
                <a href={item.url} target='_blank' rel="noreferrer">{item.title}</a>
                <div className="articles__section_sourceContainer">
                  <p>{item.newsSite} / </p>
                  <p>{getDate(item.publishedAt)}</p>
                </div>
                <p className="articles__section_summary">{item.summary}</p>
              </div>
            </div>
          ))}
          <button className="articles__more" onClick={() => setAmount(amount + 5)}>Загрузить еще</button>
        </div>
      </div>
    </>
  )
}

export default ArticlesPage;