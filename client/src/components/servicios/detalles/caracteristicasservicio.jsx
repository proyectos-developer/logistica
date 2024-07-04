import React from 'react'

import icono_safe from '../../../assets/iconos/icono_safe_security_white_96.png'
import icono_fast from '../../../assets/iconos/icono_fast_delivery_white_96.png'
import icono_support from '../../../assets/iconos/icono_support_white_96.png'

export default function CaracteristicasServicio({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', background: 'rgb(52, 204, 255)'}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '33.33%', height: 'auto', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional, paddingLeft: 200 / proporcional, paddingRight: 100 / proporcional,
                        background: '#34ccff'}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 75 / proporcional, marginBottom: 33 / proporcional}}>
                        <img src={icono_safe} style={{width: 75 / proporcional, height: 75 / proporcional}}/>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <p className='' 
                            style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 24 / proporcional, color: 'white',
                                    fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            SEGURO & SEGURO
                        </p>
                        <p className='' 
                            style={{fontSize: 14 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                    fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            Usted se beneficiará de nuestra experiencia en la entrega de soluciones efectivas a las complejas cadenas de suministro globales de algunas de las corporaciones más grandes del mundo.
                        </p>
                    </div>
                </div>
                <div style={{width: '33.33%', height: 'auto', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional, paddingLeft: 100 / proporcional, paddingRight: 100 / proporcional,
                        background: '#2fb7e5'}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 75 / proporcional, marginBottom: 33 / proporcional}}>
                        <img src={icono_fast} style={{width: 75 / proporcional, height: 75 / proporcional}}/>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <p className='' 
                            style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 24 / proporcional, color: 'white',
                                    fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            ENTREGA RÁPIDA
                        </p>
                        <p className='' 
                            style={{fontSize: 14 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                    fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            Usted se beneficia de cada innovación, ya sea que implique una simple extensión de nuestros productos de transporte aéreo y marítimo o un desarrollo en el almacenamiento.
                        </p>
                    </div>
                </div>
                <div style={{width: '33.33%', height: 'auto', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional, paddingLeft: 100 / proporcional, paddingRight: 200 / proporcional,
                        background: '#2aa3cc'}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 75 / proporcional, marginBottom: 33 / proporcional}}>
                        <img src={icono_support} style={{width: 75 / proporcional, height: 75 / proporcional}}/>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <p className='' 
                            style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 24 / proporcional, color: 'white',
                                    fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            SOPORTE 24/7
                        </p>
                        <p className='' 
                            style={{fontSize: 14 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                    fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            Todo lo cual explica por qué encontrará el excelente equipo de soporte de TransCargo listo para aplicar su pasión por las soluciones para respaldar su negocio.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
