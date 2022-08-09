import { Helmet } from "react-helmet";

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
          <a className="link-white" href="#">Главная /</a>
          <a className="link-gray" href="#"> Регистрация</a>
        </div>
        <RegistrationForm/>
      </div>
    </>
  )
}

export default RegistrationPage;
