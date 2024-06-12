import React from 'react'

import SliderPrincipal from './sliderprincipal.jsx'
import IconosSlider from './iconosslider.jsx'
import SubtituloSlider from './subtituloslider.jsx'
import Bienvenido from './bienvenido.jsx'
import Caracteristicas from './caracteristicas.jsx'
import ServiciosEspeciales from './serviciosespeciales.jsx'
import Contactanos from './contactanos.jsx'
import UltimasNoticias from './ultimasnoticias.jsx'
import ComentariosClientes from './comentariosclientes.jsx'
import PedirCotizacion from './pedircotizacion.jsx'
import MapaUbicacion from './mapubicacion.jsx'

export default function HomePanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 1000 / proporcional}}>
                <SliderPrincipal proporcional={proporcional}/>
                <IconosSlider proporcional={proporcional}/>
            </div>
            <SubtituloSlider proporcional={proporcional}/>
            <Bienvenido proporcional={proporcional}/>
            <Caracteristicas proporcional={proporcional}/>
            <ServiciosEspeciales proporcional={proporcional}/>
            <Contactanos proporcional={proporcional}/>
            <UltimasNoticias proporcional={proporcional}/>
            <ComentariosClientes proporcional={proporcional}/>
            <PedirCotizacion proporcional={proporcional}/>
            <MapaUbicacion proporcional={proporcional}/>
        </div>
    )
}