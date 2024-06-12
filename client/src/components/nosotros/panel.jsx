import React from 'react'

import ImagePrincipal from './imageprincipal.jsx'
import Nosotros from './nosotros.jsx'
import Filtros from './filtros.jsx'
import NuestrosSocios from './nuestrossocios.jsx'
import PreguntasFrecuentes from './preguntasfrecuentes.jsx'
import Contactarnos from './contactarnos.jsx'

export default function NosotrosPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='position-relative' style={{width: '100%', height: 350 / proporcional}}>
                    <ImagePrincipal proporcional={proporcional}/>
                </div>
                <div style={{width: '100%', height: 'auto', paddingTop: 20 / proporcional, paddingLeft: 200 / proporcional, paddingRight: 200 / proporcional}}>
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
                    <div className='' style={{width: '100%', height: 'auto', paddingTop: 100 / proporcional}}>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                            <div style={{width: '59%', height: 'auto'}}>
                                <Nosotros proporcional={proporcional}/>
                            </div>
                            <div style={{width: '29%', height: 'auto'}}>
                                <Filtros proporcional={proporcional}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', paddingLeft: 200 / proporcional, paddingRight: 200 / proporcional}}>
                <NuestrosSocios proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto', paddingLeft: 200 / proporcional, paddingRight: 200 / proporcional, paddingBottom: 50 / proporcional}}>
                <PreguntasFrecuentes proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 200 / proporcional, background: '#4a9ae9', paddingLeft: 200 / proporcional, paddingRight: 200 / proporcional}}>
                <Contactarnos proporcional={proporcional}/>
            </div>
        </div>
    )
}
