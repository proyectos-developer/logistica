import React from 'react'

import image_00 from '../../assets/images/image_comentarios_1920_00.png'
import image_01 from '../../assets/images/image_comentarios_1920_01.png'
import image_02 from '../../assets/images/image_comentarios_1920_02.png'

import icono_comillas from '../../assets/iconos/icono_comillas_blue_96.png'
import icono_comillas_empty from '../../assets/iconos/icono_comillas_empty_blue_96.png'

import icono_dot_blue from '../../assets/iconos/icono_circle_blue_96.png'
import icono_dot_grey from '../../assets/iconos/icono_dot_grey_96.png'

export default function ComentariosClientes({proporcional}) {

    return (
        <div style={{width: '100%', height: 700 / proporcional}}>
            <div id='carouselhomecomentarios' className='carousel slide' data-bs-ride='carousel'
                style={{width: '100%', height: 700 / proporcional}}>
                <div className='carousel-indicators'>
                    <button type='button' data-bs-target='#carouselhomecomentarios' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'/>
                    <button type='button' data-bs-target='#carouselhomecomentarios' data-bs-slide-to='1' aria-label='Slide 1'/>
                    <button type='button' data-bs-target='#carouselhomecomentarios' data-bs-slide-to='2' aria-label='Slide 1'/>
                </div>
                <div className='carousel-inner' style={{width: '100%', height: 700 / proporcional}}>
                    <div className='carousel-item active'>
                        <div className='position-relative' style={{width: '100%', height: 700 / proporcional, backgroundImage: `url(${image_00})`, backgroundPosition: 'center', backgroundSize: 'cover', 
                                backgroundRepeat: 'no-repeat'}}>
                            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 700 / proporcional, background: 'rgb(39, 39, 39, 0.6)'}}/>
                            <div className='position-absolute shadow rounded' style={{width: 650 / proporcional, height: 450 / proporcional, top: 125 / proporcional, left: 200 / proporcional,
                                background: 'white', padding: 50 / proporcional}}>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 64 / proporcional, marginBottom: 20 / proporcional}}>
                                    <img className='rounded-circle' 
                                        src={icono_comillas} style={{width: 64 / proporcional, height: 64 / proporcional, padding: 8 / proporcional, border: '1px solid #4a9ae9'}}/>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(139, 139, 139)',
                                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                                        Anteriormente utilizábamos una empresa poco fiable con un proceso de registro y transferencia muy complicado. luego encontramos trranscargo y el control volvió a nosotros
                                    </p>
                                 </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 48 / proporcional, marginBottom: 20 / proporcional}}>
                                    <div style={{width: 100 / proporcional, height: 2 / proporcional, marginTop: 23 / proporcional, marginBottom: 23 / proporcional, background: '#4a9ae9'}}/>
                                    <img src={icono_comillas_empty} style={{width: 48 / proporcional, height: 48 / proporcional, padding: 8 / proporcional}}/>
                                    <div style={{width: 100 / proporcional, height: 2 / proporcional, marginTop: 23 / proporcional, marginBottom: 23 / proporcional, background: '#4a9ae9'}}/>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 48 / proporcional, marginBottom: 20 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 30 / proporcional, lineHeight: `${49 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(39, 39, 39)',
                                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                                        Jonathan Adams
                                    </p>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 24 / proporcional}}>
                                    <img src={icono_dot_blue} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                                    <img src={icono_dot_grey} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 3 / proporcional, marginRight: 10 / proporcional}}/>
                                    <img src={icono_dot_grey} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 3 / proporcional}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className='position-relative' style={{width: '100%', height: 700 / proporcional, backgroundImage: `url(${image_01})`, backgroundPosition: 'center', backgroundSize: 'cover', 
                                backgroundRepeat: 'no-repeat'}}>
                            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 700 / proporcional, background: 'rgb(39, 39, 39, 0.6)'}}/>
                            <div className='position-absolute top-50 start-50 translate-middle shadow rounded' style={{width: 650 / proporcional, height: 450 / proporcional, top: 125 / proporcional, left: 200 / proporcional,
                                background: 'white', padding: 50 / proporcional}}>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 64 / proporcional, marginBottom: 20 / proporcional}}>
                                    <img className='rounded-circle' 
                                        src={icono_comillas} style={{width: 64 / proporcional, height: 64 / proporcional, padding: 8 / proporcional, border: '1px solid #4a9ae9'}}/>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(139, 139, 139)',
                                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                                        Estoy contento con los servicios brindados por transcargo llc. ¡Samantha Culligan ha sido maravillosa! ¡Ella me devolvió las llamadas rápidamente y respondió todas mis preguntas!
                                    </p>
                                 </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 48 / proporcional, marginBottom: 20 / proporcional}}>
                                    <div style={{width: 100 / proporcional, height: 2 / proporcional, marginTop: 23 / proporcional, marginBottom: 23 / proporcional, background: '#4a9ae9'}}/>
                                    <img src={icono_comillas_empty} style={{width: 48 / proporcional, height: 48 / proporcional, padding: 8 / proporcional}}/>
                                    <div style={{width: 100 / proporcional, height: 2 / proporcional, marginTop: 23 / proporcional, marginBottom: 23 / proporcional, background: '#4a9ae9'}}/>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 48 / proporcional, marginBottom: 20 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 30 / proporcional, lineHeight: `${49 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(39, 39, 39)',
                                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                                        Manager, Tesla Motors Ltd.
                                    </p>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 24 / proporcional}}>
                                    <img src={icono_dot_grey} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 3 / proporcional, marginRight: 10 / proporcional}}/>
                                    <img src={icono_dot_blue} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                                    <img src={icono_dot_grey} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 3 / proporcional}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className='position-relative' style={{width: '100%', height: 700 / proporcional, backgroundImage: `url(${image_02})`, backgroundPosition: 'center', backgroundSize: 'cover', 
                                backgroundRepeat: 'no-repeat'}}>
                            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 700 / proporcional, background: 'rgb(39, 39, 39, 0.6)'}}/>
                            <div className='position-absolute top-50 start-50 translate-middle shadow rounded' style={{width: 650 / proporcional, height: 450 / proporcional, top: 125 / proporcional, right: 200 / proporcional,
                                background: 'white', padding: 50 / proporcional}}>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 64 / proporcional, marginBottom: 20 / proporcional}}>
                                    <img className='rounded-circle' 
                                        src={icono_comillas} style={{width: 64 / proporcional, height: 64 / proporcional, padding: 8 / proporcional, border: '1px solid #4a9ae9'}}/>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(139, 139, 139)',
                                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                                        Esto se debe a su excelente servicio, precios competitivos y atención al cliente. eso se está volviendo tan distante y digital que es muy refrescante tener un toque tan personal.
                                    </p>
                                 </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 48 / proporcional, marginBottom: 20 / proporcional}}>
                                    <div style={{width: 100 / proporcional, height: 2 / proporcional, marginTop: 23 / proporcional, marginBottom: 23 / proporcional, background: '#4a9ae9'}}/>
                                    <img src={icono_comillas_empty} style={{width: 48 / proporcional, height: 48 / proporcional, padding: 8 / proporcional}}/>
                                    <div style={{width: 100 / proporcional, height: 2 / proporcional, marginTop: 23 / proporcional, marginBottom: 23 / proporcional, background: '#4a9ae9'}}/>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 48 / proporcional, marginBottom: 20 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 30 / proporcional, lineHeight: `${49 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(39, 39, 39)',
                                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                                        Steve MCDonald
                                    </p>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 24 / proporcional}}>
                                    <img src={icono_dot_grey} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 3 / proporcional, marginRight: 10 / proporcional}}/>
                                    <img src={icono_dot_grey} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 3 / proporcional, marginRight: 10 / proporcional}}/>
                                    <img src={icono_dot_blue} style={{width: 24 / proporcional, height: 24 / proporcional}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='carousel-control-prev' type='button' data-bs-target='#carouselhomecomentarios' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'/>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type='button' data-bs-target='#carouselhomecomentarios' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'/>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
        </div>
    )
}
