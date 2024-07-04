import React, { useState } from 'react'

import icono_right_black from '../../assets/iconos/icono_right_black_96.png'
import icono_right_white from '../../assets/iconos/icono_right_white_96.png'

import icono_check_box from '../../assets/iconos/icono_check_box_grey_96.png'
import icono_box_empty from '../../assets/iconos/icono_box_empty_grey_96.png'

export default function Formulario({proporcional}) {

    const [nombres, setNombres] = useState('')
    const [email, setEmail] = useState('')
    const [suscribirse_noticias, setSuscribirseNoticias] = useState(false)
    const [mensaje, setMensaje] = useState('')

    const [enombres, setENombres] = useState(false)
    const [eemail, setEEmail] = useState(false)
    const [emensaje, setEMensaje] = useState(false)

    const [boton_enviar, setBotonEnviar] = useState(false)

    const enviar_mensaje = () => {
        if (nombres === '' || email === '' || mensaje === ''){
            setENombres(nombres === '' ? true : false)
            setEEmail(email === '' ? true : false)
            setEMensaje(mensaje === '' ? true : false)
        }else{
            setENombres(false)
            setEEmail(false)
            setEMensaje(false)

            const data_mensaje = {
                nombres: nombres,
                email: email,
                mensaje: mensaje
            }
            console.log (data_mensaje)
        }
    }

    return (
        <div style={{width: '100%', height: 'auto', background: '#f7f7f7', padding: 40 / proporcional, paddingBottom: 10 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '48%', height: 'auto'}}>
                    <div style={{width: '100%', height: 64 / proporcional, marginBottom: 20 / proporcional}}>
                        <div style={{width: '100%', height: 38 / proporcional, marginBottom: 26 / proporcional, border: enombres ? '1px solid red' : '1px solid rgb(219, 219, 219'}}>
                            <input 
                                type='default'
                                className='form-control border-0 rounded'
                                style={{width: '100%', height: 34 / proporcional, color: 'rgb(219, 219, 219)', fontFamily: 'Open Sans', fontSize: 14 / proporcional, lineHeight: `${34 / proporcional}`,
                                    background: 'white'}}
                                value={nombres}
                                onChange={(event) => setNombres(event.target.value)}
                                placeholder='Nombres'
                                id='nombres'/>
                        </div>
                    </div>
                    <div style={{width: '100%', height: 64 / proporcional, marginBottom: 20 / proporcional}}>
                        <div style={{width: '100%', height: 38 / proporcional, marginBottom: 26 / proporcional, border: eemail ? '1px solid red' : '1px solid rgb(219, 219, 219'}}>
                            <input 
                                type='e-mail'
                                className='form-control border-0 rounded'
                                style={{width: '100%', height: 34 / proporcional, color: 'rgb(219, 219, 219)', fontFamily: 'Open Sans', fontSize: 14 / proporcional, lineHeight: `${34 / proporcional}px`,
                                    background: 'white'}}
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder='Email´+}'
                                id='email'/>
                        </div>
                    </div>
                </div>
                <div style={{width: '48%', height: 'auto'}}>
                    <div style={{width: '100%', height: 64 / proporcional, marginBottom: 20 / proporcional}}>
                        <div style={{width: '100%', height: 100 / proporcional, marginBottom: 26 / proporcional, border: emensaje ? '1px solid red' : '1px solid rgb(219, 219, 219'}}>
                            <textarea 
                                rows={3}
                                className='form-control border-0 rounded'
                                style={{width: '100%', height: 96 / proporcional, color: 'rgb(219, 219, 219)', fontFamily: 'Open Sans', fontSize: 14 / proporcional, lineHeight: `${34 / proporcional}px`,
                                    background: 'white'}}
                                value={mensaje}
                                onChange={(event) => setMensaje(event.target.value)}
                                placeholder='Mensaje'
                                id='mensaje'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 86 / proporcional, marginBottom: 46 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: '48%', height: 40 / proporcional}}>
                    <img src={suscribirse_noticias ? icono_check_box : icono_box_empty} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 12 / proporcional,
                            cursor: 'pointer'}}
                        onClick={() => setSuscribirseNoticias(!suscribirse_noticias)}/>
                    <p style={{color: 'rgb(128, 128, 128)', fontFamily: 'Open Sans', fontSize: 14 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 400}}>
                        Suscríbete a nuestro boletín
                    </p>
                </div>
                <div className='d-flex justify-content-end' style={{width: '48%', height: 40 / proporcional}}>
                    <div className='rounded-pill d-flex justify-content-center' style={{width: 150 / proporcional, height: 40 / proporcional, border: '2px solid rgb(52, 204, 255)',
                            background: boton_enviar ? 'rgb(25, 204, 255)' : 'transparent', cursor: 'pointer'}}
                            onMouseOver={() => setBotonEnviar(true)} onMouseLeave={() => setBotonEnviar(false)}
                            onClick={() => enviar_mensaje()}>
                        <p style={{color: boton_enviar ? 'white' : '#183650', fontFamily: 'Open Sans', fontSize: 14 / proporcional, lineHeight: `${36 / proporcional}px`, fontWeight: 700}}>
                            Enviar mensaje
                        </p>
                        <img src={boton_enviar ? icono_right_white : icono_right_black} style={{width: 36 / proporcional, height: 36 / proporcional, padding: 11 / proporcional,
                                paddingRight: 11 / proporcional}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
