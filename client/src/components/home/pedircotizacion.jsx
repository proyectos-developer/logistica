import React from 'react'

import Especiales from './especiales.jsx'
import PedidoCotizacion from './pedidocotizacion.jsx'

export default function PedirCotizacion({proporcional}) {
        
    return (
        <div style={{width: '100%', height: 'auto', background: 'rgb(247, 247, 247(', paddingLeft: 200 / proporcional, paddingRight: 200 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <Especiales proporcional={proporcional}/>
                <PedidoCotizacion proporcional={proporcional}/>
            </div>
        </div>
    )
}
