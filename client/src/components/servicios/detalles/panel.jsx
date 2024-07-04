import React from 'react'

import {useLocation} from 'react-router-dom'

import ImagePrincipal from './imageprincipal.jsx'
import Habilidades from './habilidades.jsx'
import Caracteristicas from './caracteristicas.jsx'
import CombinandoServicios from './combinandoservicios.jsx'
import PreguntasFrecuentes from './preguntasfrecuentes.jsx'
import CaracteristicasServicio from './caracteristicasservicio.jsx'

export default function DetallesServicios({proporcional}) {

    const location = useLocation()

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='position-relative' style={{width: '100%', height: 350 / proporcional}}>
                    <ImagePrincipal proporcional={proporcional}/>
                </div>
                <div style={{width: '100%', height: 'auto', paddingTop: 20 / proporcional, paddingLeft: 200 / proporcional, paddingRight: 200 / proporcional, marginBottom: 80 / proporcional}}>
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
            <div style={{width: '100%', height: 'auto', paddingLeft: 200 / proporcional, paddingRight: 200 / proporcional}}>
                <Habilidades proporcional={proporcional}/>
                <Caracteristicas proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <CombinandoServicios proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto', paddingLeft: 200 / proporcional, paddingRight: 200 / proporcional, paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional}}>
                <PreguntasFrecuentes proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <CaracteristicasServicio proporcional={proporcional}/>
            </div>
        </div>
    )
}
