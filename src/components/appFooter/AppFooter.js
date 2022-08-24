import './appFooter.scss';

import facebook from '../../resources/img/facebook-icon.svg';
import instagram from '../../resources/img/instagram-icon.svg';
import linkedin from '../../resources/img/linkedin-icon.svg';

const AppFooter =() => {
  return (
    <div className='footer__flex'>
      <a href="mailto:info@astronews.com" target='_blank' rel="noreferrer">info@astronews.com</a>
      <a href="tel:+375444689123">+375 44 468 91 23</a>
      <div className='footer__socialContainer'>
        <a href="https://www.facebook.com/" className='footer__facebook' target='_blank' rel="noreferrer">
          <img src={facebook} alt="Facebook icon" />
        </a>
        <a href="https://www.instagram.com/" className='footer__instagram' target='_blank' rel="noreferrer">
          <img src={instagram} alt="Instagram icon" />
        </a>
        <a href="https://www.linkedin.com/" className='footer__linkedin' target='_blank' rel="noreferrer">
          <img src={linkedin} alt="Linkedin icon" />
        </a>
      </div>
      <p>AstroNews 2022 Copyright</p>
    </div>    
  )
}

export default AppFooter;