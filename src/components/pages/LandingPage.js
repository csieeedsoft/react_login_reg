import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg.jpg'

export default function LandingPage() {
    return (
        <header style={{
            width: "100%",
            height: "100vh",
            background: `url(${BackgroundImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <h1 className="text-center" style={{ color: "#3f3f3f", fontSize: "5rem", paddingTop: "10rem" }}>sign in & register</h1>
            <p className="text-center" style={{ color: "#3f3f3f", fontSize: "2rem" }}>join us NOW!</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="pbtn"><span>sign in</span></button>
                </Link>
                <Link to="/register">
                    <button className="pbtn"><span>sign up</span></button>
                </Link>
            </div>
        </header>
    )
}