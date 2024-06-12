import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import MenuSuperior from '../comun/menusuperior.jsx'
import Footer from '../comun/footer.jsx'

export default function GlobalPanel({proporcional}) {

    const location = useLocation()

    return (
        <div className='position-relative' style={{width: '100%', height: '100%'}}>
            <div className='position-absolute start-0 top-0' style={{width: '100%', height: 'auto', zIndex: 9999}}>
                <MenuSuperior proporcional={proporcional}/>
            </div>
            <Outlet/>
            <Footer proporcional={proporcional}/>
        </div>
    )
}