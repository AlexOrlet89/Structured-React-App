import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './views/Header';
import Home from './views/Home';
import Login from './views/Login';
import Profile from './views/Profile';
import PrivateRoute from './components/PrivateRoute';
import PostItem from './views/PostDetail';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact/:id">
            <PostItem />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </>
  );
}
