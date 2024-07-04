import React from 'react'

import ImagePrincipal from './imageprincipal.jsx'
import CalidadRendimiento from './calidadrendimiento.jsx'
import Detalles from './detalles.jsx'
import Contactaranos from './contactarnos.jsx'
import Soluciones from './soluciones.jsx'
import Caracteristicas from './caracteristicas.jsx'

export default function ServiciosPanel({proporcional}) {

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
                                Nuestros servicios
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', paddingLeft: 200 / proporcional, paddingRight: 200 / proporcional}}>
                <CalidadRendimiento proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <Detalles proporcional={proporcional}/>
                <Contactaranos proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto', paddingLeft: 200 / proporcional, paddingRight: 200 / proporcional, paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional}}>
                <Soluciones proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <Caracteristicas proporcional={proporcional}/>
            </div>
        </div>
    )
}
