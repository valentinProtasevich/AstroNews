import { Route, Switch } from "react-router-dom";

import { RegistrationPage, Homepage, LoginPage, AccountPage } from "../pages";
import AppHeader from "../appHeader/AppHeader";

function App() {
  return (
      <div className="app">
        <AppHeader/>
        <main>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/registration' component={RegistrationPage} />
            <Route exact path='/account' component={AccountPage} />
          </Switch>
        </main>
      </div>
  );
}

export default App;
