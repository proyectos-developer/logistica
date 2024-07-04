import React from 'react'

import icono_dot_white from '../../assets/iconos/icono_dot_white_96.png'
import icono_dot_blue from '../../assets/iconos/icono_circle_blue_96.png'
import icono_arrow_right from '../../assets/iconos/icono_arrow_right_blue_96.png'

import image_01 from '../../assets/images/image_servicios_01.png'
import image_02 from '../../assets/images/image_servicios_02.png'
import image_03 from '../../assets/images/image_servicios_03.png'

export default function ServiciosEspecialesTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', background: '#1c4c96', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional, paddingLeft: 60 / proporcional, 
                paddingRight: 60 / proporcional}}>
            <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <div className='rounded-pill' style={{width: 100 / proporcional, height: 4 / proporcional, background: '#4a9ae9', marginBottom: 50 / proporcional}}/>
                <p className='' 
                    style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 30 / proporcional, color: 'white',
                            fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                    SERVICIOS <br/>ESPECIALES
                </p>
                <p className='' 
                    style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(255, 255, 255, 0.5)',
                            fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                    Conocidos mundialmente por nuestra capacidad para manejar hasta el último detalle de las necesidades particulares de logística y envío de nuestros clientes, el equipo de servicios especiales de transcargo se encarga de toda su logística.
                </p>
                <div className='d-flex' style={{width: '60%', height: 'auto'}}>
                    <img src={icono_dot_white} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 10 / proporcional}}/>
                    <img src={icono_dot_white} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 10 / proporcional}}/>
                    <img src={icono_dot_blue} style={{width: 18 / proporcional, height: 18 / proporcional}}/>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <div style={{width: '90%', height: 'auto'}}>
                    <div className='rounded-top' style={{width: '100%', height: '100%'}}>
                        <img className='rounded-top' src={image_01} style={{width: '100%', height: 'auto'}}/>
                        <div className='rounded-bottom' style={{width: '100%', height: 'auto', background: 'white', padding: 20 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: '#1c4c96',
                                        fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                Embalaje y <br/> almacenamiento
                            </p>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                Puedes optar por plataformas dedicadas a partir de las ventajas relacionadas con superficies, recursos y equipos compartidos.
                            </p>
                            <div className='d-flex' style={{width: '100%', height: 16 / proporcional, cursor: 'pointer'}}>
                                <p className='' 
                                    style={{fontSize: 16 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, color: '#4a9ae9',
                                            fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                                    Leer más
                                </p>
                                <img src={icono_arrow_right} style={{width: 16 / proporcional, height: 16 / proporcional}}/>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <div style={{width: '90%', height: 'auto'}}>
                    <div className='rounded-top' style={{width: '100%', height: '100%'}}>
                        <img className='rounded-top' src={image_02} style={{width: '100%', height: 'auto'}}/>
                        <div className='rounded-bottom' style={{width: '100%', height: 'auto', background: 'white', padding: 20 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: '#1c4c96',
                                        fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                Transporte <br/> de carga
                            </p>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                Con presencia global en 67 países, Transcargo es una de las empresas de transporte de carga más grandes del mundo.
                            </p>
                            <div className='d-flex' style={{width: '100%', height: 16 / proporcional, cursor: 'pointer'}}>
                                <p className='' 
                                    style={{fontSize: 16 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, color: '#4a9ae9',
                                            fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                                    Leer más
                                </p>
                                <img src={icono_arrow_right} style={{width: 16 / proporcional, height: 16 / proporcional}}/>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '90%', height: 'auto'}}>
                    <div className='rounded-top' style={{width: '100%', height: '100%'}}>
                        <img className='rounded-top' src={image_03} style={{width: '100%', height: 'auto'}}/>
                        <div className='rounded-bottom' style={{width: '100%', height: 'auto', background: 'white', padding: 20 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: '#1c4c96',
                                        fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                Soluciones de la <br/> cadena de suministro
                            </p>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                Proporciona una solución escalable y personalizable para clientes que tienen programas para retirar activos de TI obsoletos.
                            </p>
                            <div className='d-flex' style={{width: '100%', height: 16 / proporcional, cursor: 'pointer'}}>
                                <p className='' 
                                    style={{fontSize: 16 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, color: '#4a9ae9',
                                            fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                                    Leer más
                                </p>
                                <img src={icono_arrow_right} style={{width: 16 / proporcional, height: 16 / proporcional}}/>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
