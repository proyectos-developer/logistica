import React, { useState } from 'react'

import icono_arrow_white from '../../assets/iconos/icono_right_white_96.png'
import icono_arrow_black from '../../assets/iconos/icono_right_black_96.png'
import { useNavigate } from 'react-router-dom'

export default function ContactaranosCell({proporcional}) {

    const navigate = useNavigate()

    const [boton_contacto, setBotonContacto] = useState(false)

    return (
        <div style={{width: '100%', height: 'auto', background: 'rgb(52, 204, 255)'}}>
            <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                <div style={{width: '100%', height: 'auto'}}>
                    <p className='' 
                        style={{fontSize: 30 / proporcional, lineHeight: `${55 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                        ¿No está seguro de qué solución se adapta a las necesidades de su negocio?
                    </p>
                </div>
                <div className='d-flex justify-content-end' style={{width: '100%', height: 55 / proporcional}}>
                    <div className='rounded-pill d-flex justify-content-center' style={{width: 300 / proporcional, height: 55 / proporcional, border: '2px solid white', cursor: 'pointer',
                            background: boton_contacto ? 'white' : 'transparent'}}
                                onMouseOver={() => setBotonContacto(true)} onMouseLeave={() => setBotonContacto(false)} onClick={() => naivate ('/contactanos')}>
                        <p className='' 
                            style={{fontSize: 19 / proporcional, lineHeight: `${55 / proporcional}px`, marginBottom: 0 / proporcional, color: boton_contacto ? 'black' : 'white',
                                    fontWeight: 700, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            Contactárnos ahora
                        </p>
                        <img src={boton_contacto ? icono_arrow_black : icono_arrow_white} style={{width: 55 / proporcional, height: 55 / proporcional, padding: 17.5 / proporcional}}/> 
                    </div>
                </div>
            </div>
        </div>
    )
}
