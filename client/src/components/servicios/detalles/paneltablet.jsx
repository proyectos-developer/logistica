import React from 'react'

import {useLocation} from 'react-router-dom'

import ImagePrincipalTablet from './imageprincipaltablet.jsx'
import HabilidadesTablet from './habilidadestablet.jsx'
import CaracteristicasTablet from './caracteristicastablet.jsx'
import CombinandoServiciosTablet from './combinandoserviciostablet.jsx'
import PreguntasFrecuentesTablet from './preguntasfrecuentestablet.jsx'
import CaracteristicasServicioTablet from './caracteristicasserviciotablet.jsx'

export default function DetallesServiciosTablet({proporcional}) {

    const location = useLocation()

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='position-relative' style={{width: '100%', height: 350 / proporcional}}>
                    <ImagePrincipalTablet proporcional={proporcional}/>
                </div>
                <div style={{width: '100%', height: 'auto', paddingTop: 20 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, marginBottom: 80 / proporcional}}>
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
            <div style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                <HabilidadesTablet proporcional={proporcional}/>
                <CaracteristicasTablet proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <CombinandoServiciosTablet proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
                <PreguntasFrecuentesTablet proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <CaracteristicasServicioTablet proporcional={proporcional}/>
            </div>
        </div>
    )
}
