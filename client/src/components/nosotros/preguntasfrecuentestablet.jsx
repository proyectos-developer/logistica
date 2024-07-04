import React, { useState } from 'react'

import arrow_down from '../../assets/iconos/icono_arrow_down_white_96.png'
import icono_right_white from '../../assets/iconos/icono_arrow_right_white_96.png'
import icono_right_dark from '../../assets/iconos/icono_arrow_right_dark_96.png'

export default function PregunasFrecuentesTablet({proporcional}) {

    const [seleccion_pregunta, setSeleccionPregunta] = useState('')
    const [mouse_pregunta, setMousePregunta] = useState('')

    const [boton_preguntar, setBotonPreguntar] = useState(false)

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: 100 / proporcional, background: '#4a9ae9', height: 4 / proporcional, marginBottom: 50 / proporcional}}/>
            <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <p className='' 
                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(24, 54, 80)',
                            fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                    PREGUNTAS FRECUENTES
                </p>
                <div className='' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex' style={{width: '100%', height: 'auto', background: (seleccion_pregunta === '1' || mouse_pregunta === '1') ? '#4a9ae9' : 'white', 
                                cursor: 'pointer',  padding: 20 / proporcional, cursor: 'pointer', border: (seleccion_pregunta === '1' || mouse_pregunta === '1') ? null : '1px solid #e6e6e6'}} 
                                onClick={() => seleccion_pregunta !== '1' ? setSeleccionPregunta('1') : (seleccion_pregunta === '1' || mouse_pregunta === '1') ? setSeleccionPregunta('') : null}
                                onMouseOver={() => setMousePregunta('1')} onMouseLeave={() => setMousePregunta('')}>
                            <div className='d-flex justify-content-start' style={{width: '90%', height: 'auto'}}>
                                <p className='' 
                                    style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, 
                                            color: (seleccion_pregunta === '1' || mouse_pregunta === '1') ? 'white' : 'black',
                                            fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                    ¿Cuántas veces tengo que decirte algunas formas diferentes?
                                </p>
                            </div>
                            <div className='d-flex justify-content-end' style={{width: '10%', height: 'auto'}}>
                                <img src={arrow_down} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 11 / proporcional}}/>
                            </div>
                        </div>
                        {
                            seleccion_pregunta === '1' ? (
                                <div style={{width: '100%', height: 'auto', padding: 50 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                                                fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                        Generar progresivamente vinculación total sinérgica a través del capital intelectual cross-media. Equipo de trabajo paralelo con entusiasmo para crear minoristas electrónicos sin iniciativas que cumplan con los estándares. Monetice progresivamente la subcontratación centrada en el cliente con excelentes comunidades.
                                    </p>
                                </div>
                            ) : null
                        }
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex' style={{width: '100%', height: 'auto', background: (seleccion_pregunta === '2' || mouse_pregunta === '2') ? '#4a9ae9' : 'white', 
                                cursor: 'pointer',  padding: 20 / proporcional, cursor: 'pointer', border: (seleccion_pregunta === '2' || mouse_pregunta === '2') ? null : '1px solid #e6e6e6'}} 
                                onClick={() => seleccion_pregunta !== '2' ? setSeleccionPregunta('2') : (seleccion_pregunta === '2' || mouse_pregunta === '2') ? setSeleccionPregunta('') : null}
                                onMouseOver={() => setMousePregunta('2')} onMouseLeave={() => setMousePregunta('')}>
                            <div className='d-flex justify-content-start' style={{width: '90%', height: 'auto'}}>
                                <p className='' 
                                    style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, 
                                            color: (seleccion_pregunta === '2' || mouse_pregunta === '2') ? 'white' : 'black',
                                            fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                    ¿Que es lo que tengo que decirte algunas lorem?
                                </p>
                            </div>
                            <div className='d-flex justify-content-end' style={{width: '10%', height: 'auto'}}>
                                <img src={arrow_down} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 11 / proporcional}}/>
                            </div>
                        </div>
                        {
                            seleccion_pregunta === '2' ? (
                                <div style={{width: '100%', height: 'auto', padding: 50 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                                                fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                        Progressively generate synergistic total linkage through cross-media intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client-centric outsourcing with excellent communities.
                                    </p>
                                </div>
                            ) : null
                        }
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex' style={{width: '100%', height: 'auto', background: (seleccion_pregunta === '3' || mouse_pregunta === '3') ? '#4a9ae9' : 'white', 
                                cursor: 'pointer',  padding: 20 / proporcional, cursor: 'pointer', border: (seleccion_pregunta === '3' || mouse_pregunta === '3') ? null : '1px solid #e6e6e6'}} 
                                onClick={() => seleccion_pregunta !== '3' ? setSeleccionPregunta('3') : (seleccion_pregunta === '3' || mouse_pregunta === '3') ? setSeleccionPregunta('') : null}
                                onMouseOver={() => setMousePregunta('3')} onMouseLeave={() => setMousePregunta('')}>
                            <div className='d-flex justify-content-start' style={{width: '90%', height: 'auto'}}>
                                <p className='' 
                                    style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, 
                                            color: (seleccion_pregunta === '3' || mouse_pregunta === '3') ? 'white' : 'black',
                                            fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                    Tengo un problema técnico o de soporte que necesito resolver, ¿a quién le envío un correo electrónico?
                                </p>
                            </div>
                            <div className='d-flex justify-content-end' style={{width: '10%', height: 'auto'}}>
                                <img src={arrow_down} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 11 / proporcional}}/>
                            </div>
                        </div>
                        {
                            seleccion_pregunta === '3' ? (
                                <div style={{width: '100%', height: 'auto', padding: 50 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                                                fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                        Generar progresivamente vinculación total sinérgica a través del capital intelectual cross-media. Equipo de trabajo paralelo con entusiasmo para crear minoristas electrónicos sin iniciativas que cumplan con los estándares. Monetice progresivamente la subcontratación centrada en el cliente con excelentes comunidades.
                                    </p>
                                </div>
                            ) : null
                        }
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex' style={{width: '100%', height: 'auto', background: (seleccion_pregunta === '4' || mouse_pregunta === '4') ? '#4a9ae9' : 'white', 
                                cursor: 'pointer',  padding: 20 / proporcional, cursor: 'pointer', border: (seleccion_pregunta === '4' || mouse_pregunta === '4') ? null : '1px solid #e6e6e6'}} 
                                onClick={() => seleccion_pregunta !== '4' ? setSeleccionPregunta('4') : (seleccion_pregunta === '4' || mouse_pregunta === '4') ? setSeleccionPregunta('') : null}
                                onMouseOver={() => setMousePregunta('4')} onMouseLeave={() => setMousePregunta('')}>
                            <div className='d-flex justify-content-start' style={{width: '90%', height: 'auto'}}>
                                <p className='' 
                                    style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, 
                                            color: (seleccion_pregunta === '4' || mouse_pregunta === '4') ? 'white' : 'black',
                                            fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                    ¿Con qué otros servicios eres compatible?
                                </p>
                            </div>
                            <div className='d-flex justify-content-end' style={{width: '10%', height: 'auto'}}>
                                <img src={arrow_down} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 11 / proporcional}}/>
                            </div>
                        </div>
                        {
                            seleccion_pregunta === '4' ? (
                                <div style={{width: '100%', height: 'auto', padding: 50 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                                                fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                        Progressively generate synergistic total linkage through cross-media intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client-centric outsourcing with excellent communities.
                                    </p>
                                </div>
                            ) : null
                        }
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex' style={{width: '100%', height: 'auto', background: (seleccion_pregunta === '5' || mouse_pregunta === '5') ? '#4a9ae9' : 'white', 
                                cursor: 'pointer',  padding: 20 / proporcional, cursor: 'pointer', border: (seleccion_pregunta === '5' || mouse_pregunta === '5') ? null : '1px solid #e6e6e6'}} 
                                onClick={() => seleccion_pregunta !== '5' ? setSeleccionPregunta('5') : (seleccion_pregunta === '5' || mouse_pregunta === '5') ? setSeleccionPregunta('') : null}
                                onMouseOver={() => setMousePregunta('5')} onMouseLeave={() => setMousePregunta('')}>
                            <div className='d-flex justify-content-start' style={{width: '90%', height: 'auto'}}>
                                <p className='' 
                                    style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, 
                                            color: (seleccion_pregunta === '5' || mouse_pregunta === '5') ? 'white' : 'black',
                                            fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                    ¿Estas contratando?
                                </p>
                            </div>
                            <div className='d-flex justify-content-end' style={{width: '10%', height: 'auto'}}>
                                <img src={arrow_down} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 11 / proporcional}}/>
                            </div>
                        </div>
                        {
                            seleccion_pregunta === '5' ? (
                                <div style={{width: '100%', height: 'auto', padding: 50 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                                                fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                        Generar progresivamente vinculación total sinérgica a través del capital intelectual cross-media. Equipo de trabajo paralelo con entusiasmo para crear minoristas electrónicos sin iniciativas que cumplan con los estándares. Monetice progresivamente la subcontratación centrada en el cliente con excelentes comunidades.
                                    </p>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', marginBottom: 100 / proporcional}}>
                <div className='d-flex' style={{width: '100%', height: 50 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(24, 54, 80)',
                                fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default', marginRight: 20 / proporcional}}>
                        ¿Tiene preguntas aún?
                    </p>
                    <div className='d-flex justify-content-center rounded-pill' style={{width: 250 / proporcional, height: 50 / proporcional, border: '1px solid #4a9ae9',
                            background: boton_preguntar ? '#4a9ae9' : 'transparent', cursor: 'pointer'}}
                        onMouseOver={() => setBotonPreguntar(true)} onMouseLeave={() => setBotonPreguntar(false)}>
                        <div style={{width: 'auto', height: 'auto'}}>
                            <p className='' 
                                style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0 / proporcional, color: boton_preguntar ? 'white' : 'black',
                                        fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default', marginRight: 20 / proporcional}}>
                                Pregunte ahora
                            </p>
                        </div>
                        <img src={boton_preguntar ? icono_right_white : icono_right_dark} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 16 / proporcional,
                            marginLeft: 10 / proporcional, marginRight: 0}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
