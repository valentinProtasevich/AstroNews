import { BrowserRouter, Route, Switch } from "react-router-dom";

import { RegistrationPage } from "../pages";
import AppHeader from "../appHeader/AppHeader";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppHeader/>
        <main>
          <Switch>
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
