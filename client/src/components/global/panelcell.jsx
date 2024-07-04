import React, { useState } from 'react'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import MenuSuperiorCell from '../comun/menusuperiorcell.jsx'
import FooterCell from '../comun/footercell.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { set_open_menu_main } from '../../redux/actions/data.js'

export default function GlobalPanelCell({proporcional}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const [seleccion_menu, setSeleccionMenu] = useState('')
    const [seleccion_submenu, setSeleccionSubMenu] = useState('')

    const {open_menu_main} = useSelector(({data_actions}) => data_actions)

    return (
        <div className='position-relative' style={{width: '100%', height: '100%'}}>
            <div className='position-absolute start-0 top-0' style={{width: '100%', height: 'auto', zIndex: 9999}}>
                <MenuSuperiorCell proporcional={proporcional}/>
            </div>
            {
                open_menu_main ? (
                    <div className='position-absolute end-0 shadow' style={{width: '100%', height: '100%', zIndex: 9999, top: 304 / proporcional}}>
                        <div className='d-flex justify-content-end' style={{width: '100%', height: '100%'}}>
                            <div style={{width: '40%', height: '100%', background: 'rgba(255, 255, 255, 0.6)'}}/>
                            <div style={{width: '60%', height: '100%', background: 'rgba(24, 54, 80, 0.8)', padding: 20 / proporcional}}>
                                <div className='d-flex justify-content-end' style={{width: '100%', height: 60 / proporcional, cursor: 'pointer'}} 
                                    onMouseOver={() => setSeleccionMenu('inicio')} onMouseLeave={() => setSeleccionMenu('')}
                                    onClick={() => {navigate ('/'); dispatch(set_open_menu_main(false))}}>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                fontWeight: 600, fontFamily: 'Roboto, sans-serif', textAlign: 'end', cursor: 'pointer'}}>
                                        INICIO
                                    </p>
                                </div>
                                <div className='d-flex justify-content-end' style={{width: '100%', height: 60 / proporcional, cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionMenu('nosotros')} onMouseLeave={() => setSeleccionMenu('')}
                                    onClick={() => {navigate ('/sobre-nosotros'); dispatch(set_open_menu_main(false))}}>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                fontWeight: 600, fontFamily: 'Roboto, sans-serif', textAlign: 'end', cursor: 'pointer'}}>
                                        NOSOTROS
                                    </p>
                                </div>
                                <div className='' style={{width: '100%', height: 'auto'}}>
                                    <div className='' style={{width: '100%', height: 'auto', cursor: 'pointer'}}
                                        onClick={() => setSeleccionMenu(seleccion_menu === '' ? 'servicios' : '')}>
                                        <p className='' 
                                            style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                    fontWeight: 600, fontFamily: 'Roboto, sans-serif', textAlign: 'end', cursor: 'pointer'}}>
                                            SERVICIOS
                                        </p>
                                        {
                                            seleccion_menu == 'servicios' ? (
                                                <div className='' style={{width: '100%',  height: 'auto', paddingTop: 10 / proporcional, 
                                                    paddingBottom: 10 / proporcional, paddingRight: 0 / proporcional}}>
                                                    <p className='' 
                                                        style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                                fontWeight: 600, fontFamily: 'Roboto, sans-serif', textAlign: 'end', cursor: 'pointer', 
                                                                background: seleccion_submenu === 'aerea' ? 'rgb(52, 204, 255)' : '', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}
                                                                onMouseOver={() => setSeleccionSubMenu('aerea')} onMouseLeave={() => setSeleccionSubMenu('')}
                                                                onClick={() => {navigate('/nuestros-servicios/carga-aerea'); dispatch(set_open_menu_main(false))}}>
                                                        Carga aérea
                                                    </p>
                                                    <p className='' 
                                                        style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                                fontWeight: 600, fontFamily: 'Roboto, sans-serif', textAlign: 'end', cursor: 'pointer', 
                                                                background: seleccion_submenu === 'maritimo' ? 'rgb(52, 204, 255)' : '', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}
                                                                onMouseOver={() => setSeleccionSubMenu('maritimo')} onMouseLeave={() => setSeleccionSubMenu('')}
                                                                onClick={() => {navigate('/nuestros-servicios/tansporte-maritimo'); dispatch(set_open_menu_main(false))}}>
                                                        Transporte marítimo
                                                    </p>
                                                    <p className='' 
                                                        style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                                fontWeight: 600, fontFamily: 'Roboto, sans-serif', textAlign: 'end', cursor: 'pointer', 
                                                                background: seleccion_submenu === 'carretera' ? 'rgb(52, 204, 255)' : '', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}
                                                                onMouseOver={() => setSeleccionSubMenu('carretera')} onMouseLeave={() => setSeleccionSubMenu('')}
                                                                onClick={() => {navigate('/nuestros-servicios/transporte-carretera'); dispatch(set_open_menu_main(false))}}>
                                                        Transporte por carretera
                                                    </p>
                                                    <p className='' 
                                                        style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                                fontWeight: 600, fontFamily: 'Roboto, sans-serif', textAlign: 'end', cursor: 'pointer', 
                                                                background: seleccion_submenu === 'almacen' ? 'rgb(52, 204, 255)' : '', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}
                                                                onMouseOver={() => setSeleccionSubMenu('almacen')} onMouseLeave={() => setSeleccionSubMenu('')}
                                                                onClick={() => {navigate('/nuestros-servicios/almacen'); dispatch(set_open_menu_main(false))}}>
                                                        Almacén
                                                    </p>
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                </div>
                                <div className='d-flex justify-content-end' style={{width: '100%', height: 60 / proporcional, cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionMenu('noticias')} onMouseLeave={() => setSeleccionMenu('')}
                                    onClick={() => {navigate ('/noticias'); dispatch(set_open_menu_main(false))}}>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                fontWeight: 600, fontFamily: 'Roboto, sans-serif', textAlign: 'end', cursor: 'pointer'}}>
                                        NOTICIAS
                                    </p>
                                </div>
                                <div className='d-flex justify-content-end' style={{width: '100%', height: 60 / proporcional, cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionMenu('galeria')} onMouseLeave={() => setSeleccionMenu('')}
                                    onClick={() => {navigate ('/galeria'); dispatch(set_open_menu_main(false))}}>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                fontWeight: 600, fontFamily: 'Roboto, sans-serif', textAlign: 'end', cursor: 'pointer'}}>
                                        GALERÍA
                                    </p>
                                </div>
                                <div className='d-flex justify-content-end' style={{width: '100%', height: 60 / proporcional, cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionMenu('contactanos')} onMouseLeave={() => setSeleccionMenu('')}
                                    onClick={() => {navigate ('/contactanos'); dispatch(set_open_menu_main(false))}}>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                fontWeight: 600, fontFamily: 'Roboto, sans-serif', textAlign: 'end', cursor: 'pointer'}}>
                                        CONTÁCTANOS
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }
            <Outlet/>
            <FooterCell proporcional={proporcional}/>
        </div>
    )
}