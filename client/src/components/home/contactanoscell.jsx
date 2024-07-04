import React, { useState } from 'react'

import image_contactanos from '../../assets/images/image_contactanos_1920.png'

export default function ContactanosTablet({proporcional}) {

    const [boton_contactar, setBotonContactar] = useState(false)

    return (
        <div className='' style={{width: '100%', height: 350 / proporcional, backgroundImage: `url(${image_contactanos})`, backgroundPosition: 'center', backgroundSize: 'center', 
                backgroundRepeat: 'no-repeat'}}>
            <div className='' 
                style={{background: 'rgba(139, 139, 139, 0.6)', paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                    width: '100%', height: 350 / proporcional}}>
                <div style={{width: '100%', height: 'auto'}}>
                    <p className='' 
                        style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 20 / proporcional, color: '#1c4c96',
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                        Alcanza tu destino <br/>100% seguro.
                    </p>
                    <p className='' 
                        style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                fontWeight: 400, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                        Diseñamos diseños de página de inicio detallados que se adaptarán a cualquier tamaño de industria del transporte. ¡Nos encargaremos de su carga o de su pasajero y los entregaremos de forma segura y a tiempo!
                    </p>
                    <button className='btn rounded-pill' style={{width: '60%', height: 50 / proporcional, fontSize: 20 / proporcional, 
                        color: boton_contactar ? '#4a9ae9' : 'white', fontWeight: 500, fontFamily: 'Roboto, sans-serif',
                        background: boton_contactar ? 'transparent' : '#4a9ae9', border: '1px solid #4a9ae9'}} 
                        onMouseOver={() => setBotonContactar(true)} onMouseLeave={() => setBotonContactar(false)}>
                        Contáctanos ahora
                    </button>
                </div>
            </div>
        </div>
    )
}
