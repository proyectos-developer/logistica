import React from 'react'

import ImagePrincipalTablet from './imageprincipaltablet.jsx'
import CalidadRendimientoTablet from './calidadrendimientotablet.jsx'
import DetallesTablet from './detallestablet.jsx'
import ContactaranosTablet from './contactarnostablet.jsx'
import SolucionesTablet from './solucionestablet.jsx'
import CaracteristicasTablet from './caracteristicastablet.jsx'

export default function ServiciosPanelTablet({proporcional}) {

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
                                Nuestros servicios
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                <CalidadRendimientoTablet proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <DetallesTablet proporcional={proporcional}/>
                <ContactaranosTablet proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
                <SolucionesTablet proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <CaracteristicasTablet proporcional={proporcional}/>
            </div>
        </div>
    )
}
