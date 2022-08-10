import { Route, Switch } from "react-router-dom";

import { RegistrationPage, Homepage, LoginPage } from "../pages";
import AppHeader from "../appHeader/AppHeader";

function App() {
  return (
      <div className="app">
        <AppHeader/>
        <main>
          <Switch>
            <Route exact path='/'>
              <Homepage/>
            </Route>
            <Route exact path='/login'>
              <LoginPage/>
            </Route>
            <Route exact path='/registration'>
              <RegistrationPage/>
            </Route>
          </Switch>
        </main>
      </div>
  );
}

export default App;
