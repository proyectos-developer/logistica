import React from 'react'

import ImagePrincipalCell from './imageprincipalcell.jsx'
import CalidadRendimientoCell from './calidadrendimientocell.jsx'
import DetallesCell from './detallescell.jsx'
import ContactaranosCell from './contactarnoscell.jsx'
import SolucionesCell from './solucionescell.jsx'
import CaracteristicasCell from './caracteristicascell.jsx'

export default function ServiciosPanelCell({proporcional}) {

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
                                        fontWeight: 200, fontFamily: 'Roboto, sans-serif', cursor: 'pointer', marginRight: 10 / proporcional}}>
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
            <div style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                <CalidadRendimientoCell proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <DetallesCell proporcional={proporcional}/>
                <ContactaranosCell proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
                <SolucionesCell proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <CaracteristicasCell proporcional={proporcional}/>
            </div>
        </div>
    )
}
