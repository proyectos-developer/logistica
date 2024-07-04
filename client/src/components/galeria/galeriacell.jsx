import React, { useState } from 'react'

import image_00 from '../../assets/images/image_galeria_00_450.png'
import image_01 from '../../assets/images/image_galeria_01_450.png'
import image_02 from '../../assets/images/image_galeria_02_450.png'
import image_03 from '../../assets/images/image_galeria_03_450.png'
import image_04 from '../../assets/images/image_galeria_04_450.png'
import image_05 from '../../assets/images/image_galeria_05_450.png'
import image_06 from '../../assets/images/image_galeria_06_450.png'
import image_07 from '../../assets/images/image_galeria_07_450.png'
import image_08 from '../../assets/images/image_galeria_08_450.png'
import image_09 from '../../assets/images/image_galeria_09_450.png'

import icono_search from '../../assets/iconos/icono_search_white_96.png'

export default function GaleriaCell({proporcional}) {

    const [seleccion_image, setSeleccionImage] = useState('')

    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                <div className='d-flex justify-content-center position-relative' style={{width: '100%', height: 'auto'}}
                    onMouseOver={() => setSeleccionImage('0')} onMouseLeave={() => setSeleccionImage('')}>
                    <img src={image_00} style={{width: '90%', height: '90%'}}/>
                    {
                        seleccion_image === '0' ? ( 
                            <div className='position-absolute start-50 top-50 translate-middle' style={{width: 48 / proporcional, height: 48 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_search} style={{width: 48 / proporcional, height: 48 / proporcional}}/>
                            </div>
                        ) : null
                    }
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                <div className='d-flex justify-content-center position-relative' style={{width: '100%', height: 'auto'}}
                    onMouseOver={() => setSeleccionImage('1')} onMouseLeave={() => setSeleccionImage('')}>
                    <img src={image_01} style={{width: '90%', height: '90%'}}/>
                    {
                        seleccion_image === '1' ? ( 
                            <div className='position-absolute start-50 top-50 translate-middle' style={{width: 48 / proporcional, height: 48 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_search} style={{width: 48 / proporcional, height: 48 / proporcional}}/>
                            </div>
                        ) : null
                    }
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                <div className='d-flex justify-content-center position-relative' style={{width: '100%', height: 'auto'}}
                    onMouseOver={() => setSeleccionImage('2')} onMouseLeave={() => setSeleccionImage('')}>
                    <img src={image_02} style={{width: '90%', height: '90%'}}/>
                    {
                        seleccion_image === '2' ? ( 
                            <div className='position-absolute start-50 top-50 translate-middle' style={{width: 48 / proporcional, height: 48 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_search} style={{width: 48 / proporcional, height: 48 / proporcional}}/>
                            </div>
                        ) : null
                    }
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                <div className='d-flex justify-content-center position-relative' style={{width: '100%', height: 'auto'}}
                    onMouseOver={() => setSeleccionImage('3')} onMouseLeave={() => setSeleccionImage('')}>
                    <img src={image_03} style={{width: '90%', height: '90%'}}/>
                    {
                        seleccion_image === '3' ? ( 
                            <div className='position-absolute start-50 top-50 translate-middle' style={{width: 48 / proporcional, height: 48 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_search} style={{width: 48 / proporcional, height: 48 / proporcional}}/>
                            </div>
                        ) : null
                    }
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                <div className='d-flex justify-content-center position-relative' style={{width: '100%', height: 'auto'}}
                    onMouseOver={() => setSeleccionImage('4')} onMouseLeave={() => setSeleccionImage('')}>
                    <img src={image_04} style={{width: '90%', height: '90%'}}/>
                    {
                        seleccion_image === '4' ? ( 
                            <div className='position-absolute start-50 top-50 translate-middle' style={{width: 48 / proporcional, height: 48 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_search} style={{width: 48 / proporcional, height: 48 / proporcional}}/>
                            </div>
                        ) : null
                    }
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                <div className='d-flex justify-content-center position-relative' style={{width: '100%', height: 'auto'}}
                    onMouseOver={() => setSeleccionImage('5')} onMouseLeave={() => setSeleccionImage('')}>
                    <img src={image_05} style={{width: '90%', height: '90%'}}/>
                    {
                        seleccion_image === '5' ? ( 
                            <div className='position-absolute start-50 top-50 translate-middle' style={{width: 48 / proporcional, height: 48 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_search} style={{width: 48 / proporcional, height: 48 / proporcional}}/>
                            </div>
                        ) : null
                    }
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                <div className='d-flex justify-content-center position-relative' style={{width: '100%', height: 'auto'}}
                    onMouseOver={() => setSeleccionImage('6')} onMouseLeave={() => setSeleccionImage('')}>
                    <img src={image_06} style={{width: '90%', height: '90%'}}/>
                    {
                        seleccion_image === '6' ? ( 
                            <div className='position-absolute start-50 top-50 translate-middle' style={{width: 48 / proporcional, height: 48 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_search} style={{width: 48 / proporcional, height: 48 / proporcional}}/>
                            </div>
                        ) : null
                    }
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                <div className='d-flex justify-content-center position-relative' style={{width: '100%', height: 'auto'}}
                    onMouseOver={() => setSeleccionImage('7')} onMouseLeave={() => setSeleccionImage('')}>
                    <img src={image_07} style={{width: '90%', height: '90%'}}/>
                    {
                        seleccion_image === '7' ? ( 
                            <div className='position-absolute start-50 top-50 translate-middle' style={{width: 48 / proporcional, height: 48 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_search} style={{width: 48 / proporcional, height: 48 / proporcional}}/>
                            </div>
                        ) : null
                    }
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                <div className='d-flex justify-content-center position-relative' style={{width: '100%', height: 'auto'}}
                    onMouseOver={() => setSeleccionImage('8')} onMouseLeave={() => setSeleccionImage('')}>
                    <img src={image_08} style={{width: '90%', height: '90%'}}/>
                    {
                        seleccion_image === '8' ? ( 
                            <div className='position-absolute start-50 top-50 translate-middle' style={{width: 48 / proporcional, height: 48 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_search} style={{width: 48 / proporcional, height: 48 / proporcional}}/>
                            </div>
                        ) : null
                    }
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                <div className='d-flex justify-content-center position-relative' style={{width: '100%', height: 'auto'}}
                    onMouseOver={() => setSeleccionImage('9')} onMouseLeave={() => setSeleccionImage('')}>
                    <img src={image_09} style={{width: '90%', height: '90%'}}/>
                    {
                        seleccion_image === '9' ? ( 
                            <div className='position-absolute start-50 top-50 translate-middle' style={{width: 48 / proporcional, height: 48 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_search} style={{width: 48 / proporcional, height: 48 / proporcional}}/>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}
