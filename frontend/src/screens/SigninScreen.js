import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { signin } from "../actions/userActions";

function SigninScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    var { loading, userInfo, error } = userSignin;

    const dispatch = useDispatch();

    if (error === 'Request failed with status code 401') {
        error = "Invalid Email or Password"
    }

    useEffect(() => {
        if (userInfo) {
            props.history.push("/dashboard");
        }

        return () => {
            //
        };
        // eslint-disable-next-line
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));

    }

    return <div className="form">
        <form onSubmit={submitHandler} >
            <ul className="form-container">
                <li>
                    <h2>Sign-In</h2>
                </li>
                <li>
                    {loading && <div>Loading....</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="email">
                        Email
                </label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="password">
                        Password
                </label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </li>
                <li>
                    <button type="submit" className="button primary">Signin</button>
                </li>
                <li>
                    New Here?
            </li>
                <li>
                    <Link to="/register" className="button secondary text-center">Create your Gordian Technologies Account</Link>
                </li>
            </ul>
        </form>


    </div>
}

export default SigninScreen;