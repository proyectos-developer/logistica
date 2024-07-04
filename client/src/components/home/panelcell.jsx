import React from 'react'

import SliderPrincipalCell from './sliderprincipalcell.jsx'
import IconosSliderCell from './iconosslidercell.jsx'
import SubtituloSliderCell from './subtituloslidercell.jsx'
import BienvenidoCell from './bienvenidocell.jsx'
import CaracteristicasCell from './caracteristicascell.jsx'
import ServiciosEspecialesCell from './serviciosespecialescell.jsx'
import ContactanosCell from './contactanoscell.jsx'
import UltimasNoticiasCell from './ultimasnoticiascell.jsx'
import ComentariosClientesCell from './comentariosclientescell.jsx'
import PedirCotizacionCell from './pedircotizacioncell.jsx'
import MapaUbicacionCell from './mapubicacioncell.jsx'

export default function HomePanelCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 800 / proporcional}}>
                <SliderPrincipalCell proporcional={proporcional}/>
                <IconosSliderCell proporcional={proporcional}/>
            </div>
            <SubtituloSliderCell proporcional={proporcional}/>
            <BienvenidoCell proporcional={proporcional}/>
            <CaracteristicasCell proporcional={proporcional}/>
            <ServiciosEspecialesCell proporcional={proporcional}/>
            <ContactanosCell proporcional={proporcional}/>
            <UltimasNoticiasCell proporcional={proporcional}/>
            <ComentariosClientesCell proporcional={proporcional}/>
            <PedirCotizacionCell proporcional={proporcional}/>
            <MapaUbicacionCell proporcional={proporcional}/>
        </div>
    )
}