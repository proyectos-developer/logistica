import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import MenuSuperiorTablet from '../comun/menusuperiortablet.jsx'
import FooterTablet from '../comun/footertablet.jsx'

export default function GlobalPanelTablet({proporcional}) {

    const location = useLocation()

    return (
        <div className='position-relative' style={{width: '100%', height: '100%'}}>
            <div className='position-absolute start-0 top-0' style={{width: '100%', height: 'auto', zIndex: 9999}}>
                <MenuSuperiorTablet proporcional={proporcional}/>
            </div>
            <Outlet/>
            <FooterTablet proporcional={proporcional}/>
        </div>
    )
}