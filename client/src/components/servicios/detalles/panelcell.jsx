import React from 'react'

import {useLocation} from 'react-router-dom'

import ImagePrincipalCell from './imageprincipalcell.jsx'
import HabilidadesCell from './habilidadescell.jsx'
import CaracteristicasCell from './caracteristicascell.jsx'
import CombinandoServiciosCell from './combinandoservicioscell.jsx'
import PreguntasFrecuentesCell from './preguntasfrecuentescell.jsx'
import CaracteristicasServicioCell from './caracteristicasserviciocell.jsx'

export default function DetallesServiciosCell({proporcional}) {

    const location = useLocation()

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='position-relative' style={{width: '100%', height: 350 / proporcional}}>
                    <ImagePrincipalCell proporcional={proporcional}/>
                </div>
                <div style={{width: '100%', height: 'auto', paddingTop: 20 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, marginBottom: 50 / proporcional}}>
                    <div style={{width: '100%', height: 50 / proporcional}}>
                        <div className='d-flex' style={{width: '100%', height: 50 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: '#183650',
                                        fontWeight: 600, fontFamily: 'Roboto, sans-serif', cursor: 'pointer', marginRight: 10 / proporcional}}>
                                Inicio
                            </p>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'pointer', marginRight: 10 / proporcional}}>
                                /
                            </p>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'pointer'}}>
                                Servicios
                            </p>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'pointer', marginRight: 10 / proporcional}}>
                                /
                            </p>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'pointer'}}>
                                {location.pathname.split('/')[2].replace ('-', ' ').toUpperCase()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                <HabilidadesCell proporcional={proporcional}/>
                <CaracteristicasCell proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <CombinandoServiciosCell proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
                <PreguntasFrecuentesCell proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <CaracteristicasServicioCell proporcional={proporcional}/>
            </div>
        </div>
    )
}
