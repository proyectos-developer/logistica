import React, {useState} from 'react'

import icono_right_white from '../../assets/iconos/icono_arrow_right_white_96.png'
import icono_right_dark from '../../assets/iconos/icono_arrow_right_dark_96.png'

export default function Contactarnos({proporcional}) {

    const [boton_contactar, setBotonContactar] = useState (false)

    return (
        <div className='d-flex justify-content-between' style={{width: '100%', height: 50 / proporcional}}>
            <p className='d-flex justify-content-start' 
                style={{fontSize: 50 / proporcional, lineHeight: `${200 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                        fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default', marginRight: 20 / proporcional}}>
                ¿Tiene preguntas aún?
            </p>
            <div className='d-flex justify-content-end' style={{width: 'auto', height: 'auto', marginTop: 60 / proporcional, marginBottom: 60 / proporcional}}>
                <div className='d-flex justify-content-center rounded-pill' style={{width: 350 / proporcional, height: 80 / proporcional, border: '1px solid white',
                        background: boton_contactar ? 'white' : 'transparent', cursor: 'pointer'}}
                    onMouseOver={() => setBotonContactar(true)} onMouseLeave={() => setBotonContactar(false)}>
                    <div style={{width: 'auto', height: 'auto'}}>
                        <p className='' 
                            style={{fontSize: 24 / proporcional, lineHeight: `${80 / proporcional}px`, marginBottom: 0 / proporcional, color: boton_contactar ? 'black' : 'white',
                                    fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default', marginRight: 20 / proporcional}}>
                            Contáctanos ahora
                        </p>
                    </div>
                    <img src={boton_contactar ? icono_right_dark : icono_right_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 28 / proporcional,
                        marginLeft: 10 / proporcional, marginRight: 0}}/>
                </div>
            </div>
        </div>
    )
}
