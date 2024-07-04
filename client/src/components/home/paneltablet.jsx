import React from 'react'

import SliderPrincipalTablet from './sliderprincipaltablet.jsx'
import IconosSliderTablet from './iconosslidertablet.jsx'
import SubtituloSliderTablet from './subtituloslidertablet.jsx'
import BienvenidoTablet from './bienvenidotablet.jsx'
import CaracteristicasTablet from './caracteristicastablet.jsx'
import ServiciosEspecialesTablet from './serviciosespecialestablet.jsx'
import ContactanosTablet from './contactanostablet.jsx'
import UltimasNoticiasTablet from './ultimasnoticiastablet.jsx'
import ComentariosClientesTablet from './comentariosclientestablet.jsx'
import PedirCotizacionTablet from './pedircotizaciontablet.jsx'
import MapaUbicacionTablet from './mapubicaciontablet.jsx'

export default function HomePanelTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 800 / proporcional}}>
                <SliderPrincipalTablet proporcional={proporcional}/>
                <IconosSliderTablet proporcional={proporcional}/>
            </div>
            <SubtituloSliderTablet proporcional={proporcional}/>
            <BienvenidoTablet proporcional={proporcional}/>
            <CaracteristicasTablet proporcional={proporcional}/>
            <ServiciosEspecialesTablet proporcional={proporcional}/>
            <ContactanosTablet proporcional={proporcional}/>
            <UltimasNoticiasTablet proporcional={proporcional}/>
            <ComentariosClientesTablet proporcional={proporcional}/>
            <PedirCotizacionTablet proporcional={proporcional}/>
            <MapaUbicacionTablet proporcional={proporcional}/>
        </div>
    )
}