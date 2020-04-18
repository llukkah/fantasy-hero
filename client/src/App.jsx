import React, { Component } from 'react'
import './App.css'
import { Route, Switch, Redirect } from 'react-router-dom'
import { verifyUser } from './services/user'
import Splash from './components/Splash'
import Home from './components/Home'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import SignOut from './components/SignOut'
import Heroes from "./components/Heroes"
import HeroDetail from "./components/HeroDetail"
import HeroEdit from "./components/HeroEdit"
import HeroCreate from "./components/HeroCreate"

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
  }

  async componentDidMount() {
    const user = await verifyUser()
    if (user) {
      this.setState(user)
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  render() {
    const { setUser, clearUser } = this
    const { user } = this.state
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => <Splash user={user} />} />
          <Route exact path="/home" render={() => <Home user={user} />} />
          <Route exact path="/sign-up" render={props => <SignUp setUser={setUser} history={props.history} />} />
          <Route exact path="/sign-in" render={props => <SignIn setUser={setUser} history={props.history} />} />
          <Route exact path="/sign-out" render={props => <SignOut user={user} clearUser={clearUser} history={props.history} />} />
          <Route exact path="/heroes" render={() => <Heroes user={user} />} />
          <Route  exact path="/create-hero" render={() => user ? <HeroCreate user={user} /> : <Redirect to='/signup' />}/>
          <Route  exact path="/heroes/:id/edit" render={(props) => user ? <HeroEdit { ...props } user={user} /> : <Redirect to='/' />}/>
          <Route exact path="/heroes/:id" render={(props) => <HeroDetail { ...props } history={props.history} user={user}/>} />
        </Switch>
      </div>
    )
  }
}

export default App