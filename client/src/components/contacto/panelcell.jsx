import React from 'react'

import ImagePrincipalCell from './imageprincipalcell.jsx'
import ContenidoCell from './contenidocell.jsx'
import FormularioCell from './formulariocell.jsx'
import MapaUbicacionCell from '../home/mapubicacioncell.jsx'

export default function ContactanosCell({proporcional}) {

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
                                Contácanos
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, marginBottom: 60 / proporcional}}>
                <div style={{width: '100%', height: 'auto'}}>
                    <ContenidoCell proporcional={proporcional}/>
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <FormularioCell proporcional={proporcional}/>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <MapaUbicacionCell proporcional={proporcional}/>
            </div>
        </div>
    )
}
