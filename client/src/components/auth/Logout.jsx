import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../../redux/actions/userAction'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

    const navigate=useNavigate()

    const dispatch = useDispatch()

    const { loading, error, user, isAuthenticated, popupflag } = useSelector((state) => state.userReducer)

    useEffect(() => {
        dispatch(logoutAction())

        if (error) {

        }else if(!isAuthenticated){
            localStorage.removeItem("loginSuccess")
            navigate("/login")
        }
    }, [error, dispatch, isAuthenticated])

    return (
        <div className='text-center'>
        </div>
    )
}

export default Logout
