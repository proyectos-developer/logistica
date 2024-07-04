import React, { useState } from 'react'

import icono_right_white from '../../../assets/iconos/icono_right_white_96.png'
import icono_right_black from '../../../assets/iconos/icono_right_black_96.png'

import Preguntas from './preguntas.jsx'
import { useNavigate } from 'react-router-dom'

export default function PreguntasFrecuentes({proporcional}) {

    const navigate = useNavigate()

    const [boton_contactar, setBotonContactar] = useState(false)

    return (
        <div className='' style={{width: '100%', height: 'auto'}}>
            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '28%', height: 'auto'}}>
                    <div style={{width: 100 / proporcional, background: '#4a9ae9', height: 4 / proporcional, marginBottom: 35 / proporcional}}/>
                    <p style={{fontSize: 36 / proporcional, fontWeight: 480, lineHeight: `${42 / proporcional}px`, color: 'rgb(24, 54, 80)', marginBottom: 21 / proporcional}}>
                        PREGUNTAS FRECUENTES
                    </p>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 25 / proporcional}}>
                        Preguntas aun abiertas
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

                <div style={{width: '78%', height: 'auto'}}>
                    <Preguntas proporcional={proporcional}/>
                </div>
            </div>
        </div>
    )
}
