import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = ({}) => {

    const { loading, error, user, isAuthenticated, popupflag } = useSelector((state) => state.userReducer);

    const isLogin = localStorage.getItem("loginSuccess")

    const AfterNavbarLogin = () => {
        return (
            <>
                <li class="nav-item">
                    <Link class="nav-link " to="/">Home</Link>
                </li>

                <li class="nav-item">
                    <Link class="nav-link " to="/services">Services</Link>
                </li>

                <li class="nav-item">
                    <Link class="nav-link" to="/logout">Logout</Link>
                </li>

            </>
        )
    }



    const BeforeNavbarLogin = () => {
        return (
            <>
                <li class="nav-item">
                    <Link class="nav-link " to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/register">Signup</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/login">Singin</Link>

                </li>



            </>
        )
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" href="#">WeMeet Appointment</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                 isAuthenticated || isLogin? <AfterNavbarLogin /> : <BeforeNavbarLogin />
                            }
                        </ul>


                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
