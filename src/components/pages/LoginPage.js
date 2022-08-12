import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

import LoginForm from "../loginForm/LoginForm";

import main_planet from '../../resources/img/main-planet.png';

const LoginPage = () => {
  return (
    <>
      <Helmet>
      <meta
          name="description"
          content="AstroNews information portal"
        />
        <title>AstroNews login</title>
      </Helmet>
      <img className="bg-planet" src={main_planet} alt="Blue planet" />
      <div className="login__content">
        <div className="linkContainer">
          <NavLink to='/' className='link-white'>Главная /</NavLink>
          <NavLink to='/login' className='link-gray'> Вход</NavLink>
        </div>
        <LoginForm/>
      </div>
    </>
  )
}

export default LoginPage;