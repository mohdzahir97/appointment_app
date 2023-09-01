import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { clearErrors, getMeetingDetailsAction, getUpComingMeetingAction } from '../../redux/actions/userAction';
import { useAlert } from 'react-alert';
import { AlertMessage, Environment } from '../../helper/Helper';
import { ScheduleMeetingTableSource, upcomingMeetingTableSource } from './tableSource/ScheduleMeetingTableSource';
import axios from 'axios';

const UpcomingMeetingCom = () => {


    const dispatch = useDispatch()

    const alert = useAlert();


    // const { loading, error, premeeting, isAuthenticated } = useSelector((state) => state.getscheduleMeetingReducer)

    // const data = useSelector((state) => state.getMeetingDetailsReducer)

    // useEffect(() => {
    //     if (error) {
    //         alert.error(error)
    //         dispatch(clearErrors());
    //     }
    //     dispatch(getUpComingMeetingAction())

    // }, [])

    // useEffect(() => {
    //     if (error) {
    //         alert.error(error)
    //         dispatch(clearErrors());
    //     }
    //     dispatch(getMeetingDetailsAction())

    // }, [])



    const [schedulingMeeting, SetschedulingMeeting] = useState([])

    const [confirmMeeting, setConfirmMeeting] = useState([])

    const getUpComingMeetingAction = async () => {
        try {
            const {data} = await axios.get(`${Environment.BASE_URL}/upcoming/meeting`,{
                withCredentials:true
            })

            SetschedulingMeeting(data.user)
        } catch (error) {

        }
    }

    const getMeetingDetailsAction =async () => {
        try {
            const {data} = await axios.get(`${Environment.BASE_URL}/meeting`,{
                withCredentials:true
            })
            setConfirmMeeting(data.user)
        } catch (error) {

        }
    }

    useEffect(() => {

        getMeetingDetailsAction()

    }, [])


    useEffect(() => {

        getUpComingMeetingAction()

    }, [])


    return (

        <>

            <div className='container w-auto mt-5 shadow-lg p-3 mb-5 bg-body rounded overflow-hidden'>
                <div className='row table-responsive'>
                    <div className='text-centet'>
                        <h5>Appointment scheduled by you.</h5>
                    </div>
                    <div className='col'>
                        <table class="table ">
                            <thead>
                                <tr>
                                    {
                                        upcomingMeetingTableSource.map((val, index) => {

                                            return (
                                                <th scope="col" key={index}>{val.key}</th>
                                            )
                                        })
                                    }

                                </tr>
                            </thead>


                            <tbody>


                                {
                                    confirmMeeting && confirmMeeting.map((val, index) => {

                                        const { _id, title, agenda, guest, email, meeting_date, country, phone, profession,isActive } = val;
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{title}</td>
                                                <td>{agenda}</td>
                                                <td>{guest}</td>
                                                <td>{country}</td>
                                                <td>{phone}</td>
                                                <td>{profession}</td>
                                                <td>{meeting_date}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className='container w-auto mt-5 shadow-lg p-3 mb-5 bg-body rounded overflow-hidden'>
                <div className='row table-responsive'>
                    <div className='text-centet'>
                        <h5>UpComing Appointment</h5>
                    </div>
                    <div className='col'>

                        <table class="table ">
                            <thead>
                                <tr>
                                    {
                                        upcomingMeetingTableSource.map((val, index) => {

                                            return (
                                                <th scope="col" key={index}>{val.key}</th>
                                            )
                                        })
                                    }

                                </tr>
                            </thead>


                            <tbody>


                                {
                                    schedulingMeeting && schedulingMeeting.map((val, index) => {

                                        const { _id, title, agenda, guest, email, meeting_date, country, phone, profession } = val;
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{title}</td>
                                                <td>{agenda}</td>
                                                <td>{guest}</td>
                                                <td>{country}</td>
                                                <td>{phone}</td>
                                                <td>{profession}</td>
                                                <td>{meeting_date}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>

    )
}

export default UpcomingMeetingCom

