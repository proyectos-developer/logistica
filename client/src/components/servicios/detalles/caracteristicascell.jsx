import React from 'react'

import image_servicios_01 from '../../../assets/images/image_servicios_475_00.png'
import image_servicios_02 from '../../../assets/images/image_servicios_475_01.png'
import image_servicios_03 from '../../../assets/images/image_servicios_475_02.png'

import icono_dot from '../../../assets/iconos/icono_dot_list_blue_96.png'

export default function CaracteristicasCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <div style={{width: '90%', height: 'auto', border: '1px solid rgb(230, 230, 230)'}}>
                    <img src={image_servicios_01} style={{width: '100%', height: 317 / proporcional}}/>
                    <div style={{width: '100%', height: 'auto', padding: 30 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, fontWeight: 300, lineHeight: `${16 / proporcional}px`, color: 'rgb(24, 54, 80)', marginBottom: 19 / proporcional}}>
                            TERRENO LOGÍSTICO EN ASIA PACÍFICO
                        </p>
                        <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_dot} style={{width: 26 / proporcional, height: 26 / proporcional, padding: 6 / proporcional}}/>
                            <p style={{fontSize: 13 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 0 / proporcional}}>
                                Operando en todos los principales países y fronteras.
                            </p>
                        </div>
                        <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_dot} style={{width: 26 / proporcional, height: 26 / proporcional, padding: 6 / proporcional}}/>
                            <p style={{fontSize: 13 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 0 / proporcional}}>
                                Amplios servicios que incluyen: transporte de línea, recogida y entrega (PUD), entrega a domicilio, transporte de leche, transfronterizo, mensajería y ferrocarril.
                            </p>
                        </div>
                        <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_dot} style={{width: 26 / proporcional, height: 26 / proporcional, padding: 6 / proporcional}}/>
                            <p style={{fontSize: 13 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 0 / proporcional}}>
                                Servicio transfronterizo de Singapur a Shanghai
                            </p>
                        </div>
                        <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_dot} style={{width: 26 / proporcional, height: 26 / proporcional, padding: 6 / proporcional}}/>
                            <p style={{fontSize: 13 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 0 / proporcional}}>
                                Servicio ferroviario de China a Europa: servicio innovador que equilibra velocidad y costo; más rápido que Oceanfreight, más barato que Airfreight
                            </p>
                        </div>
                        <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_dot} style={{width: 26 / proporcional, height: 26 / proporcional, padding: 6 / proporcional}}/>
                            <p style={{fontSize: 13 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 0 / proporcional}}>
                                Linehaul China: 700 camiones al día, 6,25 millones de palés movidos al año
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <div style={{width: '90%', height: 'auto', border: '1px solid rgb(230, 230, 230)'}}>
                    <img src={image_servicios_02} style={{width: '100%', height: 317 / proporcional}}/>
                    <div style={{width: '100%', height: 'auto', padding: 30 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, fontWeight: 300, lineHeight: `${16 / proporcional}px`, color: 'rgb(24, 54, 80)', marginBottom: 19 / proporcional}}>
                            TRANSPORTE POR EUROPA
                        </p>
                        <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_dot} style={{width: 26 / proporcional, height: 26 / proporcional, padding: 6 / proporcional}}/>
                            <p style={{fontSize: 13 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 0 / proporcional}}>
                                Capacidades multisectoriales y multimodo
                            </p>
                        </div>
                        <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_dot} style={{width: 26 / proporcional, height: 26 / proporcional, padding: 6 / proporcional}}/>
                            <p style={{fontSize: 13 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 0 / proporcional}}>
                                Trabajar con actores paneuropeos y especialistas especializados
                            </p>
                        </div>
                        <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_dot} style={{width: 26 / proporcional, height: 26 / proporcional, padding: 6 / proporcional}}/>
                            <p style={{fontSize: 13 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 0 / proporcional}}>
                                Control central y monitorización de red a través de la Torre de Control
                            </p>
                        </div>
                        <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_dot} style={{width: 26 / proporcional, height: 26 / proporcional, padding: 6 / proporcional}}/>
                            <p style={{fontSize: 13 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 0 / proporcional}}>
                                450.000 toneladas gestionadas al año
                            </p>
                        </div>
                        <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_dot} style={{width: 26 / proporcional, height: 26 / proporcional, padding: 6 / proporcional}}/>
                            <p style={{fontSize: 13 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 0 / proporcional}}>
                                40.000 envíos al año
                            </p>
                        </div>
                        <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_dot} style={{width: 26 / proporcional, height: 26 / proporcional, padding: 6 / proporcional}}/>
                            <p style={{fontSize: 13 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 0 / proporcional}}>
                                200 socios de transporte
                            </p>
                        </div>
                        <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_dot} style={{width: 26 / proporcional, height: 26 / proporcional, padding: 6 / proporcional}}/>
                            <p style={{fontSize: 13 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 0 / proporcional}}>
                                Grupaje/LTL/FTL
                            </p>
                        </div>
                        <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_dot} style={{width: 26 / proporcional, height: 26 / proporcional, padding: 6 / proporcional}}/>
                            <p style={{fontSize: 13 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 0 / proporcional}}>
                                En Turquía, Logistics gestiona más de 7.700 viajes FTL al mes
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '90%', height: 'auto', border: '1px solid rgb(230, 230, 230)'}}>
                    <img src={image_servicios_03} style={{width: '100%', height: 317 / proporcional}}/>
                    <div style={{width: '100%', height: 'auto', padding: 30 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, fontWeight: 300, lineHeight: `${16 / proporcional}px`, color: 'rgb(24, 54, 80)', marginBottom: 19 / proporcional}}>
                            TERRENO LOGÍSTICO EN NORTEAMÉRICA
                        </p>
                        <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_dot} style={{width: 26 / proporcional, height: 26 / proporcional, padding: 6 / proporcional}}/>
                            <p style={{fontSize: 13 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 0 / proporcional}}>
                                Admite la red nacional de EE. UU. a través de servicios LTL/FTL
                            </p>
                        </div>
                        <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_dot} style={{width: 26 / proporcional, height: 26 / proporcional, padding: 6 / proporcional}}/>
                            <p style={{fontSize: 13 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 0 / proporcional}}>
                                Más de 70.000 segmentos de transporte programados al año   
                            </p>
                        </div>
                        <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_dot} style={{width: 26 / proporcional, height: 26 / proporcional, padding: 6 / proporcional}}/>
                            <p style={{fontSize: 13 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 0 / proporcional}}>
                                Siete hubs y 62 estaciones
                            </p>
                        </div>
                        <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_dot} style={{width: 26 / proporcional, height: 26 / proporcional, padding: 6 / proporcional}}/>
                            <p style={{fontSize: 13 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 0 / proporcional}}>
                                7,5 millones de millas al mes
                            </p>
                        </div>
                        <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 22 / proporcional}}>
                            <img src={icono_dot} style={{width: 26 / proporcional, height: 26 / proporcional, padding: 6 / proporcional}}/>
                            <p style={{fontSize: 13 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 0 / proporcional}}>
                                8.000 cargas al mes
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 13 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 0 / proporcional}}>
                                Para obtener más información sobre nuestras operaciones de transporte terrestre en América del Norte y cómo podemos respaldar su negocio, visite <br/>
                                    <a href='https://developer-ideas.com' style={{color: 'rgb(52, 204, 255)', textDecoration: 'none', cursor: 'pointer'}} target='_blank'>www.developer-ideas.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
