
import React, { Component } from 'react'
import './SignIn.css'
import { signIn } from '../services/user'

class SignIn extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: '',
            isError: false,
            errorMsg: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            isError: false,
            errorMsg: ''
        })
    }

    onSignIn = event => {
        event.preventDefault()

        const { history, setUser } = this.props

<<<<<<< HEAD

=======
>>>>>>> parent of cf40bdd... Merge pull request #34 from llukkah/jason3
        signIn(this.state)
            .then(res => {
                setUser(res.user)
            })
<<<<<<< HEAD
            .then(() => history.push('/home'))
=======
            .then(() => history.push('/'))
>>>>>>> parent of cf40bdd... Merge pull request #34 from llukkah/jason3
            .catch(error => {
                console.error(error)
                this.setState({
                    isError: true,
                    errorMsg: 'Invalid Credentials',
                    username: '',
                    password: ''
                })
            })
    }

    renderError = () => {
        const toggleForm = this.state.isError ? 'danger' : ''
        if (this.state.isError) {
            return (
                <button type="submit" className={toggleForm}>
                    {this.state.errorMsg}
                </button>
            )
        } else {
            return <button type="submit">Sign In</button>
        }
    }
<<<<<<< HEAD
  }


  render() {
    const { username, password } = this.state
=======

    render() {
        const { username, password } = this.state
>>>>>>> parent of cf40bdd... Merge pull request #34 from llukkah/jason3

        return (
            <div className="form-container">
                <h3>Sign In</h3>
                <form onSubmit={this.onSignIn}>
                    <label>Username</label>
                    <input
                        required
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Enter Username"
                        onChange={this.handleChange}
                    />
                    <label>Password</label>
                    <input
                        required
                        name="password"
                        value={password}
                        type="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                    />
                    {this.renderError()}
                </form>
            </div>
        )
    }
}

export default SignIn