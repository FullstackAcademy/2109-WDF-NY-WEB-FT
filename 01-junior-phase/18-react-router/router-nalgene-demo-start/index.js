import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

//3 MAIN INGREDIENTS FOR REACT ROUTER:
// 1. Router
// 2. Routes
// 3. Links
const Blue = (props) => {
  console.log("Props", props)
  return (
    <div>
      <h1>Cerulean Blue Nalgene</h1>
      <img src="./public/blue.jpg" alt="blue" />
      <h4>Price: ${props.price}</h4>
    </div>
  );
};

const Green = (props) => {
  return (
    <div>
      <h1>Green Nalgene</h1>
      <img src="./public/green.jpg" />
    </div>
  );
};

const Pink = (props) => {
  return (
    <div>
      <h1>Pink Nalgene</h1>
      <img src="./public/pink.jpg" />
    </div>
  );
};

const Home = (props) => {
  return (
    <div>
      <h1>An Assortment of Nalgene Bottles.</h1>
      <img src="./public/outdoors.jpeg" />
    </div>
  );
};

const Main = (props) => {
  return (
    <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/green">Green</Link>
        <Link to="/pink">Pink</Link>
      </div>
        <Route path='/blue' render={(routeProps) => (
          <Blue price={15}
          {...routeProps}
          />
        )} />
      <div id="main-section">
      <Route path='/green' component={Green} />
      <Route path='/pink' component={Pink} />
      <Route exact path='/' component={Home} />
      </div>
    </div>
  );
};

const app = document.getElementById("app");
ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  app
);
