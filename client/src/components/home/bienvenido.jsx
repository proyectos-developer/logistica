import React from 'react'

import ReactPlayer from 'react-player'

import video_home from '../../assets/video/video_home_00.mp4'

export default function Bienvenido({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 200 / proporcional, paddingRight: 200 / proporcional, paddingTop: 150 / proporcional, paddingBottom: 150 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '48%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                    <div className='rounded-pill' style={{width: 100 / proporcional, height: 4 / proporcional, background: '#4a9ae9', marginBottom: 30 / proporcional}}/>
                    <p className='' 
                        style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: '#1c4c96',
                                fontWeight: 600, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                        Beinvenidos a nuestra web!
                    </p>
                    <p className='' 
                        style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(128, 128, 128)',
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                        Transcargo hace que el negocio fluya. Como una de las principales empresas del mundo en gestión de cadenas de suministro no basadas en activos, diseñamos e implementamos soluciones líderes en la industria tanto en la gestión de carga
                    </p>
                    <p className='' 
                        style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(128, 128, 128)',
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                        Más de 42.000 empleados dedicados, que trabajan en 17 grupos regionales en todo el mundo, brindan excelencia operativa para brindar respuestas viables a las preguntas más desafiantes de la cadena de suministro.
                    </p>
                </div>
                <div style={{width: '48%', height: 400 / proporcional}}>
                    <ReactPlayer
                        className=''
                        url= {video_home}
                        width='100%'
                        height={400 / proporcional}
                        style={{background: '#efefef'}}
                        playing={true}
                        loop={true}/>
                </div>
            </div>
        </div>
    )
}
