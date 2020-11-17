import './firebase/config';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/login';
import Profile from './pages/profile';
import Parties from './pages/parties';
import AddParty from './pages/addParty';
import {Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import {UserProvider} from './firebase/UserProvider';
import Header from './components/header';
import ProfileRedirect from './router/ProfileRedirect';
import PrivateRoute from './router/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="App">
          <div className="header">
            <Header />
          </div>
          <div className="body">
            <Switch>
              <ProfileRedirect exact path="/signup" component={Signup} />
              <ProfileRedirect exact path="/login" component={Login} />
              <PrivateRoute exact path="/profile/:id" component={Profile} />
              <PrivateRoute exact path="/parties" component={Parties} />
              <PrivateRoute exact path="/parties/add_party" component={AddParty} />
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
