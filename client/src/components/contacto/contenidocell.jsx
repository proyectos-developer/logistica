import React from 'react'

export default function ContenidoCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: 100 / proporcional, background: '#4a9ae9', height: 4 / proporcional, marginBottom: 50 / proporcional}}/>
            <div style={{width: '100%', height: 'auto', marginBottom: 100 / proporcional}}>
                <p className='' 
                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 32 / proporcional, color: 'rgb(24, 54, 80)',
                            fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                    PONTE EN CONTACTO
                </p>
                <p className='' 
                    style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(128, 128, 128)',
                            fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                    Si tiene alguna pregunta sobre BestLogistics o cómo podemos respaldar su negocio, contáctenos directamente seleccionando una de las categorías a continuación que sea más relevante para su consulta y complete nuestro breve formulario de comentarios.
                </p>
            </div>  
        </div>
    )
}
