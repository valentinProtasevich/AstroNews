import './appHeader.scss';

const AppHeader = () => {
  return (
    <header className='app__header'>
      <h1 className='app__title'>
        AstroNews
      </h1>
      <nav className='app__menu'>
        <ul>
          <li>Главная</li>
          <li>Статьи</li>
          <li>Вход</li>
          <li>Регистрация</li>
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader;
