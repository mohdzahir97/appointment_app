import React, { useEffect, useState } from 'react'
import SigninLogo from "../assests/signinlogo.gif"
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, login, poupFlag, updatePasswordAction } from '../../redux/actions/userAction'
import { useAlert } from 'react-alert'
import { AlertMessage } from '../../helper/Helper'
import { useNavigate } from 'react-router-dom'
import Header from '../layout/Header'

const ChangePassword = () => {

    const navigate = useNavigate()
    const alert = useAlert()
    const dispatch = useDispatch()

    const { loading, error, user, isAuthenticated, popupflag } = useSelector((state) => state.updatePasswordReducer)

    let initialInputValues = {
        oldpassword: "",
        newpassword: "",
        confirmpassword: ""
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


    const onSubmitChangePassword = (e) => {
        e.preventDefault()

        const { newpassword, confirmpassword } = inputData;

        if (newpassword !== confirmpassword) {
            alert.error("Password Does Not Match")
        } else {
            dispatch(updatePasswordAction(inputData))

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

    return (

        <>

            <div className=" container w-50   mt-5 shadow-lg p-3 mb-5 bg-body rounded ">

                <div className='row'>
                    <div className='col-lg-4 col-sm-6 col-md-6  overflow-hidden'>
                        <div className='row'>
                            <div className="col text-center">
                                <img src={SigninLogo} alt='...img' className='w-100 h-100 mt-2 '></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8 col-sm-6 col-md-6  overflow-auto'>
                        <div className='row mt-5 mb-3'>
                            <div className='col'>
                                <h4>Change Password</h4>
                            </div>
                        </div>


                        <div className='row mt-3 mb-3'>
                            <div className='col-lg-12 col-sm-12 col-md-12'>
                                <input type="password" name='oldpassword' value={inputData.oldpassword}
                                    onChange={(e) => handleInput(e)} placeholder={"Old Password"}
                                    className='form-control'
                                />
                            </div>
                        </div>


                        <div className='row mt-3 mb-3'>
                            <div className='col-lg-12 col-sm-12 col-md-12'>
                                <input type="password" name='newpassword' value={inputData.newpassword}
                                    onChange={(e) => handleInput(e)} placeholder={"New Password"}
                                    className='form-control'
                                />
                            </div>
                        </div>


                        <div className='row mt-3 mb-3'>
                            <div className='col-lg-12 col-sm-12 col-md-12'>
                                <input type="password" name='confirmpassword' value={inputData.confirmpassword}
                                    onChange={(e) => handleInput(e)} placeholder={"Confirm Password"}
                                    className='form-control'
                                />
                            </div>
                        </div>


                        <div className='row mt-3 mb-3'>
                            <div className='col-lg-12 col-sm-12 col-md-12'>
                                <input type="submit" value={"Submit"} onClick={(e) => onSubmitChangePassword(e)} className='btn btn-primary' />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}

export default ChangePassword
