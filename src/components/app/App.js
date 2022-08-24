import { Route, Routes } from "react-router-dom";

import { RegistrationPage, Homepage, LoginPage, AccountPage } from "../pages";
import AppHeader from "../appHeader/AppHeader";
import AppFooter from "../appFooter/AppFooter";

function App() {
  return (
      <div className="app">
        <AppHeader/>
        <main>
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/registration' element={<RegistrationPage/>} />
            <Route path='/account' element={<AccountPage/>} />
          </Routes>
        </main>
        <AppFooter/>
      </div>
  );
}

export default App;
