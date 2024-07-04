import React from 'react'

import icono_empaque from '../../assets/iconos/icono_empaque_blue_96.png'
import icono_almacenamiento from '../../assets/iconos/icono_almacenamiento_blue_96.png'
import icono_transporte from '../../assets/iconos/icono_transporte_blue_96.png'
import icono_logistico from '../../assets/iconos/icono_logistico_blue_96.png'

export default function EspecialesTablet({proporcional}) {
        
    return (
        <div className='' style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 20 / proporcional,
                paddingRight: 20 / proporcional
        }}>
            <div style={{width: 100 / proporcional, height: 4 / proporcional, background: '#4a9ae9', marginBottom: 50 / proporcional}}/>
            <div style={{width: '100%', height: 40 / proporcional, marginBottom: 50 / proporcional}}>
                <p className='' 
                    style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(24, 54, 80)',
                            fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default', textAlign: 'left'}}>
                    ¿Qué nos hace especiales?
                </p>
            </div>
            <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <p className='' 
                    style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                            fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                    Más de 42.000 empleados dedicados, que trabajan en 17 grupos regionales en todo el mundo, brindan excelencia operativa.
                </p>
            </div>
            <div className='d-flex justify-cotent-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <div className='d-flex' style={{width: '90%', height: 72 / proporcional}}>
                    <img src={icono_empaque} style={{width: 72 / proporcional, height: 72 / proporcional, marginRight: 10 / proporcional}}/>
                    <p className='' 
                        style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(24, 54, 80)',
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left', marginTop: 6 / proporcional,
                                marginBottom: 6 / proporcional}}>
                        EMBALAJE Y <br/> ALMACENAMIENTO
                    </p>
                </div>
            </div>
            <div className='d-flex justify-cotent-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <div className='d-flex' style={{width: '90%', height: 72 / proporcional}}>
                    <img src={icono_almacenamiento} style={{width: 72 / proporcional, height: 72 / proporcional, marginRight: 10 / proporcional}}/>
                    <p className='' 
                        style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(24, 54, 80)',
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left', marginTop: 6 / proporcional,
                                marginBottom: 6 / proporcional}}>
                        SERVICIO DE <br/> ALMACENAMIENTO
                    </p>
                </div>
            </div>
            <div className='d-flex justify-cotent-center' style={{width: '100%', height: 'auto'}}>
                <div className='d-flex' style={{width: '90%', height: 72 / proporcional}}>
                    <img src={icono_transporte} style={{width: 72 / proporcional, height: 72 / proporcional, marginRight: 10 / proporcional}}/>
                    <p className='' 
                        style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(24, 54, 80)',
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left', marginTop: 6 / proporcional,
                                marginBottom: 6 / proporcional}}>
                        TRANSPORTE <br/> TERRESTRE
                    </p>
                </div>
            </div>
            <div className='d-flex justify-cotent-center' style={{width: '100%', height: 'auto'}}>
                <div className='d-flex' style={{width: '90%', height: 72 / proporcional}}>
                    <img src={icono_logistico} style={{width: 72 / proporcional, height: 72 / proporcional, marginRight: 10 / proporcional}}/>
                    <p className='' 
                        style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(24, 54, 80)',
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left', marginTop: 6 / proporcional,
                                marginBottom: 6 / proporcional}}>
                        SERVICIO <br/> LOGÍSTICO
                    </p>
                </div>
            </div>
        </div>
    )
}
