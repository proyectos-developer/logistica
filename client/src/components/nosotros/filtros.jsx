import React, { useState } from 'react'

import image_galeria_01 from '../../assets/images/image_nosotros_galeria_77_01.png'
import image_galeria_02 from '../../assets/images/image_nosotros_galeria_77_02.png'
import image_galeria_03 from '../../assets/images/image_nosotros_galeria_77_03.png'
import image_galeria_04 from '../../assets/images/image_nosotros_galeria_77_04.png'
import image_galeria_05 from '../../assets/images/image_nosotros_galeria_77_05.png'
import image_galeria_06 from '../../assets/images/image_nosotros_galeria_77_06.png'

import image_posts_01 from '../../assets/images/image_nosotros_posts_77_01.png'
import image_posts_02 from '../../assets/images/image_nosotros_posts_77_02.png'

import icono_search from '../../assets/iconos/icono_search_nosotros_grey_96.png'
import icono_right from '../../assets/iconos/icono_right_nosotros_black_96.png'
import icono_download from '../../assets/iconos/icono_download_black_96.png'
import icono_meet from '../../assets/iconos/icono_meet_black_96.png'

export default function Filtros({proporcional}) {

    const [search, setSearch] = useState('')

    return (
        <div style={{width: '100%', height: 50 / proporcional}}>
            <div className='d-flex rounded' style={{width: '100%', height: 50 / proporcional, border: '1px solid rgb(139, 139, 139)', marginBottom: 50 / proporcional}}>
                <input 
                    type='default'
                    className='form-control border-0' 
                    style={{width: '90%', height: 46 / proporcional, fontSize: 20 / proporcional, color: 'rgb(128, 128, 128)'}}
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    id='search'
                    placeholder='buscar'/>
                <img src={icono_search} style={{width: 48 / proporcional, height: 48 / proporcional, padding: 14 / proporcional}}/>
            </div>
            <div style={{width: '100%', height: 'auto', border: '2px solid #4a9ae9', padding: 30 / proporcional, marginBottom: 50 / proporcional}}>
                <div style={{width: 100 / proporcional, height: 4 / proporcional, background: '#4a9ae9', marginBottom: 50 / proporcional}}/>
                <p className='' 
                    style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 30 / proporcional, color: 'black',
                            fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                    CATEGORÍAS
                </p>
                <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 1 / proporcional, marginRight: 10 / proporcional}}/>
                    <p className='' 
                        style={{fontSize: 18 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                        Transporte aéreo
                    </p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 1 / proporcional, marginRight: 10 / proporcional}}/>
                    <p className='' 
                        style={{fontSize: 18 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                        Contrato logístico
                    </p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 1 / proporcional, marginRight: 10 / proporcional}}/>
                    <p className='' 
                        style={{fontSize: 18 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                        Transporte terrestre
                    </p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 1 / proporcional, marginRight: 10 / proporcional}}/>
                    <p className='' 
                        style={{fontSize: 18 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                        Transporte marítimo
                    </p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 1 / proporcional, marginRight: 10 / proporcional}}/>
                    <p className='' 
                        style={{fontSize: 18 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                        Gestión SCS
                    </p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 1 / proporcional, marginRight: 10 / proporcional}}/>
                    <p className='' 
                        style={{fontSize: 18 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                        Ofertas especiales
                    </p>
                </div>
            </div>
            <div className='d-flex justify-content-start rounded-pill' 
                style={{width: '100%', height: 50 / proporcional, border: '2px solid #4a9ae9', marginBottom: 50 / proporcional, cursor: 'pointer'}}>
                <img src={icono_download} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 15 / proporcional}}/>
                <p className='' 
                    style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                            fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                    Descargar PDF
                </p>
            </div>
            <div className='d-flex justify-content-start rounded-pill' 
                style={{width: '100%', height: 50 / proporcional, border: '2px solid #4a9ae9', marginBottom: 50 / proporcional, cursor: 'pointer'}}>
                <img src={icono_meet} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 15 / proporcional}}/>
                <p className='' 
                    style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                            fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                    PREGUNTA A NUESTROS EXPERTOS
                </p>
            </div>
            <div style={{width: 100 / proporcional, background: '#4a9ae9', height: 4 / proporcional, marginBottom: 50 / proporcional}}/>
            <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <p className='' 
                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(24, 54, 80)',
                            fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                    NUESTRA GALERÍA
                </p>
                <div className='d-flex justify-content-between' style={{width: 320 / proporcional, height: 100 / proporcional, marginBottom: 10 / proporcional}}>
                    <div style={{width: 100 / proporcional, height: 100 / proporcional}}>
                        <img src={image_galeria_01} style={{width: 100 / proporcional, height: 100 / proporcional}}/>
                    </div>
                    <div style={{width: 100 / proporcional, height: 100 / proporcional}}>
                        <img src={image_galeria_02} style={{width: 100 / proporcional, height: 100 / proporcional}}/>
                    </div>
                    <div style={{width: 100 / proporcional, height: 100 / proporcional}}>
                        <img src={image_galeria_03} style={{width: 100 / proporcional, height: 100 / proporcional}}/>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: 320 / proporcional, height: 100 / proporcional}}>
                    <div style={{width: 100 / proporcional, height: 100 / proporcional}}>
                        <img src={image_galeria_04} style={{width: 100 / proporcional, height: 100 / proporcional}}/>
                    </div>
                    <div style={{width: 100 / proporcional, height: 100 / proporcional}}>
                        <img src={image_galeria_05} style={{width: 100 / proporcional, height: 100 / proporcional}}/>
                    </div>
                    <div style={{width: 100 / proporcional, height: 100 / proporcional}}>
                        <img src={image_galeria_06} style={{width: 100 / proporcional, height: 100 / proporcional}}/>
                    </div>
                </div>
            </div>
            <div style={{width: 100 / proporcional, background: '#4a9ae9', height: 4 / proporcional, marginBottom: 50 / proporcional}}/>
            <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <p className='' 
                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(24, 54, 80)',
                            fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                    POSTS RECIENTES
                </p>
                <div className='d-flex' style={{width: '100%', height: 100 / proporcional, marginBottom: 20 / proporcional}}>
                    <img src={image_posts_01} style={{width: 100 / proporcional, height: 100 / proporcional, marginRight: 10 / proporcional}}/>
                    <div style={{width: 'auto', height: 100 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(128, 128, 128)',
                                    fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                            Noviembre 26, 2023
                        </p>
                        <p className='' 
                            style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 600, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                            Enfrentar los desafíos de la complejidad de la cadena.
                        </p>
                    </div>
                </div>
                <div style={{width: '100%', background: 'rgb(139, 139, 139)', height: 2 / proporcional, marginBottom: 20 / proporcional}}/>
                <div className='d-flex' style={{width: '100%', height: 100 / proporcional}}>
                    <img src={image_posts_02} style={{width: 100 / proporcional, height: 100 / proporcional, marginRight: 10 / proporcional}}/>
                    <div style={{width: 'auto', height: 100 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(128, 128, 128)',
                                    fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                            Noviembre 24, 2023
                        </p>
                        <p className='' 
                            style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 600, fontFamily: 'Roboto, sans-serif', cursor: 'default'}}>
                            Nos unimos a la organización ambiental CCWG.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
