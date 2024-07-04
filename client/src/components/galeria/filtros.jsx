import React, { useState } from 'react'

import icono_ampliar from '../../assets/iconos/icono_ampliar_blue_96.png'

export default function Filtros({proporcional}) {

    const [seleccion_filtro, setSeleccionFiltro] = useState('')
    const [filtro, setFiltro] = useState('todos')

    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 200 / proporcional, paddingRight: 200 / proporcional}}>
            <div className='d-flex' style={{width: '100%', height: 55 / proporcional, marginBottom: 50 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: '80%', height: 55 / proporcional}}>
                    <div style={{width: '8%', height: 55 / proporcional}}>
                        <p className='' style={{fontSize: 16 / proporcional, lineHeight: `${filtro === 'todos' ? 51 / proporcional : 55 / proporcional}px`, 
                                    marginBottom: 0 / proporcional, color: seleccion_filtro === 'todos' ? 'rgb(52, 204, 255)' : 'rgb(24, 54, 80)', 
                                    fontWeight: 700, fontFamily: 'Roboto, sans-serif', cursor: 'pointer',  textAlign: 'center'}} 
                                    onMouseOver={() => setSeleccionFiltro('todos')} onMouseLeave={() => setSeleccionFiltro('')}
                                    onClick={() => setFiltro('todos')}>
                            Todo
                        </p>
                        {
                            filtro === 'todos' ? (
                                <div className='rounded-pill' style={{width: '100%', height: 4 / proporcional, background: 'rgb(52, 204, 255)'}}/>
                            ) : null
                        }
                    </div>

                    <div style={{width: '20%', height: 55 / proporcional}}>
                        <p className='' style={{fontSize: 16 / proporcional, lineHeight: `${filtro === 'carga' ? 51 / proporcional : 55 / proporcional}px`, 
                                    marginBottom: 0 / proporcional, color: seleccion_filtro === 'carga' ? 'rgb(52, 204, 255)' : 'rgb(24, 54, 80)', 
                                    fontWeight: 700, fontFamily: 'Roboto, sans-serif', cursor: 'pointer',  textAlign: 'center'}} 
                                    onMouseOver={() => setSeleccionFiltro('carga')} onMouseLeave={() => setSeleccionFiltro('')}
                                    onClick={() => setFiltro('carga')}>
                            Transporte de carga
                        </p>
                        {
                            filtro === 'carga' ? (
                                <div className='rounded-pill' style={{width: '100%', height: 4 / proporcional, background: 'rgb(52, 204, 255)'}}/>
                            ) : null
                        }
                    </div>

                    <div style={{width: '20%', height: 55 / proporcional}}>
                        <p className='' style={{fontSize: 16 / proporcional, lineHeight: `${filtro === 'terrestre' ? 51 / proporcional : 55 / proporcional}px`, 
                                    marginBottom: 0 / proporcional, color: seleccion_filtro === 'terrestre' ? 'rgb(52, 204, 255)' : 'rgb(24, 54, 80)', 
                                    fontWeight: 700, fontFamily: 'Roboto, sans-serif', cursor: 'pointer',  textAlign: 'center'}} 
                                    onMouseOver={() => setSeleccionFiltro('terrestre')} onMouseLeave={() => setSeleccionFiltro('')}
                                    onClick={() => setFiltro('terrestre')}>
                            Transporte terrestre
                        </p>
                        {
                            filtro === 'terrestre' ? (
                                <div className='rounded-pill' style={{width: '100%', height: 4 / proporcional, background: 'rgb(52, 204, 255)'}}/>
                            ) : null
                        }
                    </div>

                    <div style={{width: '15%', height: 55 / proporcional}}>
                        <p className='' style={{fontSize: 16 / proporcional, lineHeight: `${filtro === 'flota' ? 51 / proporcional : 55 / proporcional}px`, 
                                    marginBottom: 0 / proporcional, color: seleccion_filtro === 'flota' ? 'rgb(52, 204, 255)' : 'rgb(24, 54, 80)', 
                                    fontWeight: 700, fontFamily: 'Roboto, sans-serif', cursor: 'pointer',  textAlign: 'center'}} 
                                    onMouseOver={() => setSeleccionFiltro('flota')} onMouseLeave={() => setSeleccionFiltro('')}
                                    onClick={() => setFiltro('flota')}>
                            Nuestra flota
                        </p>
                        {
                            filtro === 'flota' ? (
                                <div className='rounded-pill' style={{width: '100%', height: 4 / proporcional, background: 'rgb(52, 204, 255)'}}/>
                            ) : null
                        }
                    </div>


                    <div style={{width: '15%', height: 55 / proporcional}}>
                        <p className='' style={{fontSize: 16 / proporcional, lineHeight: `${filtro === 'equipo' ? 51 / proporcional : 55 / proporcional}px`, 
                                    marginBottom: 0 / proporcional, color: seleccion_filtro === 'equipo' ? 'rgb(ç)' : 'rgb(24, 54, 80)', 
                                    fontWeight: 700, fontFamily: 'Roboto, sans-serif', cursor: 'pointer',  textAlign: 'center'}} 
                                    onMouseOver={() => setSeleccionFiltro('equipo')} onMouseLeave={() => setSeleccionFiltro('')}
                                    onClick={() => setFiltro('equipo')}>
                            Nuestro equipo
                        </p>
                        {
                            filtro === 'equipo' ? (
                                <div className='rounded-pill' style={{width: '100%', height: 4 / proporcional, background: 'rgb(52, 204, 255)'}}/>
                            ) : null
                        }
                    </div>
                </div>


                <div className='d-flex justify-content-ennd' style={{width: '20%', height: 55 / proporcional}}>
                    <div className='d-flex justify-content-end' 
                        style={{width: '100%', height: 40 / proporcional, margin: 7.5 / proporcional, marginRight: 0}}>
                        <img src={icono_ampliar} style={{width: 38 / proporcional, height: 38 / proporcional, padding: 12 / proporcional, border: '1px solid rgb(52, 204, 255)',
                                cursor: 'pointer'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
