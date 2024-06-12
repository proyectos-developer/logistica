import React, { useState } from 'react'

import logo from '../../assets/logo/logo_vertical_white_550.png'

import icono_right from '../../assets/iconos/icono_arrow_right_blue_96.png'
import icono_location from '../../assets/iconos/icono_location_mapa_white_96.png'
import icono_phone from '../../assets/iconos/icono_cell_mapa_white_96.png'
import icono_print from '../../assets/iconos/icono_print_white_96.png'
import icono_email from '../../assets/iconos/icono_email_mapa_white_96.png'
import icono_clock from '../../assets/iconos/icono_clock_white_96.png'

import icono_facebook from '../../assets/iconos/icono_facebook_white_96.png'
import icono_instagram from '../../assets/iconos/icono_instagram_white_96.png'
import icono_twitter from '../../assets/iconos/icono_twitter_white_96.png'
import icono_youtube from '../../assets/iconos/icono_youtube_white_96.png'
import icono_linkedin from '../../assets/iconos/icono_linkedin_white_96.png'
import icono_tiktok from '../../assets/iconos/icono_tiktok_white_96.png'

import { useLocation } from 'react-router-dom'

export default function Footer({proporcional}) {

    const [seleccion_menu, setSeleccionMenu] = useState('')
    const [email_suscripcion, setEmailSuscripcion] = useState('')
    
    const [eemail_suscripcion, setEEmailSuscripcion] = useState('')

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 150 / proporcional, paddingBottom: 150 / proporcional, paddingLeft: 200 / proporcional, paddingRight: 200 / proporcional,
                background: '#1c4c96'}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', paddingBottom: 50 / proporcional, borderBottom: '1px solid white', marginBottom: 20 / proporcional}}>
                <div style={{width: '24%', height: 'auto'}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                        <img src={logo} style={{width: '60%', height: '60%'}}/>
                    </div>
                    <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 50 / proporcional, color: 'white',
                                    fontWeight: 600, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                            Cada día es un nuevo día para nosotros y trabajamos muy duro para satisfacer a nuestros clientes en todas partes.
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                    fontWeight: 600, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                            REGÍSTRARSE A LAS NOTICIAS
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 50 / proporcional, background: 'white'}}>
                        <input  
                            type='email'
                            className='form-control border-0'
                            value={email_suscripcion}
                            onChange={(event) => setEmailSuscripcion(event.target.value)}
                            placeholder='Ingrese su e-mail'
                            style={{width: '85%', height: 50 / proporcional, fontSize: 20 / proporcional, color: 'rgb(166, 166, 166)', fontWeight: 400}}
                            id='email_suscripcion'/>
                        <div style={{width: '15%', height: 50 / proporcional}}>
                            <img src={icono_right} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 16 / proporcional, cursor: 'pointer'}}/>
                        </div>
                    </div>
                </div>
                <div style={{width: '24%', height: 'auto', paddingLeft: 50 / proporcional}}>
                    <div style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                        <p className='d-flex justify-content-start' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                    fontWeight: 600, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                            MENÚ
                        </p>
                    </div>
                    <div className='' style={{width: 'auto', height: 'auto', marginBottom: 20 / proporcional}}>
                        <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                            <p className='d-flex justify-content-start' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: seleccion_menu === 'inicio' ? 700 : 500, fontFamily: 'Roboto, sans-serif', cursor: 'pointer'}}
                                        onMouseOver={() => setSeleccionMenu('inicio')} onMouseLeave={() => setSeleccionMenu('')}>
                                Inicio
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                            <p className='d-flex justify-content-start' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: seleccion_menu === 'nosotros' ? 700 : 500, fontFamily: 'Roboto, sans-serif', cursor: 'pointer'}}
                                        onMouseOver={() => setSeleccionMenu('nosotros')} onMouseLeave={() => setSeleccionMenu('')}>
                                Nosotros
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                            <p className='d-flex justify-content-start' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: seleccion_menu === 'servicios' ? 700 : 500, fontFamily: 'Roboto, sans-serif', cursor: 'pointer'}}
                                        onMouseOver={() => setSeleccionMenu('servicios')} onMouseLeave={() => setSeleccionMenu('')}>
                                Servicios
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                            <p className='d-flex justify-content-start' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: seleccion_menu === 'noticias' ? 700 : 500, fontFamily: 'Roboto, sans-serif', cursor: 'pointer'}}
                                        onMouseOver={() => setSeleccionMenu('noticias')} onMouseLeave={() => setSeleccionMenu('')}>
                                Noticias
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                            <p className='d-flex justify-content-start' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: seleccion_menu === 'contactanos' ? 700 : 500, fontFamily: 'Roboto, sans-serif', cursor: 'pointer'}}
                                        onMouseOver={() => setSeleccionMenu('contactanos')} onMouseLeave={() => setSeleccionMenu('')}>
                                Contáctanos
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{width: '24%', height: 'auto'}}>
                    <div style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                        <p className='d-flex justify-content-start' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                    fontWeight: 600, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                            Ponte en contácto
                        </p>
                    </div>
                    <div className='' style={{width: 'auto', height: 'auto', marginBottom: 20 / proporcional}}>
                        <div className='d-flex' style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                            <img src={icono_location} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='d-flex justify-content-start' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: seleccion_menu === 'inicio' ? 700 : 500, fontFamily: 'Roboto, sans-serif', cursor: 'pointer'}}>
                                Dirección
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                            <img src={icono_phone} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='d-flex justify-content-start' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: seleccion_menu === 'nosotros' ? 700 : 500, fontFamily: 'Roboto, sans-serif', cursor: 'pointer'}}>
                                Número teléfono
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                            <img src={icono_print} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='d-flex justify-content-start' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: seleccion_menu === 'servicios' ? 700 : 500, fontFamily: 'Roboto, sans-serif', cursor: 'pointer'}}>
                                FAX
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                            <img src={icono_email} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='d-flex justify-content-start' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: seleccion_menu === 'noticias' ? 700 : 500, fontFamily: 'Roboto, sans-serif', cursor: 'pointer'}}>
                                correo@dominio.com
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                            <img src={icono_clock} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='d-flex justify-content-start' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: seleccion_menu === 'contactanos' ? 700 : 500, fontFamily: 'Roboto, sans-serif', cursor: 'pointer'}}>
                                Horario
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{width: '24%', height: 'auto'}}>
                    <div style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                        <p className='d-flex justify-content-start' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                    fontWeight: 600, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                            Últimas noticias
                        </p>
                    </div>
                </div>
            </div>
            <div className='d-flex' style={{width: '100%', height: 60 / proporcional, marginBottom: 20 / proporcional}}>
                <div style={{width: '50%', height: 60 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 16 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                fontWeight: 600, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                        Copyright @ 2012-2024 logistics by Developer Ideas All rights reserved
                    </p>
                </div>
                <div className='d-flex justify-content-end' style={{width: '50%', height: 60 / proporcional}}>
                    <img src={icono_facebook} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional, margin: 18 / proporcional}}/>
                    <img src={icono_instagram} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional, margin: 18 / proporcional}}/>
                    <img src={icono_youtube} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional, margin: 18 / proporcional}}/>
                    <img src={icono_tiktok} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional, margin: 18 / proporcional}}/>
                    <img src={icono_twitter} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional, margin: 18 / proporcional}}/>
                    <img src={icono_linkedin} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 18 / proporcional}}/>
                </div>
            </div>
        </div>
    )
}
