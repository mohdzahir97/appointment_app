import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ServiceTabsData } from './ServiceTabsData'

const Services = () => {
    return (


        <div className='container'>
            <ul class="nav nav-pills nav-fill overflow-auto">
                {
                    ServiceTabsData.map((val, index) => {
                        const { url,title} = val;
                        return (
                            <li class="nav-item" key={index}>
                                <Link class="nav-link" to={url}>{title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <Outlet />
        </div>
    )
}

export default Services
