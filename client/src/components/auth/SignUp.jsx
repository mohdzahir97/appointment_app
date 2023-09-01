import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from "react-redux"
import { clearErrors, poupFlag, register } from '../../redux/actions/userAction'

import { useAlert } from "react-alert"
import { useNavigate } from 'react-router-dom'
import { AlertMessage } from '../../helper/Helper'

const SignUp = () => {


    const dispatch = useDispatch()

    const alert = useAlert();

    const navigate = useNavigate()


    const { loading, error, user, isAuthenticated, popupflag } = useSelector((state) => state.userReducer)

    
    let initialInputValues = {
        username: "",
        email: "",
        phone: "",
        password: ""
    }

    const [inputData, setInputData] = useState(initialInputValues)


    const handleInput = (e) => {
        try {
            const { name, value } = e.target;

            setInputData({ ...inputData, [name]: value })

        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {

        if (error) {
            alert.error(error)
            dispatch(clearErrors());
        }
        else if (popupflag) {
            setInputData(initialInputValues)
            alert.success(AlertMessage.SUCESS)
        }

    }, [dispatch, error, isAuthenticated, popupflag])

    const onSubmitSignup = (e) => {
        e.preventDefault()
        dispatch(register(inputData))

        // if (error) {
        //     alert.error(error)
        //     dispatch(clearErrors());
        // }
        // else if(isAuthenticated) {
        //     setInputData(initialInputValues)
        //     dispatch(poupFlag())
        //     alert.success(AlertMessage.SUCESS)
        // }

    }





    return (

        <>

            <div className=" container w-50 mt-5 shadow-lg p-3 mb-5 bg-body rounded overflow-hidden">

                <div className='row mt-3 mb-3'>
                    <div className='col'>
                        <h1>SignUp</h1>
                    </div>
                </div>



                <div className='row mt-3 mb-3'>
                    <div className='col-lg-12 col-sm-12 col-md-12'>
                        <input type='text' name='username' value={inputData.username}
                            onChange={(e) => handleInput(e)} placeholder={"Full Name"}
                            className='form-control'
                        />
                    </div>
                </div>


                <div className='row mt-3 mb-3'>
                    <div className='col-lg-12 col-sm-12 col-md-12'>
                        <input type='text' name='email' value={inputData.email}
                            onChange={(e) => handleInput(e)} placeholder={"Email"}
                            className='form-control'
                        />
                    </div>
                </div>


                <div className='row mt-3 mb-3'>
                    <div className='col-lg-12 col-sm-12 col-md-12'>
                        <input type='text' name='phone' value={inputData.phone}
                            onChange={(e) => handleInput(e)} placeholder={"Phone"}
                            className='form-control'
                        />
                    </div>
                </div>

                <div className='row mt-3 mb-3'>
                    <div className='col-lg-12 col-sm-12 col-md-12'>
                        <input type="password" name='password' value={inputData.password}
                            onChange={(e) => handleInput(e)} placeholder={"Password"}
                            className='form-control'
                        />
                    </div>
                </div>


                <div className='row mt-3 mb-3'>
                    <div className='col-lg-12 col-sm-12 col-md-12'>
                        <input type="submit" value={"Signup"} onClick={(e) => onSubmitSignup(e)} className='btn btn-primary' />
                    </div>
                </div>


            </div >
        </>

    )
}

export default SignUp
