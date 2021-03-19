import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import LocationSelection from './components/LocationSelection/LocationSelection';
import LogIn from './components/LogIn/LogIn';
import Nav from './components/Nav/Nav';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SignUp from './components/SignUp/SignUp';

export const userContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState({});
  return (
      <userContext.Provider value={[currentUser, setCurrentUser]} className="App">
          <Router>
              <Nav />
              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>
                  <PrivateRoute exact path="/go/:vehicleType">
                    <LocationSelection />
                  </PrivateRoute>
                  <Route exact path="/login">
                      <LogIn />
                  </Route>
                  <Route exact path="/signup">
                      <SignUp />
                  </Route>
              </Switch>
          </Router>
      </userContext.Provider>
  );
}

export default App;
