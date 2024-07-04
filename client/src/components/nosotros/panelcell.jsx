import React from 'react'

import ImagePrincipalCell from './imageprincipalcell.jsx'
import NosotrosCell from './nosotroscell.jsx'
import FiltrosCell from './filtroscell.jsx'
import NuestrosSociosCell from './nuestrossocioscell.jsx'
import PreguntasFrecuentesCell from './preguntasfrecuentescell.jsx'
import ContactarnosCell from './contactarnoscell.jsx'

export default function NosotrosPanelCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 350 / proporcional}}>
                <ImagePrincipalCell proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto', paddingTop: 20 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
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
            <div className='' style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                <NosotrosCell proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                <NuestrosSociosCell proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, paddingBottom: 50 / proporcional}}>
                <PreguntasFrecuentesCell proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto', background: '#4a9ae9', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                <ContactarnosCell proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <FiltrosCell proporcional={proporcional}/>
            </div>
        </div>
    )
}
