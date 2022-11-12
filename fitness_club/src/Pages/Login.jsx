import React, { useEffect } from 'react'
import style from "./Login.module.css"
import FitnessClubRem from "../Components/HomePage/images/FitnessClubRem.png"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../Redux/LoginRedux/Action'

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isAuth, isLoading, error } = useSelector((state) => state.AuthReducer)

    const handleSubmit = () => {
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        dispatch(login(
            {
                email,
                password
            }))
    }

    useEffect(() => {
        if (isAuth) {
            navigate("/")
        }
    }, [isAuth])
    return (
        <>
            <div className={style.main}>
                <div id='upper_login'>
                    <img className={style.logo_img} src={FitnessClubRem} alt="logo" />
                    <div className={style.emailPassword}>Email address</div>
                    <input id='email' className={style.email_input} type="text" />
                    <div className={style.emailPassword}>Password</div>
                    <input id='password' className={style.email_input} type="text" />
                    <div className={style.login_but} onClick={handleSubmit} >
                        <div className={style.empty_div}></div>
                        {isLoading?"Loading":"Login"}
                    </div>


                </div>
                <div id='lower_login'>
                    <div className={style.forget_pass}>Forgot your password?</div>
                    <div className={style.flex}>
                        <div className={style.dont_have}>Don't have an account? </div>
                        <div className={style.create_one}> Create one now!</div>
                    </div>

                    <div className={style.flex2}>
                        <div className={style.or_line}></div>
                        <div className={style.mid_or}>OR</div>
                        <div className={style.or_line}></div>
                    </div>
                    <div className={style.apple_but} onClick={() => { console.log("apple") }} >

                        <div className={style.apple_but_in}>
                            <div className={style.empty_div}></div>

                            <div className={style.logo_top_flex}>
                                <div><img className={style.apple_logo} src="https://logodix.com/logo/313717.png" alt="" /></div>

                                Sign in with Apple
                            </div>
                        </div>

                    </div>
                    <div className={style.empty_div}></div>
                    <div className={style.empty_div}></div>
                    <div className={style.empty_div}></div>
                    <div className={style.dont_have}>Sign In with Facebook is no longer supported</div>
                    <div className={style.forget_pass_now}>Create a new password now!</div>
                </div>
            </div>

            {/* lower section */}

            <div className={style.or_line2}></div>

            <div>
                <div className={style.copyRight} >© Copyright 2008-2022 FitNow, Inc. All Rights Reserved</div>
                <div className={style.privacy}>Privacy | Terms of Service</div>
            </div>
        </>
    )
}

export default Login