var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require("../components/Home");
var PromptContainer = require("../container/PromptContainer");

var routes = (
  <Router history={hashHistory}>
    
      <Route path='/' component={Home}/>
      <Route path='/PlayerOne' header ='Player One' component={PromptContainer}/>
      <Route path='/PlayerTwo/:PlayerOne' header ='Player Two' component={PromptContainer}/>
    
  </Router>
);

module.exports = routes;
