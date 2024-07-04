import React, { useState } from 'react'

import image_00 from '../../assets/images/image_noticias_350_00.png'
import image_01 from '../../assets/images/image_noticias_350_01.png'
import image_02 from '../../assets/images/image_noticias_350_02.png'
import image_03 from '../../assets/images/image_noticias_350_03.png'
import image_04 from '../../assets/images/image_noticias_350_04.png'
import image_05 from '../../assets/images/image_noticias_350_05.png'
import image_06 from '../../assets/images/image_noticias_350_06.png'
import image_07 from '../../assets/images/image_noticias_350_07.png'

import icono_right_black from '../../assets/iconos/icono_right_black_96.png'
import icono_right_white from '../../assets/iconos/icono_right_white_96.png'

import CardNoticiaTablet from './card/noticiatablet.jsx'
import { useNavigate } from 'react-router-dom'

export default function NoticiasTablet({proporcional}) {

    const navigate = useNavigate()
    
    const [boton_siguiente, setBotonSiguiente] = useState(false)

    const lista_noticias = [
        {id: '0', image: image_00, fecha: '26', mes: 'Nov', titulo: 'ENFRENTE LOS DESAFÍOS DE LA COMPLEJIDAD DE LA CADENA', categorias: 'Logística por ContratoOfertas Especiales', descripcion: 'Fundado en 2005, el grupo ha crecido hasta contar con más de 30 personas y ha completado 900 proyectos.'},
        {id: '1', image: image_01, fecha: '24', mes: 'Nov', titulo: 'NOS UNIMOS AL CCWG DE LA ORGANIZACIÓN AMBIENTAL', categorias: 'Transporte MarítimoOfertas Especiales', descripcion: 'Líderes mundiales en transporte marítimo de contenedores, crean y utilizan herramientas prácticas para medir'},
        {id: '2', image: image_02, fecha: '23', mes: 'Nov', titulo: 'EL PUERTO DE TIANJIN SE PARALÓ DESPUÉS DE EXPLOSIONES', categorias: 'Transporte AéreoOfertas Especiales', descripcion: 'La explosión en el puerto oceánico de Binhai en Tianjin causó graves daños a muchos almacenes'},
        {id: '3', image: image_03, fecha: '21', mes: 'Nov', titulo: 'RONDAS DE MODELADO, OPTIMIZACIÓN Y SIMULACIÓN', categorias: 'Logística por ContratoOfertas Especiales', descripcion: 'El modelado, la optimización y la simulación de clase mundial completan la cartera'},
        {id: '4', image: image_04, fecha: '16', mes: 'Nov', titulo: 'SUS OBJETIVOS COMERCIALES A CORTO Y LARGO PLAZO', categorias: '', descripcion: 'Además del capital humano del equipo de Network Solutions, expertos en el dominio de todas las áreas'},
        {id: '5', image: image_05, fecha: '15', mes: 'Nov', titulo: 'PARA LA SEMANA EUROPEA DEL DESARROLLO SOSTENIBLE', categorias: '', descripcion: 'Contribuir activamente a los esfuerzos de la organización francesa para proporcionar comidas.'},
        {id: '6', image: image_06, fecha: '14', mes: 'Nov', titulo: 'NUESTRO OBJETIVO ES TOMAR DECISIONES OBJETIVAS E INTELIGENTES', categorias: '', descripcion: 'Vea cuál es nuestro objetivo para permitirle tomar decisiones objetivas que equilibren los costos.'},
        {id: '7', image: image_07, fecha: '12', mes: 'Nov', titulo: 'Las clientas confían en nosotras para ayudarlas', categorias: '', descripcion: 'El equipo coordinó el transporte de una terminal construida por Van Aalst Bulk Handling y conoce el procedimiento.'},
    ]

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                {
                    lista_noticias && lista_noticias.length > 0 ? (
                        lista_noticias.map ((noticia, index) => {
                            return (
                                <CardNoticiaTablet proporcional={proporcional} noticia={lista_noticias[index]}/>
                            )
                        })
                    ) : null
                }
            </div>
            <div className='d-flex' style={{width: '100%', height: 52 / proporcional, marginBottom: 100 / proporcional}}>
                <div className='rounded-circle' style={{width: 52 / proporcional, height: 52 / proporcional, border: '1px solid rgb(128, 128, 128)'}}>
                    <p className='' 
                        style={{fontSize: 14 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                                fontWeight: 700, fontFamily: 'Roboto, sans-serif', cursor: 'pointer', textAlign: 'center'}}>
                        1
                    </p>
                </div>
                <div className='' style={{width: 52 / proporcional, height: 52 / proporcional, marginRight: 19 / proporcional, marginLeft: 19 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 14 / proporcional, lineHeight: `${52 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(24, 54, 80)',
                                fontWeight: 700, fontFamily: 'Roboto, sans-serif', cursor: 'pointer', textAlign: 'center'}}>
                        2
                    </p>
                </div>
                <div className='rounded-pill d-flex justify-content-center' style={{width: 150 / proporcional, height: 52 / proporcional, border: '1px solid rgb(52, 204, 255)',
                        background: boton_siguiente ? 'rgb(52, 204, 255)' : 'transparent', cursor: 'pointer'}}
                    onMouseOut={() => setBotonSiguiente(true)} onMouseLeave={() => setBotonSiguiente(false)}
                    onClick={() => navigate ('/noticias')}>
                    <p className='' 
                        style={{fontSize: 14 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0 / proporcional, color: boton_siguiente ? 'white' : 'rgb(24, 54, 80)',
                                fontWeight: 700, fontFamily: 'Roboto, sans-serif', cursor: 'pointer', textAlign: 'center'}}>
                        Siguiente
                    </p>
                    <img src={boton_siguiente ? icono_right_white: icono_right_black} style={{width: 50 / proporcional, height: 50 / proporcional, padding: 14 / proporcional, paddingRight: 0,
                            paddingLeft: 28 / proporcional
                    }}/>
                </div>
            </div>
        </div>
    )
}
