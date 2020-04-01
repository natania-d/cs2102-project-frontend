import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Import pages
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import RestaurantList from './pages/RestaurantList'
import RestaurantPage from './pages/RestaurantPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

// Import nav component
import Nav from './components/Nav'

export default class Main extends React.Component {
  render () {
    return (
      <div className="wrapper">
        <Nav />

        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/restaurantlist" component={RestaurantList}/>
          <Route path="/:id" component={RestaurantPage}/>
        </Switch>
        {/* <Route exact={true} path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/restaurantlist" component={RestaurantList}/>
        <Route path="/:id" component={RestaurantPage}/> */}
      </div>
    )
  }
}