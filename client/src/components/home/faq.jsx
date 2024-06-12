import React, { useState } from 'react'

import icono_down_white from '../../assets/iconos/icono_arrow_down_white_96.png'
import icono_down_blue from '../../assets/iconos/icono_arrow_down_blue_96.png'

export default function Faq({proporcional}) {

    const [seleccion_pregunta, setSeleccionPregunta] = useState(false)

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='rounded-pill' style={{width: 100 / proporcional, height: 4 / proporcional, background: '#4a9ae9', marginBottom: 30 / proporcional}}/>
            <p className='' 
                style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: '#1c4c96',
                        fontWeight: 600, fontFamily: 'Lato, sans-serif', cursor: 'default', textAlign: 'left'}}>
                FAQ
            </p>
            <div className='d-flex' style={{width: '100%', height: 50 / proporcional, background: '#4a9ae9', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: '90%', heigth: 50 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                fontWeight: 600, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                        ¿Cuántas veces tengo que decirte algunas formas?
                    </p>
                </div>
                <div className='d-flex justify-content-end' style={{width: '90%', heigth: 50 / proporcional}}>
                    <img src={icono_down_white} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 16 / proporcional, marginRight: 0}}/>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                <p className='' 
                    style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                            fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                    Generar progresivamente vinculación total sinérgica a través del capital intelectual cross-media. Equipo de trabajo paralelo con entusiasmo para crear minoristas electrónicos sin iniciativas que cumplan con los estándares. Monetice progresivamente la subcontratación centrada en el cliente con excelentes comunidades.
                </p>
            </div>
            <div className='rounded' style={{width: '100%', height: 'auto', border: '1px solid rgb(139, 139, 139)'}}>
                <div className='d-flex' style={{width: '100%', height: 60 / proporcional, background: seleccion_pregunta === '1' ? '#4a9ae9' : 'transparent', cursor: 'pointer',
                        paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, borderBottom: '1px solid rgb(139, 139, 139)'}} 
                    onMouseOver={() => setSeleccionPregunta('1')} onMouseLeave={() => setSeleccionPregunta('')}>
                    <div className='d-flex justify-content-start' style={{width: '90%', heigth: 60 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: seleccion_pregunta === '1' ? 'white' : '#1c4c96',
                                    fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            ¿Qué tengo que decirte sobre algunos lorem?
                        </p>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: '10%', heigth: 60 / proporcional}}>
                        <img src={seleccion_pregunta === '1' ? icono_down_white : icono_down_blue} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 21 / proporcional, marginRight: 0}}/>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 60 / proporcional, background: seleccion_pregunta === '2' ? '#4a9ae9' : 'transparent', cursor: 'pointer',
                        paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, borderBottom: '1px solid rgb(139, 139, 139)'}} 
                    onMouseOver={() => setSeleccionPregunta('2')} onMouseLeave={() => setSeleccionPregunta('')}>
                    <div className='d-flex justify-content-start' style={{width: '90%', heigth: 60 / proporcional, paddingTop: 5 / proporcional, paddingBottom: 5 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0 / proporcional, color: seleccion_pregunta === '2' ? 'white' : '#1c4c96',
                                    fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            Tengo un problema técnico o de soporte que necesito resolver, ¿a quién le envío un correo electrónico?
                        </p>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: '10%', heigth: 60 / proporcional}}>
                        <img src={seleccion_pregunta === '2' ? icono_down_white : icono_down_blue} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 21 / proporcional, marginRight: 0}}/>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 60 / proporcional, background: seleccion_pregunta === '3' ? '#4a9ae9' : 'transparent', cursor: 'pointer',
                        paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, borderBottom: '1px solid rgb(139, 139, 139)'}} 
                    onMouseOver={() => setSeleccionPregunta('3')} onMouseLeave={() => setSeleccionPregunta('')}>
                    <div className='d-flex justify-content-start' style={{width: '90%', heigth: 60 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: seleccion_pregunta === '3' ? 'white' : '#1c4c96',
                                    fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            ¿Con qué otros servicios eres compatible?
                        </p>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: '10%', heigth: 60 / proporcional}}>
                        <img src={seleccion_pregunta === '3' ? icono_down_white : icono_down_blue} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 21 / proporcional, marginRight: 0}}/>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 60 / proporcional, background: seleccion_pregunta === '4' ? '#4a9ae9' : 'transparent', cursor: 'pointer',
                        paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}} 
                    onMouseOver={() => setSeleccionPregunta('4')} onMouseLeave={() => setSeleccionPregunta('')}>
                    <div className='d-flex justify-content-start' style={{width: '90%', heigth: 60 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: seleccion_pregunta === '4' ? 'white' : '#1c4c96',
                                    fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            ¿Están contratando?
                        </p>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: '10%', heigth: 60 / proporcional}}>
                        <img src={seleccion_pregunta === '4' ? icono_down_white : icono_down_blue} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 21 / proporcional, marginRight: 0}}/>
                    </div>
                </div>
            </div>
        </div>
      )
}
