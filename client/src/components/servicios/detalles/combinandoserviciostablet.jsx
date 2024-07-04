import React, { useState } from 'react'

import icono_right_black from '../../../assets/iconos/icono_right_black_96.png'
import icono_right_white from '../../../assets/iconos/icono_right_white_96.png'

import image_servicios from '../../../assets/images/image_servicios_750_01.png'
import { useNavigate } from 'react-router-dom'

export default function CombinandoServiciosTablet({proporcional}) {

    const navigate = useNavigate()

    const [boton_contactar, setBotonContactar] = useState(false)

    return (
        <div style={{width: '100%', height: 'auto', background: 'rgb(247, 247, 247)'}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 60 / proporcional,
                    paddingRight: 60 / proporcional}}>

                <div style={{width: '48%', height: 'auto'}}>
                    <div style={{width: 100 / proporcional, background: '#4a9ae9', height: 4 / proporcional, marginBottom: 35 / proporcional}}/>
                    <p style={{fontSize: 36 / proporcional, fontWeight: 480, lineHeight: `${42 / proporcional}px`, color: 'rgb(24, 54, 80)', marginBottom: 21 / proporcional}}>
                        COMBINANDO SERVICIOS DE EJECUCIÓN Y GESTIÓN DEL TRANSPORTE
                    </p>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 25 / proporcional}}>
                        A través de nuestra red global de torres de control y tecnología de última generación, podemos monitorear y reaccionar dinámicamente ante situaciones como clima adverso, recogidas o entregas adicionales o tráfico intenso, lo que significa que sus mercancías siempre están viajando. la ruta más eficiente.
                    </p>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 35 / proporcional}}>
                        Nuestra red de carreteras no basada en activos le brinda flexibilidad, mejores niveles de servicio, entrega acelerada, costos directos e indirectos reducidos y mucho menos.
                    </p>
                    <div className='rounded-pill d-flex justify-content-center' style={{width: 250 / proporcional, height: 50 / proporcional, border: '1px solid #34ccff', cursor: 'pointer', 
                            background: boton_contactar ? '#34ccff' : 'transparent'}} onMouseOver={() => setBotonContactar(true)} onMouseLeave={() => setBotonContactar(false)}
                            onClick={() => navigate ('/contactanos')}>
                        <p style={{fontSize: 14 / proporcional, fontWeight: 700, lineHeight: `${50 / proporcional}px`, color: boton_contactar ? 'white' : 'rgb(24, 54, 80)', marginBottom: 0 / proporcional}}>
                            Contactárnos
                        </p>
                        <img src={boton_contactar ? icono_right_white : icono_right_black} style={{width: 50 / proporcional, height: 50 / proporcional, padding: 14 / proporcional, paddingRight: 0, paddingLeft: 28 / proporcional}}/>
                    </div>
                </div>

                <div style={{width: '48%', height: 'auto'}}>
                    <img src={image_servicios} style={{width: '100%', height: 365 / proporcional}}/>
                </div>

            </div>
        </div>
    )
}
