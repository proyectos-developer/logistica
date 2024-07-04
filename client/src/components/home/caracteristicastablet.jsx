import React from 'react'

import icono_proyectos from '../../assets/iconos/icono_proyectos_white_96.png'
import icono_clientes from '../../assets/iconos/icono_clientes_white_96.png'
import icono_truck from '../../assets/iconos/icono_trucks_white_96.png'
import icono_equipo from '../../assets/iconos/icono_equipo_white_96.png'

export default function CaracteristicasTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional,
                background: '#4a9ae9'}}>
            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-center' style={{width: '25%', height: 'auto'}}>
                    <img src={icono_proyectos} style={{width: 60 / proporcional, height: 60 / proporcional, marginRight: 10 / proporcional, marginTop: 8 / proporcional, marginBottom: 8 / proporcional}}/>
                    <div style={{width: 'auto', height: 'auto'}}>
                        <p className='' 
                            style={{fontSize: 36 / proporcional, lineHeight: `${38 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(24, 54, 80)',
                                    fontWeight: 300, fontFamily: 'Lato, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            320
                        </p>
                        <p className='' 
                            style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(24, 54, 80)',
                                    fontWeight: 600, fontFamily: 'Open, sans', cursor: 'default', textAlign: 'left'}}>
                            Proyectos ejecutados
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '25%', height: 60 / proporcional}}>
                    <img src={icono_clientes} style={{width: 60 / proporcional, height: 60 / proporcional, marginRight: 10 / proporcional, marginTop: 8 / proporcional, marginBottom: 8 / proporcional}}/>
                    <div style={{width: 'auto', height: 'auto'}}>
                        <p className='' 
                            style={{fontSize: 36 / proporcional, lineHeight: `${38 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(24, 54, 80)',
                                    fontWeight: 300, fontFamily: 'Lato, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            72
                        </p>
                        <p className='' 
                            style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(24, 54, 80)',
                                    fontWeight: 600, fontFamily: 'Open, sans', cursor: 'default', textAlign: 'left'}}>
                            Clientes en el mundo
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '25%', height: 60 / proporcional}}>
                    <img src={icono_truck} style={{width: 60 / proporcional, height: 60 / proporcional, marginRight: 10 / proporcional, marginTop: 8 / proporcional, marginBottom: 8 / proporcional}}/>
                    <div style={{width: 'auto', height: 'auto'}}>
                        <p className='' 
                            style={{fontSize: 36 / proporcional, lineHeight: `${38 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(24, 54, 80)',
                                    fontWeight: 300, fontFamily: 'Lato, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            153
                        </p>
                        <p className='' 
                            style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(24, 54, 80)',
                                    fontWeight: 600, fontFamily: 'Open, sans', cursor: 'default', textAlign: 'left'}}>
                            Vehículos propios
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '25%', height: 60 / proporcional}}>
                    <img src={icono_equipo} style={{width: 60 / proporcional, height: 60 / proporcional, marginRight: 10 / proporcional, marginTop: 8 / proporcional, marginBottom: 8 / proporcional}}/>
                    <div style={{width: 'auto', height: 'auto'}}>
                        <p className='' 
                            style={{fontSize: 36 / proporcional, lineHeight: `${38 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(38, 54, 80)',
                                    fontWeight: 300, fontFamily: 'Lato, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            114
                        </p>
                        <p className='' 
                            style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(24, 54, 80)',
                                    fontWeight: 600, fontFamily: 'Open, sans', cursor: 'default', textAlign: 'left'}}>
                            Personas en equipo
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
