import React from 'react'

import EspecialesTablet from './especialestablet.jsx'
import PedidoCotizacionTablet from './pedidocotizaciontablet.jsx'

export default function PedirCotizacionTablet({proporcional}) {
        
    return (
        <div style={{width: '100%', height: 'auto', background: 'rgb(247, 247, 247)', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <div className='' style={{width: '100%', height: 'auto'}}>
                <EspecialesTablet proporcional={proporcional}/>
                <PedidoCotizacionTablet proporcional={proporcional}/>
            </div>
        </div>
    )
}
