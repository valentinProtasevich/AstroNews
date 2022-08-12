import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {useAuth} from '../../hooks/use-auth';
import { removeUser } from '../../store/slices/userSlice';

import './appHeader.scss';

const AppHeader = () => {
  const dispatch = useDispatch();

  const {isAuth} = useAuth();

  const accountButtons = () => {
    if (isAuth) {
      return (
        <>
          <li><NavLink 
              end 
              className={({ isActive }) => "" + (isActive ? " app__menu_selected" : "")}
              to='/account'>Личный кабинет</NavLink>
          </li>
          <li><NavLink
              onClick={() => dispatch(removeUser())} 
              end 
              className={({ isActive }) => "" + (isActive ? " app__menu_selected" : "")}
              to='/login'>Выйти</NavLink>
          </li>
        </>
      )
    } else {
      return (
        <>
          <li><NavLink 
              end 
              className={({ isActive }) => "" + (isActive ? " app__menu_selected" : "")}
              to='/login'>Войти</NavLink>
          </li>
          <li><NavLink 
              end 
              className={({ isActive }) => "" + (isActive ? " app__menu_selected" : "")}
              to='/registration'>Регистрация</NavLink>
          </li>
        </>
      )
    }
  };
  
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
          <li><NavLink 
              end 
              className={({ isActive }) => "" + (isActive ? " app__menu_selected" : "")}
              to='/articles'>Статьи</NavLink>
          </li>
          {accountButtons()}
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader;
