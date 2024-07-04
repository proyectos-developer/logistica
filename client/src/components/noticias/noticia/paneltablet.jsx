import React, {useState} from 'react'

import {useLocation} from 'react-router-dom'

import image_00 from '../../../assets/images/image_noticias_350_00.png'
import image_01 from '../../../assets/images/image_noticias_350_01.png'
import image_02 from '../../../assets/images/image_noticias_350_02.png'
import image_03 from '../../../assets/images/image_noticias_350_03.png'
import image_04 from '../../../assets/images/image_noticias_350_04.png'
import image_05 from '../../../assets/images/image_noticias_350_05.png'
import image_06 from '../../../assets/images/image_noticias_350_06.png'
import image_07 from '../../../assets/images/image_noticias_350_07.png'

import ImagePrincipalTablet from './imageprincipaltablet.jsx'
import DetallesTablet from './detallestablet.jsx'
import FiltrosTablet from '../../nosotros/filtrostablet.jsx'

export default function DetallesNoticiaTablet({proporcional}) {

    const location = useLocation()

    const [id_noticia, setIdNoticia] = useState(location.pathname.split('/')[2])

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
        <div style={{width: '100%', height: '100%'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='position-relative' style={{width: '100%', height: 350 / proporcional}}>
                    <ImagePrincipalTablet proporcional={proporcional}/>
                </div>
                <div style={{width: '100%', height: 'auto', paddingTop: 20 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, marginBottom: 80 / proporcional}}>
                    <div style={{width: '100%', height: 50 / proporcional}}>
                        <div className='d-flex' style={{width: '100%', height: 50 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: '#183650',
                                        fontWeight: 600, fontFamily: 'Roboto, sans-serif', cursor: 'pointer', marginRight: 10 / proporcional}}>
                                Inicio
                            </p>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'pointer', marginRight: 10 / proporcional}}>
                                /
                            </p>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'pointer'}}>
                                Noticias
                            </p>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'pointer', marginRight: 10 / proporcional}}>
                                /
                            </p>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'pointer'}}>
                                {lista_noticias[id_noticia].categoria}
                            </p>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'pointer', marginRight: 10 / proporcional}}>
                                /
                            </p>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'pointer'}}>
                                {lista_noticias[id_noticia].titulo}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                <div style={{width: '100%', height: '100%'}}>
                    <DetallesTablet proporcional={proporcional} noticia={lista_noticias[id_noticia]}/>
                </div>

                <div style={{width: '100%', height: '100%'}}>
                    <FiltrosTablet proporcional={proporcional}/>
                </div>
            </div>
        </div>
    )
}
