import React from 'react'

import image_servicios from '../../assets/images/image_servicios_475_02.png'

export default function SolucionesCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 'auto', marginBottom: 25 / proporcional}}>
                    <div style={{width: 100 / proporcional, background: '#4a9ae9', height: 4 / proporcional, marginBottom: 50 / proporcional}}/>
                    <p style={{fontSize: 30 / proporcional, fontWeight: 300, lineHeight: `${40 / proporcional}px`, color: 'rgb(24, 54, 80)', marginBottom: 35}}>
                        SOLUCIONES EFECTIVAS
                    </p>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 0}}>
                        Usted se beneficiará de nuestra experiencia en la entrega de soluciones efectivas a las complejas cadenas de suministro globales de algunas de las corporaciones más grandes del mundo. Usted se beneficia de cada innovación, ya sea que implique una simple extensión de nuestros productos de transporte aéreo y marítimo, ya sea que signifique un desarrollo en el almacenamiento o que requiera un modelo de cadena de suministro integrada completamente nuevo.
                    </p>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: '80%'}}>
                    <img src={image_servicios} style={{width: '90%', height: 317 / proporcional}}/>
                </div>
            </div>
        </div>
    )
}
