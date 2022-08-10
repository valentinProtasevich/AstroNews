import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

import RegistrationForm from "../registrationForm/RegistrationForm";

import main_planet from '../../resources/img/main-planet.png';

const RegistrationPage = () => {
  return (
    <>
      <Helmet>
      <meta
          name="description"
          content="AstroNews information portal"
        />
        <title>AstroNews registration</title>
      </Helmet>
      <img className="bg-planet" src={main_planet} alt="Blue planet" />
      <div className="registration__content">
        <div className="linkContainer">
          <NavLink to='/' className='link-white'>Главная /</NavLink>
          <NavLink to='/registration' className='link-gray'> Регистрация</NavLink>
        </div>
        <RegistrationForm/>
      </div>
    </>
  )
}

export default RegistrationPage;
