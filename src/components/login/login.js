import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    const [email, setEmail] = useState("bonnievog@gmail.com") 
    const navigate = useNavigate()

    const handleLogin = (e) => { 
        e.preventDefault()
        
        return fetch(`http://localhost:8088/users?email=${email}`) //Looking at users collection to find anybody who mathches this email
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {//if array is one, which it should be 
                    const user = foundUsers[0]
                    localStorage.setItem("stash_user", JSON.stringify({
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        administrator: user.administrator
                    }))

                    navigate("/inventory")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Stash</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email </label>
                        <input type="email"
                            value={email}
                            onChange={evt => setEmail(evt.target.value)}
                            className="form-control"
                            placeholder="Email"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Let's see my stash!
                        </button>
                    </fieldset>
                </form>
            </section>
            
        </main>
    )
}

/* <section className="link--register">
    <Link to="/register">Not a member yet?</Link>
</section> */

//inputEmail htmlFor="text"

