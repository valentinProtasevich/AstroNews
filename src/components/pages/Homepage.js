import { Redirect } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Redirect to='/registration'/>
    </div>
  )
}

export default Homepage;