import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../../managers/AuthManager"
import "./Auth.css"

export const RegisterHost = () => {
    const firstName = useRef()
    const lastName = useRef()
    const username = useRef()
    const email = useRef()
    const profileImg = useRef()
    const address = useRef()
    const description = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newHost = {
                "account_type": "host",
                "is_staff": true,
                "username": username.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "email": email.current.value,
                "profile_img": profileImg.current.value,
                "address": address.current.value,
                "description": description.current.value,
                "password": password.current.value
            }

            registerUser(newHost)
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("lu_token", res.token)
                        navigate("/login")
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h2 className="h3 mb-3 font-weight-normal">Create a Host Profile</h2>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputUsername">Username</label>
                    <input ref={username} type="text" name="username" className="form-control" placeholder="Username" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="profileImg"> Profile Image </label>
                    <input ref={profileImg} type="text" name="profileImg" className="form-control" placeholder="Profile Image" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="address"> Address </label>
                    <input ref={address} type="text" name="address" className="form-control" placeholder="Address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="description"> Description </label>
                    <input ref={description} type="textarea" name="description" className="form-control" placeholder="Description" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required />
                </fieldset>
                <fieldset style={{
                    textAlign: "center"
                }}>
                    <button className="button-50" role="button" type="submit">Register</button>
                </fieldset>
            </form>
            <section className="link--register">
                Already registered? <Link to="/login">Login</Link>
            </section>
        </main>
    )
}