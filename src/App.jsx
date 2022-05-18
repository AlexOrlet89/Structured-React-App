import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './views/Header';
import Home from './views/Home';
import Login from './views/Login';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
