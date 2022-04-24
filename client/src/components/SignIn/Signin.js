import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { showErrorMsg } from '../../helpers/message';
import { showLoading } from '../../helpers/loading';
import { setAuthentication, isAuthenticated } from '../../helpers/auth';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import { signin } from '../../api/auth';
import Slide from "react-reveal/Slide"

const Signin = () => {

    let history = useHistory();

    useEffect(() => {
        if (isAuthenticated() && isAuthenticated().role === 2) {
            history.push('/');
        }
        else if (isAuthenticated() && isAuthenticated().role === 1) {
            history.push('/');
        } else if (isAuthenticated() && isAuthenticated().role === 0) {
            history.push('/');
        }
    }, [history]);

    const [formData, setFormData] = useState({
        // email: 'jdoe@gmail.com',
        // password: 'abc123',
        email: '',
        password: '',
        errorMsg: false,
        loading: false,
    });

    const { email, password, errorMsg, loading } = formData;

    /****************************
     * EVENT HANDLERS
     ***************************/
    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            errorMsg: '',
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        // client-side validation
        if (isEmpty(email) || isEmpty(password)) {
            setFormData({
                ...formData,
                errorMsg: 'All fields are required',
            });
        } else if (!isEmail(email)) {
            setFormData({
                ...formData,
                errorMsg: 'Invalid email',
            });
        } else {
            const { email, password } = formData;
            const data = { email, password };

            setFormData({ ...formData, loading: true });

            signin(data)
                .then((response) => {
                    setAuthentication(response.data.token, response.data.user);
                    if (isAuthenticated() && isAuthenticated().role === 2) {
                        console.log('Redirecting to Super admin dashboard');
                        history.push('/');
                    } else if (isAuthenticated() && isAuthenticated().role === 1) {
                        console.log('Redirecting to admin dashboard');
                        history.push('/');
                    } else {
                        console.log('Redirecting to user dashboard');
                        history.push('/');
                    }
                }).catch((err) => {
                    console.log('signin api function error: ', err);
                    setFormData({
                        ...formData,
                        loading: false,
                        errorMsg: err.response.data.errorMessage,
                    });
                });
        }
    };

    /****************************
     * VIEWS
     ***************************/
    const showSigninForm = () => (

        <form className='signup-form' onSubmit={handleSubmit} noValidate>
            <div className="Login-title">
                <h1>Login</h1>
                <span>Welcome to our Website again!</span>
            </div>
            {/* email */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-envelope'></i>
                    </span>
                </div>
                <input
                    name='email'
                    value={email}
                    className='form-control'
                    placeholder='Email address'
                    type='email'
                    onChange={handleChange}
                />
            </div>
            {/* password */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>
                    </span>
                </div>
                <input
                    name='password'
                    value={password}
                    className='form-control'
                    placeholder='Create password'
                    type='password'
                    onChange={handleChange}
                />
            </div>
            {/* signin button */}
            <div className='form-group'>
                <button type='submit' className='btn btn-block text-white Btns'>
                    LOGIN
                </button>
            </div>
            {/* already have account */}
            <p className='text-center'>
                Don't have an account? <Link to='/signup' style={{ color: "#028A0F" }}>Register here</Link>
            </p>
        </form>

    );

    /****************************
     * RENDERER
     ***************************/
    return (
        <div className='signin-container'>
            <Slide bottom>
                <div className='Form-styling col-md-6 mx-auto align-self-center'>
                    <div className='row px-3 vh-100'>
                        <div className=' mx-auto align-self-center'>
                            {errorMsg && showErrorMsg(errorMsg)}
                            {loading && (
                                <div className='text-center pb-4'>{showLoading()}</div>
                            )}
                            {showSigninForm()}
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default Signin;
