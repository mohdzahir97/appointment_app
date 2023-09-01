import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { clearErrors, getUseProfilerDetails, profilerUpdateAction } from '../../redux/actions/userAction';
import { useAlert } from 'react-alert';
import { AlertMessage, Environment } from '../../helper/Helper';
import axios from 'axios';

export const Profile = () => {


    const dispatch = useDispatch()

    const alert = useAlert();

    const navigate = useNavigate()

    let initialInputValues = {
        _id: "",
        username: "",
        email: "",
        phone: "",
        country: "",
        profession: "",
        isActive: ""
    }

    const [inputData, setInputData] = useState(initialInputValues)

    const [isActiveState, setIsActiveState] = useState(false)

    const { loading, error, user, isAuthenticated } = useSelector((state) => state.userProfileDetailsReducer)


    const handleInput = (e) => {
        try {
            const { name, value } = e.target;

            console.log(name, value);

            setInputData({ ...inputData, [name]: value })

        } catch (error) {
            console.log(error);
        }
    }


    const onSubmitUpdateProfile = (e) => {
        e.preventDefault()
        console.log(inputData);
        dispatch(profilerUpdateAction(inputData))

        if (!error) {
            alert.success(AlertMessage.SUCESS)
        }

    }

    useEffect(() => {


        if (error) {
            alert.error(error)
            dispatch(clearErrors());
        }

        dispatch(getUseProfilerDetails())
        setInputData(user)


    }, [user])


    const hanldeActiveDeactive = async (e) => {

        try {
            const { data } = await axios.put(`${Environment.BASE_URL}/me/activate`, { isActive: e.target.value }, {
                withCredentials: true
            })
            // console.log(data.user.isActive);
            setIsActiveState(!isActiveState)
        } catch (error) {

        }
    }

    return (
        <div className='container'>
            <div className=" container w-50 mt-5 shadow-lg p-3 mb-5 bg-body rounded overflow-hidden">
                <div className='row'>
                    <div className='col-3 text-center'>
                        <h3>Profile</h3>
                    </div>
                    {/* <div className='col-6 text-center'>
                        <h5>{inputData.isActive ? <p className='text-success'>Active</p> : <p className='text-danger'>Deactive</p>}</h5>
                    </div> */}
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
                        <input type="email" name='email' value={inputData.email}
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
                        <input type='text' name='profession' value={inputData.profession}
                            onChange={(e) => handleInput(e)} placeholder={"Profession"}
                            className='form-control'
                        />
                    </div>
                </div>



                <div className='row mt-3 mb-3'>
                    <div className='col-lg-12 col-sm-12 col-md-12'>
                        <input type='text' name='country' value={inputData.country}
                            onChange={(e) => handleInput(e)} placeholder={"Country"}
                            className='form-control'
                        />
                    </div>
                </div>

                <div className='row mt-3 mb-3'>
                    <div className='col-lg-12 col-sm-12 col-md-12'>
                        <select class="form-select" name='isActive' onChange={handleInput}>
                            <option> select</option>
                            <option value={true}> Active</option>
                            <option value={false}>Dactive</option>
                        </select>
                    </div>
                </div>

                <div className='row mt-6 mb-3'>
                    <div className='col-lg-6 col-sm-6 col-md-6'>
                        <input type="submit" value={"update"} onClick={(e) => onSubmitUpdateProfile(e)} className='btn btn-primary' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
