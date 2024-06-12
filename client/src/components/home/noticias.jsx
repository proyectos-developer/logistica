import React, { useState } from 'react'

import image_00 from '../../assets/images/image_news_300_00.png'
import image_01 from '../../assets/images/image_news_300_01.png'
import image_02 from '../../assets/images/image_news_300_02.png'

import icono_right from '../../assets/iconos/icono_arrow_right_blue_96.png'
import icono_right_bluedark from '../../assets/iconos/icono_arrow_right_bluedark_96.png'
import icono_right_white from '../../assets/iconos/icono_arrow_right_white_96.png'

import icono_dot_grey from '../../assets/iconos/icono_dot_grey_96.png'
import icono_dot_blue from '../../assets/iconos/icono_circle_blue_96.png'

export default function Noticias({proporcional}) {
    
    const [boton_noticias, setBotonNoticias] = useState(false)

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='rounded-pill' style={{width: 100 / proporcional, height: 4 / proporcional, background: '#4a9ae9', marginBottom: 30 / proporcional}}/>
            <p className='' 
                style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: '#1c4c96',
                        fontWeight: 600, fontFamily: 'Lato, sans-serif', cursor: 'default', textAlign: 'left'}}>
                Últimas noticias
            </p>
            <div className='d-flex rounded' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <div id='carouselhomenoticas' className='carousel slide'  data-bs-ride='carousel' style={{width: '50%', height: 350 / proporcional}}>
                    <div className='carousel-inner'>
                        <div className='carousel-item active' data-bs-interval='2000'>
                            <div className='position-relative' style={{width: '100%', height: 350 / proporcional}}>
                                <img className='rounded-left' src={image_00} style={{width: '100%', height: 350 / proporcional}}/>
                                <div className='position-absolute top-0 end-0' style={{width: 75 / proporcional, height: 95 / proporcional, background: '#4a9ae9', padding: 10 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 25 / proporcional, lineHeight: `${37.5 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                fontWeight: 600, fontFamily: 'Lato, sans-serif', cursor: 'default', textAlign: 'center'}}>
                                        23<br/>Nov
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='carousel-item' data-bs-interval='2000'>
                            <div className='position-relative' style={{width: '50%', height: 350 / proporcional}}>
                                <img className='rounded-left' src={image_01} style={{width: '100%', height: 350 / proporcional}}/>
                                <div className='position-absolute top-0 end-0' style={{width: 75 / proporcional, height: 95 / proporcional, background: '#4a9ae9', padding: 10 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 25 / proporcional, lineHeight: `${37.5 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                fontWeight: 600, fontFamily: 'Lato, sans-serif', cursor: 'default', textAlign: 'center'}}>
                                        23<br/>Nov
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='carousel-item' data-bs-interval='2000'>
                            <div className='position-relative' style={{width: '50%', height: 350 / proporcional}}>
                                <img className='rounded-left' src={image_02} style={{width: '100%', height: 350 / proporcional}}/>
                                <div className='position-absolute top-0 end-0' style={{width: 75 / proporcional, height: 95 / proporcional, background: '#4a9ae9', padding: 10 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 25 / proporcional, lineHeight: `${37.5 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                fontWeight: 600, fontFamily: 'Lato, sans-serif', cursor: 'default', textAlign: 'center'}}>
                                        23<br/>Nov
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width: '50%', height: 350 / proporcional, border: '1px solid rgb(139, 139, 139)', borderLeft: '0px', padding: 20 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 25 / proporcional, lineHeight: `${35 / proporcional}px`, marginBottom: 20 / proporcional, color: '#1c4c96',
                                fontWeight: 600, fontFamily: 'Lato, sans-serif', cursor: 'default', textAlign: 'left'}}>
                        El puerto de Tianjin quedó paralizado tras las explosiones.
                    </p>
                    <p className='' 
                        style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(128, 128, 128)',
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                        La explosión en el puerto marítimo de Binhai en Tianjin causó graves daños a numerosos almacenes.
                    </p>
                    <div className='d-flex rounded-right' style={{width: '100%', height: 20 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 20 / proporcional, color: '#4a9ae9',
                                    fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'pointer', textAlign: 'left', marginRight: 10 / proporcional}}>
                            Leer más
                        </p>
                        <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional}}/>
                    </div>
                </div>
            </div>
            <div className='d-flex' style={{width: '100%', height: 50 / proporcional}}>
                <div className='d-flex' style={{width: '50%', height: 50 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                    <img src={icono_dot_grey} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 10 / proporcional}}/>
                    <img src={icono_dot_grey} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 10 / proporcional}}/>
                    <img src={icono_dot_blue} style={{width: 20 / proporcional, height: 20 / proporcional}}/>
                </div>
                <div className='d-flex justify-content-end' style={{width: '100%', height: 50 / proporcional}}>
                    <div className='d-flex justify-content-center rounded-pill' style={{width: '60%', height: 50 / proporcional, border: '1px solid #4a9ae9', cursor: 'pointer',
                            background: boton_noticias ? '#4a9ae9' : 'white'}}
                        onMouseOver={() => setBotonNoticias(true)} onMouseLeave={() => setBotonNoticias(false)}>
                        <p className='' 
                            style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0 / proporcional, color: boton_noticias ? 'white' : '#4a9ae9',
                                    fontWeight: 600, fontFamily: 'Roboto, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                            Todas las noticias
                        </p>
                        <img src={boton_noticias ? icono_right_white : icono_right_bluedark} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 16 / proporcional, marginRight: 0}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
