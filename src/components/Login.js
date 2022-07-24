import React from 'react'
import '../../src/App.css'

const Login = () => {
    return (
        <div className='loginbox'>
            <form className="box">
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="e.g. alex@example.com" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="********" />
                    </div>
                </div>

                <button className="button is-primary">Sign in</button>
            </form>

        </div>
    )
}

export default Login