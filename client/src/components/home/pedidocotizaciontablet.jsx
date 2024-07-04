import React, { useState } from 'react'

import icono_right from '../../assets/iconos/icono_arrow_right_white_96.png'

export default function PedidoCotizacionTablet({proporcional}) {

    const [tipo_transporte, setTipoTransporte] = useState ('')
    const [dimensiones, setDimensiones] = useState ('')
    const [ciudad_partida, setCiudadPartida] = useState ('')
    const [email, setEmail] = useState ('')
    const [ciudad_destino, setCiudadDestino] = useState ('')
    const [message, setMessage] = useState ('')
    const [inconterms, setIncoterms] = useState ('')
    const [total_peso, setTotalPeso] = useState ('')

    const [etipo_transporte, setETipoTransporte] = useState ('')
    const [edimensiones, setEDimensiones] = useState ('')
    const [eciudad_partida, setECiudadPartida] = useState ('')
    const [eemail, setEEmail] = useState ('')
    const [eciudad_destino, setECiudadDestino] = useState ('')
    const [emessage, setEMessage] = useState ('')
    const [einconterms, setEIncoterms] = useState ('')
    const [etotal_peso, setETotalPeso] = useState ('')

    const [boton_envio, setBotonEnvio] = useState (false)

    return (
        <div className='' style={{width: '100%', height: 'auto', paddingTop: 150 / proporcional, paddingBottom: 150 / proporcional, background: '#1c4c96',
                paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional}}>
            <div style={{width: 100 / proporcional, height: 4 / proporcional, background: '#4a9ae9', marginBottom: 50 / proporcional}}/>
            <div style={{width: '100%', height: 40 / proporcional, marginBottom: 50 / proporcional}}>
                <p className='' 
                    style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(24, 54, 80)',
                            fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default', textAlign: 'white'}}>
                    Pide una cotización gratis
                </p>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div className='' style={{width: '48%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <select 
                        className='form-select'
                        value={tipo_transporte}
                        onChange={(event) => event.target.value === '0' ? null : setTipoTransporte(event.target.value)}
                        style={{width: '100%', height: 50 / proporcional, fontSize: 20 / proporcional, color: 'rgb(166, 166, 166)', background: 'white', marginBottom: 20 / proporcional}}
                        id='tipo_transporte'>
                        <option value='0'>Tipo transporte</option>
                    </select>
                    <input 
                        type='default'
                        className='form-control'
                        value={ciudad_partida}
                        onChange={(event) => setCiudadPartida(event.target.value)}
                        style={{width: '100%', height: 50 / proporcional, fontSize: 20 / proporcional, color: 'rgb(166, 166, 166)', background: 'white', marginBottom: 20 / proporcional}}
                        id='ciudad_partida'
                        placeholder='Ciudad de partida'/>                
                    <input 
                        type='default'
                        className='form-control'
                        value={ciudad_destino}
                        onChange={(event) => setCiudadDestino(event.target.value)}
                        style={{width: '100%', height: 50 / proporcional, fontSize: 20 / proporcional, color: 'rgb(166, 166, 166)', background: 'white', marginBottom: 75 / proporcional}}
                        id='ciudad_destino'
                        placeholder='Ciudad de destino'/>
                    <select 
                        className='form-select'
                        value={inconterms}
                        onChange={(event) => event.target.value === '0' ? null : setIncoterms(event.target.value)}
                        style={{width: '100%', height: 50 / proporcional, fontSize: 20 / proporcional, color: 'rgb(166, 166, 166)', background: 'white', marginBottom: 20 / proporcional}}
                        id='inconterms'>
                        <option value='0'>Incontterms</option>
                    </select>
                    <input 
                        type='default'
                        className='form-control'
                        value={total_peso}
                        onChange={(event) => setTotalPeso(event.target.value)}
                        style={{width: '100%', height: 50 / proporcional, fontSize: 20 / proporcional, color: 'rgb(166, 166, 166)', background: 'white'}}
                        id='total_peso'
                        placeholder='Ciudad de partida'/>   
                </div>
                <div className='' style={{width: '48%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <input 
                        type='default'
                        className='form-control'
                        value={dimensiones}
                        onChange={(event) => setDimensiones(event.target.value)}
                        style={{width: '100%', height: 50 / proporcional, fontSize: 20 / proporcional, color: 'rgb(166, 166, 166)', background: 'white', marginBottom: 20 / proporcional}}
                        id='dimensiones'
                        placeholder='Dimensiones'/>
                    <input 
                        type='default'
                        className='form-control'
                        value={email}
                        onChange={(event) => setemail(event.target.value)}
                        style={{width: '100%', height: 50 / proporcional, fontSize: 20 / proporcional, color: 'rgb(166, 166, 166)', background: 'white', marginBottom: 20 / proporcional}}
                        id='email'
                        placeholder='email'/>
                    <textarea 
                        type='default'
                        className='form-control'
                        rows={3}
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        style={{width: '100%', height: 150 / proporcional, fontSize: 20 / proporcional, color: 'rgb(166, 166, 166)', background: 'white', marginBottom: 20 / proporcional}}
                        id='message'
                        placeholder='message'/>
                    <button className='btn d-flex justify-content-center rounded-pill' 
                            style={{width: '100%', height: 50 / proporcional, fontSize: 18 / proporcional, color: 'white', border: '1px solid #4a9ae9',
                                background: boton_envio ? '#4a9ae9' : 'transparent'}}
                                onMouseOver={() => setBotonEnvio(true)} onMouseLeave={() => setBotonEnvio(false)}>
                        Enviar mensaje
                        <img src={icono_right} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 5 / proporcional}}/>
                    </button>
                </div>
            </div>
        </div>
    )
}
