import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CardNoticia({proporcional, noticia}) {

    const navigate = useNavigate()

    const [seleccion_noticia, setSeleccionNoticia] = useState ('')

    return (
        <div style={{width: '100%', height: 252 / proporcional, border: '1px solid rgb(128, 128, 128)', marginBottom: 30 / proporcional}}>
            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                <div className='position-relative' style={{width: 400 / proporcional, height: 250 / proporcional}}>
                    <img src={noticia.image} style={{width: 400 / proporcional, height: 250 / proporcional}}/>
                    <div className='position-absolute top-0 end-0' style={{width: 100 / proporcional, height: 70 / proporcional, background: 'rgb(52, 204, 255)'}}>
                        <p className='' 
                            style={{fontSize: 24 / proporcional, lineHeight: `${35 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                    fontWeight: 700, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            {noticia.fecha}
                        </p>
                        <p className='' 
                            style={{fontSize: 24 / proporcional, lineHeight: `${35 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                    fontWeight: 300, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            {noticia.mes}
                        </p>
                    </div>
                </div>
                <div style={{width: '100%', height: 250 / proporcional, padding: 30 / proporcional}}>
                    <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 12 / proporcional, color: 'rgb(24, 54, 80)',
                                        fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'pointer', textAlign: 'left',
                                        textDecoration: seleccion_noticia === noticia.id ? 'underline' : 'none'}}
                                        onMouseOver={() => setSeleccionNoticia(noticia.id)} onMouseLeave={() => setSeleccionNoticia('')}
                                        onClick={() => navigate (`/noticias/${noticia.id}`)}>
                        {noticia.titulo}
                    </p>
                    <p className='' 
                                style={{fontSize: 13 / proporcional, lineHeight: `${15 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(52, 204, 255)',
                                        fontWeight: 300, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                        <span style={{color: 'rgb(128, 128, 128)'}}>Categorías:</span> {noticia.categorias}
                    </p>
                    <p className='' 
                                style={{fontSize: 13 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 12 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                        {noticia.descripcion}
                    </p>
                </div>
            </div>
        </div>
    )
}
