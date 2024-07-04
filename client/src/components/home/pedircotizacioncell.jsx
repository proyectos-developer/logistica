import React from 'react'

import EspecialesCell from './especialescell.jsx'
import PedidoCotizacionCell from './pedidocotizacioncell.jsx'

export default function PedirCotizacionCell({proporcional}) {
        
    return (
        <div style={{width: '100%', height: 'auto', background: 'rgb(247, 247, 247)'}}>
            <div className='' style={{width: '100%', height: 'auto'}}>
                <EspecialesCell proporcional={proporcional}/>
                <PedidoCotizacionCell proporcional={proporcional}/>
            </div>
        </div>
    )
}
