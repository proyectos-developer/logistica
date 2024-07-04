import { useState, useEffect } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './styles.css'

import GlobalPanel from './components/global/panel.jsx'
import GlobalPanelTablet from './components/global/paneltablet.jsx'
import GlobalPanelCell from './components/global/panelcell.jsx'

import HomePanel from './components/home/panel.jsx'
import HomePanelTablet from './components/home/paneltablet.jsx'
import HomePanelCell from './components/home/panelcell.jsx'

import NosotrosPanel from './components/nosotros/panel.jsx'
import NosotrosPanelTablet from './components/nosotros/paneltablet.jsx'
import NosotrosPanelCell from './components/nosotros/panelcell.jsx'

import ServiciosPanel from './components/servicios/panel.jsx'
import ServiciosPanelTablet from './components/servicios/paneltablet.jsx'
import ServiciosPanelCell from './components/servicios/panelcell.jsx'

import DetallesServicioPanel from './components/servicios/detalles/panel.jsx'
import DetallesServicioPanelTablet from './components/servicios/detalles/paneltablet.jsx'
import DetallesServicioPanelCell from './components/servicios/detalles/panelcell.jsx'

import NoticiasPanel from './components/noticias/panel.jsx'
import NoticiasPanelTablet from './components/noticias/paneltablet.jsx'
import NoticiasPanelCell from './components/noticias/panelcell.jsx'

import DetallesNoticia from './components/noticias/noticia/panel.jsx'
import DetallesNoticiaTablet from './components/noticias/noticia/paneltablet.jsx'
import DetallesNoticiaCell from './components/noticias/noticia/panelcell.jsx'

import GaleriaPanel from './components/galeria/panel.jsx'
import GaleriaPanelTablet from './components/galeria/paneltablet.jsx'
import GaleriaPanelCell from './components/galeria/panelcell.jsx'

import CotizacionPanel from './components/cotizacion/panel.jsx'
import CotizacionPanelTablet from './components/cotizacion/paneltablet.jsx'
import CotizacionPanelCell from './components/cotizacion/panelcell.jsx'

import ContactanosPanel from './components/contacto/panel.jsx'
import ContactanosPanelTablet from './components/contacto/paneltablet.jsx'
import ContactanosPanelCell from './components/contacto/panelcell.jsx'

export default function App() {

  const [width, setWidth] = useState(window.outerWidth)

  useEffect(() => {
      window.addEventListener('resize', handle_resize)

      return () => {
          window.removeEventListener('resize', handle_resize)
      }
  }, [])

  const handle_resize = () => {
      setWidth(window.outerWidth)
  }

    return (
      <BrowserRouter>
          <Routes>
                <Route path='/' element={width < 500 ? <GlobalPanelCell proporcional={499 / width}/> :
                                         width < 991 ? <GlobalPanelTablet proporcional={991 / width}/> :
                                                       <GlobalPanel proporcional={1920 / width}/>}>

                    <Route index element={width < 500 ? <HomePanelCell proporcional={499 / width}/> :
                                          width < 991 ? <HomePanelTablet proporcional={991 / width}/> :
                                                        <HomePanel proporcional={1920 / width}/>}/>

                    <Route path='sobre-nosotros' element={width < 500 ? <NosotrosPanelCell proporcional={499 / width}/> :
                                                          width < 991 ? <NosotrosPanelTablet proporcional={991 / width}/> :
                                                                        <NosotrosPanel proporcional={1920 / width}/>}/>

                    <Route path='nuestros-servicios' element={width < 500 ? <ServiciosPanelCell proporcional={499 / width}/> :
                                                              width < 991 ? <ServiciosPanelTablet proporcional={991 / width}/> :
                                                                            <ServiciosPanel proporcional={1920 / width}/>}/>

                    <Route path='nuestros-servicios/:servicio' element={width < 500 ? <DetallesServicioPanelCell proporcional={499 / width}/> :
                                                                        width < 991 ? <DetallesServicioPanelTablet proporcional={991 / width}/> :
                                                                                      <DetallesServicioPanel proporcional={1920 / width}/>}/>

                    <Route path='noticias' element={width < 500 ? <NoticiasPanelCell proporcional={499 / width}/> :
                                                    width < 991 ? <NoticiasPanelTablet proporcional={991 / width}/> :
                                                                  <NoticiasPanel proporcional={1920 / width}/>}/>

                    <Route path='noticias/:id_notica' element={width < 500 ? <DetallesNoticiaCell proporcional={499 / width}/> :
                                                               width < 991 ? <DetallesNoticiaTablet proporcional={991 / width}/> :
                                                                             <DetallesNoticia proporcional={1920 / width}/>}/>

                    <Route path='galeria' element={width < 500 ? <GaleriaPanelCell proporcional={499 / width}/> :
                                                   width < 991 ? <GaleriaPanelTablet proporcional={991 / width}/> :
                                                                 <GaleriaPanel proporcional={1920 / width}/>}/>

                    <Route path='cotizacion' element={width < 500 ? <CotizacionPanelCell proporcional={499 / width}/> :
                                                      width < 991 ? <CotizacionPanelTablet proporcional={991 / width}/> :
                                                                    <CotizacionPanel proporcional={1920 / width}/>}/>

                    <Route path='contactanos' element={width < 500 ? <ContactanosPanelCell proporcional={499 / width}/> :
                                                       width < 991 ? <ContactanosPanelTablet proporcional={991 / width}/> :
                                                                     <ContactanosPanel proporcional={1920 / width}/>}/>

                </Route>
          </Routes>
      </BrowserRouter>
    )
}
