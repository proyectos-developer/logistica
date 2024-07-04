import React from 'react'

import image_00 from '../../assets/images/image_nosotros_350_00.png'
import image_01 from '../../assets/images/image_nosotros_350_01.png'
import image_02 from '../../assets/images/image_nosotros_350_02.png'

import icono_comillas from '../../assets/iconos/icono_comillas_empty_blue_96.png'
import icono_dot_white from '../../assets/iconos/icono_dot_white_96.png'
import icono_circle_blue from '../../assets/iconos/icono_circle_blue_96.png'

import icono_check from '../../assets/iconos/icono_check_nosotros_blue_96.png'

export default function NosotrosTalet({proporcional}) {
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 350 / proporcional, background: '#fbfbfb', marginBottom: 100 / proporcional}}>
                <div id='carouselnosotrosmain' className='carousel slide' data-bs-ride='carousel'>
                    <div className='carousel-item active' style={{width: '100%', height: 350 / proporcional, background: '#fbfbfb'}} data-bs-interval='3000'>
                        <div className='position-relative' style={{width: '100%', height: 350 / proporcional}}>
                            <div className='d-flex' style={{width: '60%', height: 350 / proporcional, padding: 50 / proporcional}}>
                                <img className='rounded-circle' src={icono_comillas} 
                                    style={{width: 64 / proporcional, height: 64 / proporcional, padding: 16 / proporcional, border: '1px solid #4a9ae9', marginRight: 20 / proporcional}}/>
                                <div style={{width: '100%', height: 'auto', marginTop: 25 / proporcional, marginBottom: 0 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(139, 139, 139)',
                                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                                        ¡Seguimos siendo profesionales y pragmáticos y encontramos las mejores soluciones!
                                    </p>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                                        JONATHAN BRIGGS
                                    </p>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(139, 139, 139)',
                                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                                        Founder & CEO
                                    </p>
                                    <div className='d-flex' style={{width: '100%', height: 20 / proporcional}}>
                                        <img src={icono_circle_blue} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 2 / proporcional, marginRight: 10 / proporcional}}/>
                                        <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 2 / proporcional, marginRight: 10 / proporcional}}/>
                                        <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 2 / proporcional}}/>
                                    </div>
                                </div>
                            </div>

                            <div className='position-absolute top-0 end-0' style={{width: 350 / proporcional, height: 350 / proporcional}}>
                                <img src={image_00} style={{width: 350 / proporcional, height: 350 / proporcional}}/>
                            </div>
                        </div>
                    </div>

                    <div className='carousel-item' style={{width: '100%', height: 350 / proporcional, background: '#fbfbfb'}} data-bs-interval='3000'>
                        <div className='position-relative' style={{width: '100%', height: 350 / proporcional}}>
                            <div className='d-flex' style={{width: '60%', height: 350 / proporcional, padding: 50 / proporcional}}>
                                <img className='rounded-circle' src={icono_comillas} 
                                    style={{width: 64 / proporcional, height: 64 / proporcional, padding: 16 / proporcional, border: '1px solid #4a9ae9', marginRight: 20 / proporcional}}/>
                                <div style={{width: '100%', height: 'auto', marginTop: 25 / proporcional, marginBottom: 0 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(139, 139, 139)',
                                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                                        ¡Seguimos siendo profesionales y pragmáticos y encontramos las mejores soluciones!
                                    </p>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                                        JONATHAN BRIGGS
                                    </p>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(139, 139, 139)',
                                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                                        Founder & CEO
                                    </p>
                                    <div className='d-flex' style={{width: '100%', height: 20 / proporcional}}>
                                        <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 2 / proporcional, marginRight: 10 / proporcional}}/>
                                        <img src={icono_circle_blue} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 2 / proporcional, marginRight: 10 / proporcional}}/>
                                        <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 2 / proporcional}}/>
                                    </div>
                                </div>
                            </div>

                            <div className='position-absolute top-0 end-0' style={{width: 350 / proporcional, height: 350 / proporcional}}>
                                <img src={image_01} style={{width: 350 / proporcional, height: 350 / proporcional}}/>
                            </div>
                        </div>
                    </div>

                    <div className='carousel-item' style={{width: '100%', height: 350 / proporcional, background: '#fbfbfb'}} data-bs-interval='3000'>
                        <div className='position-relative' style={{width: '100%', height: 350 / proporcional}}>
                            <div className='d-flex' style={{width: '60%', height: 350 / proporcional, padding: 50 / proporcional}}>
                                <img className='rounded-circle' src={icono_comillas} 
                                    style={{width: 64 / proporcional, height: 64 / proporcional, padding: 16 / proporcional, border: '1px solid #4a9ae9', marginRight: 20 / proporcional}}/>
                                <div style={{width: '100%', height: 'auto', marginTop: 25 / proporcional, marginBottom: 0 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(139, 139, 139)',
                                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                                        ¡Seguimos siendo profesionales y pragmáticos y encontramos las mejores soluciones!
                                    </p>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                                        JONATHAN BRIGGS
                                    </p>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(139, 139, 139)',
                                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                                        Founder & CEO
                                    </p>
                                    <div className='d-flex' style={{width: '100%', height: 20 / proporcional}}>
                                        <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 2 / proporcional, marginRight: 10 / proporcional}}/>
                                        <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 2 / proporcional, marginRight: 10 / proporcional}}/>
                                        <img src={icono_circle_blue} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 2 / proporcional}}/>
                                    </div>
                                </div>
                            </div>

                            <div className='position-absolute top-0 end-0' style={{width: 350 / proporcional, height: 350 / proporcional}}>
                                <img src={image_02} style={{width: 350 / proporcional, height: 350 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: 100 / proporcional, background: '#4a9ae9', height: 4 / proporcional, marginBottom: 100 / proporcional}}/>
            <div style={{width: '100%', height: 'auto', marginBottom: 100 / proporcional}}>
                <p className='' 
                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(24, 54, 80)',
                            fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                    ¡Somos Logística express!
                </p>
                <p className='' 
                    style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(128, 128, 128)',
                            fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                    El modelo flexible de Logistics Ground, que utiliza únicamente transportistas de calidad, significa que usted se beneficiará de mejores niveles de servicio, mayor flexibilidad y entregas en plazos definidos. Nuestra experiencia en gestión y planificación del transporte nos permite diseñar una solución que satisfaga sus necesidades y también responder rápidamente a cualquier interrupción del evento, como el clima.
                </p>
                <p className='' 
                    style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(128, 128, 128)',
                            fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                    Redes de Carreteras Integradas, que cubren el mundo. A través de nuestra red global de torres de control y tecnología de última generación, podemos monitorear y reaccionar dinámicamente ante situaciones como clima adverso, recogidas o entregas adicionales o tráfico intenso, lo que significa que sus mercancías siempre están viajando. la ruta más eficiente.
                </p>
                <p className='' 
                    style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(128, 128, 128)',
                            fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                    Nuestra red de carreteras no basada en activos le brinda flexibilidad, niveles de servicio mejorados, entrega acelerada, costos directos e indirectos reducidos y mucha menos complejidad.
                </p>
            </div>
            <div style={{width: 100 / proporcional, background: '#4a9ae9', height: 4 / proporcional, marginBottom: 100 / proporcional}}/>
            <div style={{width: '100%', height: 'auto', marginBottom: 100 / proporcional}}>
                <p className='' 
                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(24, 54, 80)',
                            fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                    ¡NUESTRA MISIÓN!
                </p>
                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '49%', height: 'auto'}}>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_check} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 1 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                Ofrecer servicios al cliente ambientalmente responsables.
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_check} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 1 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                Proporcionar a las empleadas un ambiente de trabajo atractivo.
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_check} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 1 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                Sea un socio comunitario activo.               
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_check} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 1 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                Mantener altos estándares éticos.
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_check} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 1 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                Impulsar la mejora continua.
                            </p>
                        </div>
                    </div>

                    <div style={{width: '49%', height: 'auto'}}>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_check} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 1 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                Seguridad de la carga.
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_check} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 1 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                Seguro de carga aérea y marítima.
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_check} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 1 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                Nuestra intermediación aduanera altamente eficiente.
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_check} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 1 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                Servicio de autorización y cumplimiento.
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_check} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 1 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                Garantizamos total seguridad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
