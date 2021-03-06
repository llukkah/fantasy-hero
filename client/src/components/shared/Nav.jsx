import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const authenticatedOptions = (
    <>
        <NavLink className="link" to="/create-hero">Add Hero</NavLink>
        <NavLink className="link" to="/sign-out">Sign Out</NavLink>
    </>
)

const unauthenticatedOptions = (
    <>
        <NavLink className="link" to="/sign-up">Sign Up</NavLink>
        <NavLink className="link" to="/sign-in">Sign In</NavLink>
    </>
)

const alwaysOptions = (
    <>
        <NavLink className="link" to="/heroes">Heroes</NavLink>
    </>
)

const Nav = ({ user }) => {
        return (
            <nav>
                <div className="nav">
                    <NavLink className="logo" to="/home">HERO[ID]</NavLink>
                    <div className="links">
                        {/* {user && <div className="link welcome">Welcome, {user.email}</div>} */}
                        {alwaysOptions}
                        {user ? authenticatedOptions : unauthenticatedOptions}
                    </div>
                </div>
            </nav>
        )
}

export default Nav