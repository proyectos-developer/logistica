import React from 'react'

import ImagePrincipalTablet from './imageprincipaltablet.jsx'
import NosotrosTablet from './nosotrostablet.jsx'
import FiltrosTablet from './filtrostablet.jsx'
import NuestrosSociosTablet from './nuestrossociostablet.jsx'
import PreguntasFrecuentesTablet from './preguntasfrecuentestablet.jsx'
import ContactarnosTablet from './contactarnostablet.jsx'

export default function NosotrosPanelTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 350 / proporcional}}>
                <ImagePrincipalTablet proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto', paddingTop: 20 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
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
                            Sobre nosotros
                        </p>
                    </div>
                </div>
            </div>
            <div className='' style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                <NosotrosTablet proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                <NuestrosSociosTablet proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, paddingBottom: 50 / proporcional}}>
                <PreguntasFrecuentesTablet proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 200 / proporcional, background: '#4a9ae9', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                <ContactarnosTablet proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <FiltrosTablet proporcional={proporcional}/>
            </div>
        </div>
    )
}
