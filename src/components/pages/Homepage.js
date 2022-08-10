import { Redirect } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Redirect to='/login'/>
    </div>
  )
}

export default Homepage;