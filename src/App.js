import Header from './Header';
import Home from './Home';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
