import React, { useState } from 'react'

import icono_right_black from '../../assets/iconos/icono_right_black_96.png'
import icono_right_white from '../../assets/iconos/icono_right_white_96.png'

export default function FormularioCell({proporcional}) {

    const [nombres, setNombres] = useState('')
    const [nro_telefono, setNroTelefono] = useState('')
    const [tipo_transporte, setTipoTransporte] = useState('')
    const [dimensiones, setDimensiones] = useState('')
    const [ciudad_partida, setCiudadPartida] = useState('')
    const [email, setEmail] = useState('')
    const [incoterms, setIncoterms] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [total_peso, setTotalPeso] = useState('')

    const [enombres, setENombres] = useState(false)
    const [enro_telefono, setENroTelefono] = useState(false)
    const [etipo_transporte, setETipoTransporte] = useState(false)
    const [edimensiones, setEDimensiones] = useState(false)
    const [eciudad_partida, setECiudadPartida] = useState(false)
    const [eemail, setEEmail] = useState(false)
    const [emensaje, setEMensaje] = useState(false)
    const [eincoterms, setEIncoterms] = useState(false)
    const [etotal_peso, setETotalPeso] = useState(false)

    const [boton_enviar, setBotonEnviar] = useState(false)

    const enviar_cotizacion = () => {
        if (nombres === '' || nro_telefono === '' || tipo_transporte === '' || dimensiones === '' || ciudad_partida === '' || email === '' || incoterms === '' || total_peso === '' ||
                mensaje === ''){
            setENombres(nombres === '' ? true : false)
            setENroTelefono(nro_telefono === '' ? true : false)
            setETipoTransporte(tipo_carga === '' ? true : false)
            setEDimensiones(dimensiones === '' ? true : false)
            setECiudadPartida(ciudad_partida === '' ? true : false)
            setEEmail(email === '' ? true : false)
            setEMensaje(mensaje === '' ? true : false)
            setEIncoterms(incoterms === '' ? true : false)
            setETotalPeso(total_peso === '' ? true : false)
        }else{
            setENombres(false)
            setENroTelefono(false)
            setETipoTransporte(false)
            setEDimensiones(false)
            setECiudadPartida(false)
            setEEmail(false)
            setEMensaje(false)
            setEIncoterms(false)
            setETotalPeso(false)
            const data_cotizacion = {
                nombres: nombres,
                nro_telefono: nro_telefono,
                tipo_carga: tipo_carga,
                dimensiones: dimensiones,
                ciudad_partida: ciudad_partida,
                email: email,
                incoterms: incoterms,
                total_peso: total_peso
            }
            console.log (data_cotizacion)
        }
    }

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: 100 / proporcional, background: '#4a9ae9', height: 4 / proporcional, marginBottom: 50 / proporcional}}/>
            <div style={{width: '100%', height: 'auto', marginBottom: 33 / proporcional}}>
                <p className='' 
                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(24, 54, 80)',
                            fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                    Solicitar presupuesto
                </p>
            </div>  
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div className='' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='rounded' 
                            style={{width: '100%', height: 40 / proporcional, marginBottom: 46 / proporcional, border: enombres ? '1px solid red' : '1px solid rgb(219, 219, 219)'}}>
                            <input 
                                id='nombres'
                                className='form-control border-0'
                                type='default'
                                style={{width: '100%', height: 36 / proporcional, color: 'rgb(128, 128, 128)', fontSize: 14 / proporcional, fontFamily: 'Open Sans'}}
                                value={nombres}
                                onChange={(event) => setNombres(event.target.value)}
                                placeholder='Nombres'/>
                        </div>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='rounded' 
                            style={{width: '100%', height: 40 / proporcional, marginBottom: 46 / proporcional, border: etipo_transporte ? '1px solid red' : '1px solid rgb(219, 219, 219)'}}>
                            <select 
                                id='tipo_transporte'
                                className='form-select border-0'
                                style={{width: '100%', height: 36 / proporcional, color: 'rgb(128, 128, 128)', fontSize: 14 / proporcional, fontFamily: 'Open Sans'}}
                                value={nombres}
                                onChange={(event) => event.target.value === '0' ? null :  setTipoTransporte(event.target.value)}>
                                <option value='0'>Seleccionar tipo de transporte</option>
                                <option value='Terrestre'>Transporte terrestre</option>
                                <option value='Aéreo'>Transporte aéreo</option>
                                <option value='Marítimo'>Transporte marítimo</option>
                                <option value='Almacén'>Almacén</option>
                            </select>
                        </div>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='rounded' 
                            style={{width: '100%', height: 40 / proporcional, marginBottom: 46 / proporcional, border: eciudad_partida ? '1px solid red' : '1px solid rgb(219, 219, 219)'}}>
                            <input 
                                id='ciudad_partida'
                                className='form-control border-0'
                                type='default'
                                style={{width: '100%', height: 36 / proporcional, color: 'rgb(128, 128, 128)', fontSize: 14 / proporcional, fontFamily: 'Open Sans'}}
                                value={ciudad_partida}
                                onChange={(event) => setCiudadPartida(event.target.value)}
                                placeholder='Ciudad de partida'/>
                        </div>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='rounded' 
                            style={{width: '100%', height: 40 / proporcional, marginBottom: 46 / proporcional, border: eincoterms ? '1px solid red' : '1px solid rgb(219, 219, 219)'}}>
                            <select 
                                id='inconterms'
                                className='form-select border-0'
                                style={{width: '100%', height: 36 / proporcional, color: 'rgb(128, 128, 128)', fontSize: 14 / proporcional, fontFamily: 'Open Sans'}}
                                value={incoterms}
                                onChange={(event) => event.target.value === '0' ? null :  setIncoterms(event.target.value)}>
                                <option value='0'>Seleccionar incoterms</option>
                                <option value='EXW'>EXW</option>
                                <option value='FCA'>FCA</option>
                                <option value='CPT'>CPT</option>
                                <option value='CIP'>CIP</option>
                                <option value='DAT'>DAT</option>
                                <option value='DAP'>DAP</option>
                                <option value='DDP'>DDP</option>
                                <option value='FAS'>FAS</option>
                                <option value='FOB'>FOB</option>
                                <option value='CFR'>CFR</option>
                                <option value='CIF'>CIF</option>
                            </select>
                        </div>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='rounded' 
                            style={{width: '100%', height: 40 / proporcional, marginBottom: 46 / proporcional, border: etotal_peso ? '1px solid red' : '1px solid rgb(219, 219, 219)'}}>
                            <input 
                                id='total_peso'
                                className='form-control border-0'
                                type='default'
                                style={{width: '100%', height: 36 / proporcional, color: 'rgb(128, 128, 128)', fontSize: 14 / proporcional, fontFamily: 'Open Sans'}}
                                value={total_peso}
                                onChange={(event) => setTotalPeso(event.target.value)}
                                placeholder='Peso total bruto'/>
                        </div>
                    </div>

                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='rounded' 
                            style={{width: '100%', height: 40 / proporcional, marginBottom: 46 / proporcional, border: enro_telefono ? '1px solid red' : '1px solid rgb(219, 219, 219)'}}>
                            <input 
                                id='nro_telefono'
                                className='form-control border-0'
                                type='number'
                                style={{width: '100%', height: 36 / proporcional, color: 'rgb(128, 128, 128)', fontSize: 14 / proporcional, fontFamily: 'Open Sans'}}
                                value={nro_telefono}
                                onChange={(event) => setNroTelefono(event.target.value)}
                                placeholder='Número de teléfono'/>
                        </div>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='rounded' 
                            style={{width: '100%', height: 40 / proporcional, marginBottom: 46 / proporcional, border: edimensiones ? '1px solid red' : '1px solid rgb(219, 219, 219)'}}>
                            <input 
                                id='dimensiones'
                                className='form-control border-0'
                                type='default'
                                style={{width: '100%', height: 36 / proporcional, color: 'rgb(128, 128, 128)', fontSize: 14 / proporcional, fontFamily: 'Open Sans'}}
                                value={dimensiones}
                                onChange={(event) => setDimensiones(event.target.value)}
                                placeholder='dimensiones'/>
                        </div>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='rounded' 
                            style={{width: '100%', height: 40 / proporcional, marginBottom: 46 / proporcional, border: eemail ? '1px solid red' : '1px solid rgb(219, 219, 219)'}}>
                            <input 
                                id='email'
                                className='form-control border-0'
                                type='e-mail'
                                style={{width: '100%', height: 36 / proporcional, color: 'rgb(128, 128, 128)', fontSize: 14 / proporcional, fontFamily: 'Open Sans'}}
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder='E-mail'/>
                        </div>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='rounded' 
                            style={{width: '100%', height: 75 / proporcional, marginBottom: 46 / proporcional, border: emensaje ? '1px solid red' : '1px solid rgb(219, 219, 219)'}}>
                            <textarea 
                                id='mensaje'
                                rows={2}
                                className='form-control border-0'
                                type='mensaje'
                                style={{width: '100%', height: 71 / proporcional, color: 'rgb(128, 128, 128)', fontSize: 14 / proporcional, fontFamily: 'Open Sans'}}
                                value={mensaje}
                                onChange={(event) => setMensaje(event.target.value)}
                                placeholder='Mensaje'/>
                        </div>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='rounded-pill d-flex justify-content-center' style={{width: '50%', height: 40 / proporcional, border: '2px solid rgb(52, 204, 255)',
                                background: boton_enviar ? 'rgb(25, 204, 255)' : 'transparent', cursor: 'pointer'}}
                                onMouseOver={() => setBotonEnviar(true)} onMouseLeave={() => setBotonEnviar(false)}
                                onClick={() => enviar_cotizacion()}>
                            <p style={{color: boton_enviar ? 'white' : '#183650', fontFamily: 'Open Sans', fontSize: 14 / proporcional, lineHeight: `${36 / proporcional}px`, fontWeight: 700}}>
                                Enviar mensaje
                            </p>
                            <img src={boton_enviar ? icono_right_white : icono_right_black} style={{width: 36 / proporcional, height: 36 / proporcional, padding: 11 / proporcional,
                                    paddingRight: 11 / proporcional}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
