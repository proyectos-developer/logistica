import React, { PureComponent, useState } from 'react'

import logo from '../../assets/logo/logo_horizontal_white_750.png'

import icono_map from '../../assets/iconos/icono_map_white_96.png'
import icono_idioma from '../../assets/iconos/icono_idioma_blue_96.png'
import icono_email from '../../assets/iconos/icono_email_blue_96.png'
import icono_clock from '../../assets/iconos/icono_clock_blue_96.png'
import icono_world from '../../assets/iconos/icono_world_blue_96.png'
import icono_phone from '../../assets/iconos/icono_phone_blue_96.png'

import {useLocation, useNavigate} from 'react-router-dom'

export default function MenuSuperior({proporcional}) {

    const navigate = useNavigate()
    const location = useLocation()

    const [seleccion_menu, setSeleccionMenu] = useState('')
    const [seleccion_submenu, setSeleccionSubMenu] = useState('')

    return (
        <div className='shadow rounded-bottom' style={{width: '100%', height: 208 / proporcional}}>
            <div style={{width: '100%', height: 60 / proporcional, background: 'rgba(39, 39, 39, 0.4)'}}>
                <div style={{width: '100%', height: 60 / proporcional, paddingTop: 14 / proporcional, paddingBottom: 14 / proporcional, paddingLeft: 200 / proporcional, 
                    paddingRight: 200 / proporcional}}>
                    <div className='d-flex' style={{width: '100%', height: 32 / proporcional}}>
                        <div className='d-flex justify-content-start' style={{width: '20%', height: 32 / proporcional}}>
                            <img src={icono_idioma} style={{width: 32 / proporcional, height: 32 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: 600, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                                Español
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '20%', height: 32 / proporcional}}>
                            <img src={icono_phone} style={{width: 32 / proporcional, height: 32 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: 600, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                                (+51) 968-XXXXXX
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '20%', height: 32 / proporcional}}>
                            <img src={icono_email} style={{width: 32 / proporcional, height: 32 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: 600, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                                nombre@dominio.com
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '20%', height: 32 / proporcional}}>
                            <img src={icono_clock} style={{width: 32 / proporcional, height: 32 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: 600, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                                Lun - Sáb: 9a.m - 6p.m
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 32 / proporcional}}>
                            <img src={icono_world} style={{width: 32 / proporcional, height: 32 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: 600, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                                Lima, Perú
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 148 / proporcional, background: 'transparent'}}>
                <div style={{width: '100%', height: 148 / proporcional, paddingLeft: 200 / proporcional, paddingRight: 200 / proporcional}}>
                    <div className='d-flex' style={{width: '100%', height: 148 / proporcional}}>
                        <div className='d-flex justify-content-start rounded-left'
                             style={{width: '20%', height: '100%', paddingTop: 30 / proporcional, borderBottom: '1px solid white'}}>
                            <img src={logo} style={{width: '100%', height: '80%'}}/>
                        </div>
                        <div className='d-flex' style={{width: '80%', height: 148 / proporcional}}>
                            <div className='d-flex justify-content-start' style={{width: '90%', height: 148 / proporcional}}>
                                <div className='d-flex justify-content-center' style={{width: '16.7%', height: 148 / proporcional, borderBottom: '1px solid white'}}>
                                    <div className='d-flex justify-content-center position-relative' style={{width: '60%', height: 148 / proporcional, cursor: 'pointer', 
                                        borderBottom: (seleccion_menu === 'inicio' || location.pathname.split ('/')[1] === '') ? '4px solid #4a9ae9' : '1px solid white',
                                        borderRadius: (seleccion_menu === 'inicio' || location.pathname.split ('/')[1] === '') ? 2 / proporcional : 0}}
                                        onMouseOver={() => setSeleccionMenu('inicio')} onMouseLeave={() => setSeleccionMenu('')}
                                        onClick={() => navigate ('/')}>
                                        <p className='' 
                                            style={{fontSize: 18 / proporcional, lineHeight: `${148 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                    fontWeight: 600, fontFamily: 'Roboto, sans-serif', textAlign: 'center', cursor: 'pointer'}}>
                                            INICIO
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '16.7%', height: 148 / proporcional, borderBottom: '1px solid white'}}>
                                    <div className='d-flex justify-content-center position-relative' style={{width: '60%', height: 148 / proporcional, cursor: 'pointer', 
                                        borderBottom: (seleccion_menu === 'nosotros' || location.pathname.split ('/')[1] === 'sobre-nosotros') ? '4px solid #4a9ae9' : '1px solid white',
                                        borderRadius: (seleccion_menu === 'nosotros' || location.pathname.split ('/')[1] === 'sobre-nosotros') ? 2 / proporcional : 0}}
                                        onMouseOver={() => setSeleccionMenu('nosotros')} onMouseLeave={() => setSeleccionMenu('')}
                                        onClick={() => navigate ('/sobre-nosotros')}>
                                        <p className='' 
                                            style={{fontSize: 18 / proporcional, lineHeight: `${148 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                    fontWeight: 600, fontFamily: 'Roboto, sans-serif', textAlign: 'center', cursor: 'pointer'}}>
                                            NOSOTROS
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '16.7%', height: 'auto', borderBottom: '1px solid white'}}>
                                    <div className='d-flex justify-content-center position-relative' style={{width: '60%', height: 148 / proporcional, cursor: 'pointer', 
                                        borderBottom: (seleccion_menu === 'servicios' || location.pathname.split ('/')[1] === 'nuestros-servicios') ? '4px solid #4a9ae9' : '1px solid white',
                                        borderRadius: (seleccion_menu === 'servicios' || location.pathname.split ('/')[1] === 'nuestros-servicios') ? 2 / proporcional : 0}}
                                        onMouseOver={() => setSeleccionMenu('servicios')} onMouseLeave={() => setSeleccionMenu('')}>
                                        <p className='' 
                                            style={{fontSize: 18 / proporcional, lineHeight: `${148 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                    fontWeight: 600, fontFamily: 'Roboto, sans-serif', textAlign: 'center', cursor: 'pointer'}}
                                                    onClick={() => navigate ('/nuestros-servicios')}>
                                            SERVICIOS
                                        </p>
                                        {
                                            seleccion_menu == 'servicios' ? (
                                                <div className='position-absolute start-0 shdow rounded' style={{width: 300 / proporcional,  height: 'auto', paddingTop: 20 / proporcional, 
                                                    paddingBottom: 20 / proporcional, background: 'rgb(24, 54, 80)', top: 148 / proporcional, zIndex: 9999}}>
                                                    <p className='' 
                                                        style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                                fontWeight: 600, fontFamily: 'Roboto, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                                                background: seleccion_submenu === 'aerea' ? 'rgb(52, 204, 255)' : '', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}
                                                                onMouseOver={() => setSeleccionSubMenu('aerea')} onMouseLeave={() => setSeleccionSubMenu('')}
                                                                onClick={() => navigate('/nuestros-servicios/carga-aerea')}>
                                                        Carga aérea
                                                    </p>
                                                    <p className='' 
                                                        style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                                fontWeight: 600, fontFamily: 'Roboto, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                                                background: seleccion_submenu === 'maritimo' ? 'rgb(52, 204, 255)' : '', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}
                                                                onMouseOver={() => setSeleccionSubMenu('maritimo')} onMouseLeave={() => setSeleccionSubMenu('')}
                                                                onClick={() => navigate('/nuestros-servicios/tansporte-maritimo')}>
                                                        Transporte marítimo
                                                    </p>
                                                    <p className='' 
                                                        style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                                fontWeight: 600, fontFamily: 'Roboto, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                                                background: seleccion_submenu === 'carretera' ? 'rgb(52, 204, 255)' : '', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}
                                                                onMouseOver={() => setSeleccionSubMenu('carretera')} onMouseLeave={() => setSeleccionSubMenu('')}
                                                                onClick={() => navigate('/nuestros-servicios/transporte-carretera')}>
                                                        Transporte por carretera
                                                    </p>
                                                    <p className='' 
                                                        style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                                fontWeight: 600, fontFamily: 'Roboto, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                                                background: seleccion_submenu === 'almacen' ? 'rgb(52, 204, 255)' : '', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}
                                                                onMouseOver={() => setSeleccionSubMenu('almacen')} onMouseLeave={() => setSeleccionSubMenu('')}
                                                                onClick={() => navigate('/nuestros-servicios/almacen')}>
                                                        Almacén
                                                    </p>
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '16.7%', height: 148 / proporcional, borderBottom: '1px solid white'}}>
                                    <div className='d-flex justify-content-center position-relative' style={{width: '60%', height: 148 / proporcional, cursor: 'pointer', 
                                        borderBottom: (seleccion_menu === 'noticias' || location.pathname.split ('/')[1] === 'noticias') ? '4px solid #4a9ae9' : '1px solid white',
                                        borderRadius: (seleccion_menu === 'noticias' || location.pathname.split ('/')[1] === 'noticias') ? 2 / proporcional : 0}}
                                        onMouseOver={() => setSeleccionMenu('noticias')} onMouseLeave={() => setSeleccionMenu('')}
                                        onClick={() => navigate ('/noticias')}>
                                        <p className='' 
                                            style={{fontSize: 18 / proporcional, lineHeight: `${148 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                    fontWeight: 600, fontFamily: 'Roboto, sans-serif', textAlign: 'center', cursor: 'pointer'}}>
                                            NOTICIAS
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '16.7%', height: 148 / proporcional, borderBottom: '1px solid white'}}>
                                    <div className='d-flex justify-content-center position-relative' style={{width: '60%', height: 148 / proporcional, cursor: 'pointer', 
                                        borderBottom: (seleccion_menu === 'galeria' || location.pathname.split ('/')[1] === 'galeria') ? '4px solid #4a9ae9' : '1px solid white',
                                        borderRadius: (seleccion_menu === 'galeria' || location.pathname.split ('/')[1] === 'galeria') ? 2 / proporcional : 0}}
                                        onMouseOver={() => setSeleccionMenu('galeria')} onMouseLeave={() => setSeleccionMenu('')}
                                        onClick={() => navigate ('/galeria')}>
                                        <p className='' 
                                            style={{fontSize: 18 / proporcional, lineHeight: `${148 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                    fontWeight: 600, fontFamily: 'Roboto, sans-serif', textAlign: 'center', cursor: 'pointer'}}>
                                            GALERÍA
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '16.7%', height: 148 / proporcional, borderBottom: '1px solid white'}}>
                                    <div className='d-flex justify-content-center position-relative' style={{width: '60%', height: 148 / proporcional, cursor: 'pointer', 
                                        borderBottom: (seleccion_menu === 'contacto' || location.pathname.split ('/')[1] === 'contactanos') ? '4px solid #4a9ae9' : '1px solid white',
                                        borderRadius: (seleccion_menu === 'contacto' || location.pathname.split ('/')[1] === 'contactanos') ? 2 / proporcional : 0}}
                                        onMouseOver={() => setSeleccionMenu('contacto')} onMouseLeave={() => setSeleccionMenu('')}
                                        onClick={() => navigate ('/contactanos')}>
                                        <p className='' 
                                            style={{fontSize: 18 / proporcional, lineHeight: `${148 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                            fontWeight: 600, fontFamily: 'Roboto, sans-serif', textAlign: 'center', cursor: 'pointer'}}>
                                            CONTÁCTANOS
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '2%', height: 148 / proporcional, paddingTop: 30 / proporcional, paddingBottom: 30 / proporcional,
                                    borderBottom: '1px solid white'}}>
                                <div style={{width: 2 / proporcional, height: 88 / proporcional, background: 'white'}}/>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '8%', height: 148 / proporcional, paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional,
                                    borderBottom: '1px solid white'}}>
                                <img src={icono_map} style={{width: 48 / proporcional, height: 48 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
