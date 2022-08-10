import { BrowserRouter, Route, Switch } from "react-router-dom";

import { RegistrationPage, Homepage } from "../pages";
import AppHeader from "../appHeader/AppHeader";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <AppHeader/>
        <main>
          <Switch>
            <Route exact path='/'>
              <Homepage/>
            </Route>
            <Route exact path='/registration'>
              <RegistrationPage/>
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
