import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
export default function SignUpPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Sign Up</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <label>Repeat Password</label><br/>
                    <input type="password" name="repeat_password" required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button className='sbtn' type="submit">Sign Up</button>
                </p>
            </form>
            <footer>
                <p>Already have an account? <Link to="/login">Sign In</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
