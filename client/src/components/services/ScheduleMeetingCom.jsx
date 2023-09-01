
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { clearErrors, getAllUserDetailsAction, getSingleUserDetailsAction, scheduleMeetingAction } from '../../redux/actions/userAction';
import { useAlert } from 'react-alert';
import { AlertMessage } from '../../helper/Helper';
import { ScheduleMeetingTableSource } from './tableSource/ScheduleMeetingTableSource';

const ScheduleMeetingCom = () => {


    const dispatch = useDispatch()

    const alert = useAlert();

    const [allUserData, setAllUserData] = useState()

    const { loading, error, users, isAuthenticated } = useSelector((state) => state.getAllUserDetailsReducer)

    const data = useSelector((state) => state.getSingleUserDetailsReducer)

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors());
        }
        dispatch(getAllUserDetailsAction())
        setAllUserData(users)
    }, [users])



    //Schedule Meeting ///////////////////////////////

    let initialInputValues = {
        id: "",
        title: "",
        agenda: "",
        guest: "",
        email: "",
        meeting_date: "",
        country: "",
        phone: "",
        profession: ""
    }
    const [inputData, setInputData] = useState(initialInputValues)

    // const { username, email, phone, country, profession } = data.users

    const getSingleUserDetails = (id) => {


        dispatch(getSingleUserDetailsAction(id))

        initialInputValues.id = data.users._id;
        initialInputValues.guest = data.users.username;
        initialInputValues.email = data.users.email;
        initialInputValues.country = data.users.country;
        initialInputValues.phone = data.users.phone;
        initialInputValues.profession = data.users.profession;
        initialInputValues.title = "";
        initialInputValues.agenda = "";
        initialInputValues.meeting_date = "";

        setInputData(initialInputValues)
    }

    const handleInput = (e) => {
        try {
            const { name, value } = e.target;

            setInputData({ ...inputData, [name]: value })

        } catch (error) {
            console.log(error);
        }
    }




    const onSubmitScheduleMeeting = (e) => {
        e.preventDefault()

        dispatch(scheduleMeetingAction(inputData))

        if (!error) {
            alert.success(AlertMessage.SUCESS)
        }

    }

    return (

        <>

            <div className='container w-75 mt-5 shadow-lg p-3 mb-5 bg-body rounded overflow-hidden'>
                <div className='row table-responsive'>
                    <div className='col'>
                        <table class="table ">
                            <thead>
                                <tr>
                                    {
                                        ScheduleMeetingTableSource.map((val, index) => {

                                            return (
                                                <th scope="col" key={index}>{val.key}</th>
                                            )
                                        })
                                    }

                                </tr>
                            </thead>


                            <tbody>

                                {
                                    users && users.map((val, index) => {

                                        const { _id, username, email, phone, country, profession, isActive } = val;
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{username}</td>
                                                <td>{phone}</td>
                                                <td>{country}</td>
                                                <td>{profession}</td>
                                                <td>
                                                    <button onClick={() => getSingleUserDetails(_id)}
                                                        className='btn btn-primary'
                                                        disabled={isActive == false}
                                                    >
                                                        set appointment
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='container w-75 mt-5 shadow-lg p-3 mb-5 bg-body rounded overflow-hidden'>
                <div className='row'>
                    <div className='col'>

                        <div className='row mt-3 mb-3'>
                            <div className='col-lg-6 col-sm-12 col-md-12'>
                                <input type='text' name='title' value={inputData.title}
                                    onChange={(e) => handleInput(e)} placeholder={"Title"}
                                    className='form-control'
                                />
                            </div>

                            <div className='col-lg-6 col-sm-12 col-md-12'>
                                <input type='text' name='agenda' value={inputData.agenda}
                                    onChange={(e) => handleInput(e)} placeholder={"Agenda"}
                                    className='form-control'
                                />
                            </div>
                        </div>

                        <div className='row mt-3 mb-3'>
                            <div className='col-lg-6 col-sm-12 col-md-12'>
                                <input type='text' name='guest' value={inputData.guest}
                                    onChange={(e) => handleInput(e)}
                                    className='form-control'
                                    disabled
                                />
                            </div>

                            <div className='col-lg-6 col-sm-12 col-md-12'>
                                <input type='text' name='country' value={inputData.country}
                                    onChange={(e) => handleInput(e)}
                                    className='form-control'
                                    disabled
                                />
                            </div>
                        </div>


                        <div className='row mt-3 mb-3'>
                            <div className='col-lg-6 col-sm-12 col-md-12'>
                                <input type='text' name='phone' value={inputData.phone}
                                    onChange={(e) => handleInput(e)}
                                    className='form-control'
                                    disabled
                                />
                            </div>

                            <div className='col-lg-6 col-sm-12 col-md-12'>
                                <input type='text' name='profession' value={inputData.profession}
                                    onChange={(e) => handleInput(e)}
                                    className='form-control'
                                    disabled
                                />
                            </div>
                        </div>

                        <div className='row mt-3 mb-3'>
                            <div className='col-lg-6 col-sm-12 col-md-12'>
                                <input type="datetime-local" name='meeting_date' value={inputData.meeting_date}
                                    onChange={(e) => handleInput(e)}
                                    className='form-control'
                                />
                            </div>

                            <div className='col-lg-6 col-sm-12 col-md-12'>
                                <input type="submit" value={"submit"} onClick={(e) => onSubmitScheduleMeeting(e)} className='btn btn-primary' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ScheduleMeetingCom
