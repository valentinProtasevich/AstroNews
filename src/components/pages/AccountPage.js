import { Helmet } from "react-helmet";
import { useNavigate, NavLink } from 'react-router-dom';
import { useEffect } from 'react';

import Account from '../account/Account';
import { useAuth } from "../../hooks/use-auth";

import main_planet from '../../resources/img/main-planet.png';

const AccountPage = () => {
  const navigate = useNavigate();
  const {isAuth} = useAuth();

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, []);

  return  (
    <>
      <Helmet>
      <meta
          name="description"
          content="AstroNews information portal"
        />
        <title>AstroNews account</title>
      </Helmet>
      <img className="bg-planet" src={main_planet} alt="Blue planet" />
      <div className="account__content">
        <div className="linkContainer">
          <NavLink to='/' className='link-white'>Главная /</NavLink>
          <NavLink to='/account' className='link-gray'> Личный кабинет</NavLink>
        </div>
        <Account/>
      </div>
    </>
  )
}

export default AccountPage;