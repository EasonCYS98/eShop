import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* 只匹配 /，避免匹配所有子路径 */}
          <Route exact path="/">
            <Header />
            <Home />
          </Route>

          {/* 先匹配 /checkout，确保它不会被 / 吃掉 */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <Header />
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
