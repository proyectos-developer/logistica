import React from 'react'

import image_00 from '../../assets/images/image_home_slider_1920_00.png'
import image_01 from '../../assets/images/image_home_slider_1920_01.png'
import image_02 from '../../assets/images/image_home_slider_1920_02.png'
import image_03 from '../../assets/images/image_home_slider_1920_03.png'

import icono_right from '../../assets/iconos/icono_carousel_right_white_96.png'
import icono_left from '../../assets/iconos/icono_carousel_left_white_96.png'

export default function SliderPrincipalTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div id='carouselhomeprincipal' className='carousel slide' data-bs-ride='carousel' style={{width: '100%', height: 800 / proporcional}}>
                <div className='carousel-indicators'>
                    <button type='button' data-bs-target='#carouselhomeprincipal' data-bs-slide-to='0' className='active' aria-current='true' aria-label='slide 1'/>
                    <button type='button' data-bs-target='#carouselhomeprincipal' data-bs-slide-to='1' aria-label='slide 2'/>
                    <button type='button' data-bs-target='#carouselhomeprincipal' data-bs-slide-to='2' aria-label='slide 3'/>
                    <button type='button' data-bs-target='#carouselhomeprincipal' data-bs-slide-to='3' aria-label='slide 4'/>
                </div>
                <div className='carousel-inner' style={{width: '100%', height: 800 / proporcional}}>
                    <div className='carousel-item active' data-bs-interval='3000' style={{width: '100%', height: 800 / proporcional}}>
                        <div className='' 
                            style={{width: '100%', height: 800 / proporcional, backgroundImage: `url(${image_00})`, backgroundPosition: 'cencter', backgroundSize: 'cover', 
                                backgroundRepeat: 'no-repeat'}}>
                            <div className='position-relative' style={{width: '100%', height: 800 / proporcional, background: 'rgba(39, 39, 39, 0.4)'}}>
                                <div className='position-absolute rounded shadow' style={{width: 320 / proporcional, height: 340 / proporcional, left: 70 / proporcional, top: 320 / proporcional,
                                    background: 'rgba(39, 39, 39, 0.6)'}}>
                                    <div style={{width: '100%', height: '100%', padding: 20 / proporcional}}>
                                        <div className='rounded-circle' style={{width: 100 / proporcional, height: 4 / proporcional, background: '#4a9ae9', marginBottom: 30 / proporcional}}/>
                                        <p className='' 
                                            style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: 'white',
                                                    fontWeight: 600, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                            Transporte <br/>continental
                                        </p>
                                        <p className='' 
                                            style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                    fontWeight: 400, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                            Para satisfacer mejor sus necesidades logísticas en constante cambio, estamos evolucionando continuamente en servicios de transporte.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carousel-item' data-bs-interval='3000'>
                        <div className='' 
                            style={{width: '100%', height: 800 / proporcional, backgroundImage: `url(${image_01})`, backgroundPosition: 'cencter', backgroundSize: 'cover', 
                                backgroundRepeat: 'no-repeat'}}>
                            <div className='position-relative' style={{width: '100%', height: 800 / proporcional, background: 'rgba(39, 39, 39, 0.4)'}}>
                                <div className='position-absolute rounded shadow' style={{width: 320 / proporcional, height: 340 / proporcional, left: 70 / proporcional, top: 320 / proporcional,
                                    background: 'rgba(39, 39, 39, 0.6)'}}>
                                    <div style={{width: '100%', height: '100%', padding: 20 / proporcional}}>
                                        <div className='rounded-circle' style={{width: 100 / proporcional, height: 4 / proporcional, background: '#4a9ae9', marginBottom: 30 / proporcional}}/>
                                        <p className='' 
                                            style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: 'white',
                                                    fontWeight: 600, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                            Entrega <br/>transatlántica
                                        </p>
                                        <p className='' 
                                            style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                    fontWeight: 400, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                            El transporte combinado por carretera de cola es especialmente adecuado para el envío de mercancías peligrosas, ya que reduce el riesgo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carousel-item' data-bs-interval='3000'>
                        <div className='' 
                            style={{width: '100%', height: 800 / proporcional, backgroundImage: `url(${image_02})`, backgroundPosition: 'cencter', backgroundSize: 'cover', 
                                backgroundRepeat: 'no-repeat'}}>
                            <div className='position-relative' style={{width: '100%', height: 800 / proporcional, background: 'rgba(39, 39, 39, 0.4)'}}>
                                <div className='position-absolute rounded shadow' style={{width: 320 / proporcional, height: 340 / proporcional, left: 70 / proporcional, top: 320 / proporcional,
                                    background: 'rgba(39, 39, 39, 0.6)'}}>
                                    <div style={{width: '100%', height: '100%', padding: 20 / proporcional}}>
                                        <div className='rounded-circle' style={{width: 100 / proporcional, height: 4 / proporcional, background: '#4a9ae9', marginBottom: 30 / proporcional}}/>
                                        <p className='' 
                                            style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: 'white',
                                                    fontWeight: 600, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                            ENTREGA POR <br/>MAR Y OCÉANO
                                        </p>
                                        <p className='' 
                                            style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                    fontWeight: 400, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                            La carga marítima-aérea es la última en cargarse y la primera en descargarse, lo que reduce el tiempo y el riesgo de transbordo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carousel-item' data-bs-interval='3000'>
                        <div className='' 
                            style={{width: '100%', height: 800 / proporcional, backgroundImage: `url(${image_03})`, backgroundPosition: 'cencter', backgroundSize: 'cover', 
                                backgroundRepeat: 'no-repeat'}}>
                            <div className='position-relative' style={{width: '100%', height: 800 / proporcional, background: 'rgba(39, 39, 39, 0.4)'}}>
                                <div className='position-absolute rounded shadow' style={{width: 320 / proporcional, height: 340 / proporcional, left: 70 / proporcional, top: 320 / proporcional,
                                    background: 'rgba(39, 39, 39, 0.6)'}}>
                                    <div style={{width: '100%', height: '100%', padding: 20 / proporcional}}>
                                        <div className='rounded-circle' style={{width: 100 / proporcional, height: 4 / proporcional, background: '#4a9ae9', marginBottom: 30 / proporcional}}/>
                                        <p className='' 
                                            style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: 'white',
                                                    fontWeight: 600, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                            ALMACÉN
                                        </p>
                                        <p className='' 
                                            style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                    fontWeight: 400, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                                            Puedes optar por plataformas dedicadas a partir de ventajas relacionadas con superficies, recursos y equipos compartidos.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='position-absolute top-50 translate-middle' data-bs-target='#carouselhomeprincipal' data-bs-slide='prev' 
                    style={{width: 48 / proporcional, height: 40 / proporcional, left: 64 / proporcional, cursor: 'pointer'}}>
                        <img src={icono_left} style={{width: 48 / proporcional, height: 48 / proporcional}}/>
                </div>
                <div className='position-absolute top-50 translate-middle' data-bs-target='#carouselhomeprincipal' data-bs-slide='next' 
                    style={{width: 48 / proporcional, height: 40 / proporcional, right: 64 / proporcional, cursor: 'pointer'}}>
                        <img src={icono_right} style={{width: 48 / proporcional, height: 48 / proporcional}}/>
                </div>
            </div>
        </div>
    )
}