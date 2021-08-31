import { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useCtxValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useCtxValue();

  useEffect(() => {
    //only runs on first load
    auth.onAuthStateChanged((authUser) => {
      console.log('USER is>>', authUser);
      if (authUser) {
        //user just logged in or user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
