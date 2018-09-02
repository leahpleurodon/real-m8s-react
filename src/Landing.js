import React from 'react'
import logo from './resources/logo.svg'
import home from './resources/home.svg'
export default function Landing(){
    return(
        <div>
            <section className="logo">
                <img src={logo} alt="real m8s logo" />
            </section>
            <main>
                <section className="call-to-action">
                    <h1>Become a mate of ours</h1>
                    <section className="buttons">
                        <button className="sign-in">
                            sign in
                        </button>
                        <button className="sign-up">
                            sign up
                        </button>
                    </section>
                </section>
                <section className="hero-img">
                    <img src={home} alt="a nice house" />
                </section>
            </main>
        </div>
    )
}