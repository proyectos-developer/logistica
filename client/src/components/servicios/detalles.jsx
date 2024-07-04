import React, { useState } from 'react'

import icono_camion_blue from '../../assets/iconos/icono_camion_carga_blue_96.png'
import icono_almacen_blue from '../../assets/iconos/icono_almacen_carga_blue_96.png'
import icono_avion_blue from '../../assets/iconos/icono_avion_carga_blue_96.png'
import icono_buque_blue from '../../assets/iconos/icono_buque_carga_blue_96.png'

import icono_camion_white from '../../assets/iconos/icono_camion_carga_white_96.png'
import icono_almacen_white from '../../assets/iconos/icono_almacen_carga_white_96.png'
import icono_avion_white from '../../assets/iconos/icono_avion_carga_white_96.png'
import icono_buque_white from '../../assets/iconos/icono_buque_carga_white_96.png'

import { useNavigate } from 'react-router-dom'

export default function Detalles({proporcional}) {

    const navigate = useNavigate()

    const [seleccion_servicio, setSeleccionServicio] = useState('')

    return (
        <div className='' style={{width: '100%', height: 'auto', background: '#1c4c96'}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 200 / proporcional, paddingRight: 200 / proporcional, paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 35 / proporcional}}>
                    <div style={{width: '46%', height: 'auto'}}>
                       <img src={seleccion_servicio === 'aerea' ? icono_avion_white : icono_avion_blue} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 50 / proporcional, cursor: 'pointer'}}
                            onClick={() => navigate ('/nuestros-servicios/carga-aerea')}
                            onMouseOver={() => setSeleccionServicio('aerea')} onMouseLeave={() => setSeleccionServicio('')}/> 
                       <div style={{width: '100%', height: 'auto'}}>
                            <p className='' 
                                style={{fontSize: 20 / proporcional, lineHeight: `${36 / proporcional}px`, marginBottom: 24 / proporcional, color: 'white',
                                        fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                CARGA AÉREA
                            </p>
                            <p className='' 
                                style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 26 / proporcional, color: 'white',
                                        fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                Estableciendo el estándar en el transporte aéreo. Nuestra red global tiene el poder de ayudar a las empresas a crecer, basándose en años de experiencia e influenciada por las necesidades cambiantes de nuestros clientes. Nuestros especialistas en carreteras garantizarán la excelencia operativa y soluciones rentables.
                            </p>
                       </div>
                    </div>
                    <div style={{width: '46%', height: 'auto'}}>
                       <img src={seleccion_servicio === 'maritima' ? icono_buque_white : icono_buque_blue} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 50 / proporcional, cursor: 'pointer'}}
                            onClick={() => navigate ('/nuestros-servicios/transporte-maritimo')}
                            onMouseOver={() => setSeleccionServicio('maritima')} onMouseLeave={() => setSeleccionServicio('')}/> 
                       <div style={{width: '100%', height: 'auto'}}>
                            <p className='' 
                                style={{fontSize: 20 / proporcional, lineHeight: `${36 / proporcional}px`, marginBottom: 24 / proporcional, color: 'white',
                                        fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                TRANSPORTE MARÍTIMO
                            </p>
                            <p className='' 
                                style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 26 / proporcional, color: 'white',
                                        fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                TransCargo is the world’s fourth largest provider of ocean freight services. In 2013, TransCargo expedited nearly 1.5 million TEUs via ocean freight. The company’s relationship with customers is moving away from purely transactional business to value-added propositions.
                            </p>
                       </div>
                    </div>
                </div>

                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '46%', height: 'auto'}}>
                       <img src={seleccion_servicio === 'carretera' ? icono_camion_white : icono_camion_blue} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 50 / proporcional, cursor: 'pointer'}}
                            onClick={() => navigate ('/nuestros-servicios/transporte-carretera')}
                            onMouseOver={() => setSeleccionServicio('carretera')} onMouseLeave={() => setSeleccionServicio('')}/> 
                       <div style={{width: '100%', height: 'auto'}}>
                            <p className='' 
                                style={{fontSize: 20 / proporcional, lineHeight: `${36 / proporcional}px`, marginBottom: 24 / proporcional, color: 'white',
                                        fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                TRANSPORTE POR CARRETERA
                            </p>
                            <p className='' 
                                style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 26 / proporcional, color: 'white',
                                        fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                La red mundial de TransCargo está bien posicionada y calificada para ayudar a su empresa a desarrollar programas nacionales y transfronterizos eficientes y personalizados para la distribución de sus mercancías. Nuestros especialistas en carreteras garantizarán la excelencia operativa y soluciones rentables que satisfagan sus necesidades en términos de tiempo de tránsito.
                            </p>
                       </div>
                    </div>
                    <div style={{width: '46%', height: 'auto'}}>
                       <img src={seleccion_servicio === 'almacen' ? icono_almacen_white : icono_almacen_blue} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 50 / proporcional, cursor: 'pointer'}}
                            onClick={() => navigate ('/nuestros-servicios/almacen')}
                            onMouseOver={() => setSeleccionServicio('almacen')} onMouseLeave={() => setSeleccionServicio('')}/> 
                       <div style={{width: '100%', height: 'auto'}}>
                            <p className='' 
                                style={{fontSize: 20 / proporcional, lineHeight: `${36 / proporcional}px`, marginBottom: 24 / proporcional, color: 'white',
                                        fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                ALMACENAMIENTO
                            </p>
                            <p className='' 
                                style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 26 / proporcional, color: 'white',
                                        fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                Nuestro modelo operativo con pocos activos nos permite elegir los subcontratistas calificados correctos en función de los diversos requisitos de los clientes, con énfasis en el cumplimiento, la seguridad, el profesionalismo y el liderazgo ambiental.
                            </p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
