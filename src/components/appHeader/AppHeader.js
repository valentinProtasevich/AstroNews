import { NavLink, Link } from 'react-router-dom';

import './appHeader.scss';

const AppHeader = () => {
  return (
    <header className='app__header'>
      <h1 className='app__title'>
        <Link to=''>AstroNews</Link>
      </h1>
      <nav className='app__menu'>
        <ul>
          <li><NavLink 
              end 
              className={({ isActive }) => "" + (isActive ? " app__menu_selected" : "")}
              to=''>Главная</NavLink>
          </li>
          <li><a href="">Статьи</a></li>
          <li><NavLink 
              end 
              className={({ isActive }) => "" + (isActive ? " app__menu_selected" : "")}
              to='/account'>Личный кабинет</NavLink>
          </li>
          <li><NavLink 
              end 
              className={({ isActive }) => "" + (isActive ? " app__menu_selected" : "")}
              to='/login'>Вход</NavLink>
          </li>
          <li><NavLink 
              end 
              className={({ isActive }) => "" + (isActive ? " app__menu_selected" : "")}
              to='/registration'>Регистрация</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader;
