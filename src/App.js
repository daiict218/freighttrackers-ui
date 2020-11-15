import './firebase/config';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/login';
import Profile from './pages/profile';
import {Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import {UserProvider} from './firebase/UserProvider';
import Header from './components/header';
import ProfileRedirect from './router/ProfileRedirect';
import PrivateRoute from './router/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Switch>
            <ProfileRedirect exact path="/signup" component={Signup} />
            <ProfileRedirect exact path="/login" component={Login} />
            <PrivateRoute exact path="/profile/:id" component={Profile} />
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
