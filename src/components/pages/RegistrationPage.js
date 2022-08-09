import { Helmet } from "react-helmet";

import RegistrationForm from "../registrationForm/RegistrationForm";

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
      <div className="registration__content">
        <div>

        </div>
        <RegistrationForm/>
      </div>
    </>
  )
}

export default RegistrationPage;
