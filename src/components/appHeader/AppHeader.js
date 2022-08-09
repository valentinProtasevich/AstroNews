import { NavLink } from 'react-router-dom';

import './appHeader.scss';

const AppHeader = () => {
  return (
    <header className='app__header'>
      <h1 className='app__title'>
        AstroNews
      </h1>
      <nav className='app__menu'>
        <ul>
          <li><a href="#">Главная</a></li>
          <li><a href="#">Статьи</a></li>
          <li><a href="#">Вход</a></li>
          <li><NavLink exact activeClassName='app__menu_selected' to='/registration'>Регистрация</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader;
