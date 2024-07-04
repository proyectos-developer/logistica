import React from 'react'

import {useDispatch, useSelector} from 'react-redux'

import icono_menu from '../../assets/iconos/icono_menu_white_96.png'
import icono_idioma from '../../assets/iconos/icono_idioma_blue_96.png'
import icono_email from '../../assets/iconos/icono_email_blue_96.png'
import icono_clock from '../../assets/iconos/icono_clock_blue_96.png'
import icono_world from '../../assets/iconos/icono_world_blue_96.png'
import icono_phone from '../../assets/iconos/icono_phone_blue_96.png'
import logo from '../../assets/logo/logo_horizontal_white_750.png'

import { set_open_menu_main } from '../../redux/actions/data'

export default function MenuSuperiorCell({proporcional}) {

    const dispatch = useDispatch()

    const {open_menu_main} = useSelector(({data_actions}) => data_actions)

    return (
        <div className='shadow rounded-bottom' style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto', background: 'rgba(39, 39, 39, 0.4)'}}>
                <div style={{width: '100%', height: 'auto', paddingTop: 14 / proporcional, paddingBottom: 14 / proporcional, paddingLeft: 20 / proporcional, 
                    paddingRight: 20 / proporcional}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 32 / proporcional, marginBottom: 16/ proporcional}}>
                        <div className='d-flex justify-content-start' style={{width: '48%', height: 32 / proporcional}}>
                            <img src={icono_idioma} style={{width: 32 / proporcional, height: 32 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: 600, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                                Español
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '48%', height: 32 / proporcional}}>
                            <img src={icono_phone} style={{width: 32 / proporcional, height: 32 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: 600, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                                (+51) 968-XXXXXX
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 32 / proporcional, marginBottom: 16/ proporcional}}>
                        <div className='d-flex justify-content-start' style={{width: '48%', height: 32 / proporcional}}>
                            <img src={icono_email} style={{width: 32 / proporcional, height: 32 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: 600, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                                nombre@dominio.com
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '48%', height: 32 / proporcional}}>
                            <img src={icono_world} style={{width: 32 / proporcional, height: 32 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: 600, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                                Lima, Perú
                            </p>
                        </div>
                        
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 32 / proporcional}}>
                        <div className='d-flex justify-content-end' style={{width: '48%', height: 32 / proporcional}}>
                            <img src={icono_clock} style={{width: 32 / proporcional, height: 32 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: 600, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                                Lun - Sáb: 9a.m - 6p.m
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', background: 'transparent'}}>
                <div style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 148 / proporcional}}>
                        <div className='d-flex justify-content-start rounded-left'
                             style={{width: '74%', height: 148 / proporcional, paddingTop: 19 / proporcional}}>
                            <img src={logo} style={{width: '80%', height: '80%'}}/>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '24%', height: 148 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: '2%', height: 148 / proporcional, paddingTop: 30 / proporcional, paddingBottom: 30 / proporcional,
                                    }}>
                                <div style={{width: 2 / proporcional, height: 88 / proporcional, background: 'white'}}/>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '98%', height: 148 / proporcional, paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional,
                                    }} onClick={() => dispatch(set_open_menu_main(!open_menu_main))}>
                                <img src={icono_menu} style={{width: 48 / proporcional, height: 48 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
