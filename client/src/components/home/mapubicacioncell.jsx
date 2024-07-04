import React from 'react'

import icono_location from '../../assets/iconos/icono_location_black_96.png'
import icono_location_white from '../../assets/iconos/icono_location_mapa_white_96.png'
import icono_cell_white from '../../assets/iconos/icono_cell_mapa_white_96.png'
import icono_email_white from '../../assets/iconos/icono_email_mapa_white_96.png'

import icono_dot_white from '../../assets/iconos/icono_dot_white_96.png'
import icono_dot_blue from '../../assets/iconos/icono_circle_blue_96.png'

import GoogleMapReact from 'google-map-react'

export default function MapaUbicaciomCell({proporcional}) {
    
    const AnyReactComponent = ({ text }) => <img className='rounded-circle'
        src={icono_location} style={{width: 48 / proporcional, height: 48 / proporcional, background: '#4a9ae9', padding: 12 / proporcional}}/>
 
    const defaultProps_1 = {
        center: {
          lat: -12.2547532,
          lng: -76.8877542
        },
        zoom: 14
      };

    return (
        <div className='position-relative' style={{width: '100%', height: 700 / proporcional}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCwoATN7RLTSy4jWO_iK4rQbHXfeNHFuxs" }}
                defaultCenter={defaultProps_1.center}
                defaultZoom={defaultProps_1.zoom}
            >
                <AnyReactComponent
                    lat={-12.2547532}
                    lng={-76.8877542}
                    text="Almacen Paul Poblet"
                />
            </GoogleMapReact>
            <div className='position-absolute start-o' style={{width: '100%', height: 300 / proporcional, background: 'rgba(28, 76, 150, 0.8)', top: 400 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 300 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, paddingTop: 60 / proporcional,
                        paddingBottom: 60 / proporcional}}>
                    <div style={{width: '48%', height: 240 / proporcional, padding: 10 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                    fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            País región
                        </p>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_location_white} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                Dirección
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_cell_white} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                +51 999-xxxxxx
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '1.5%', height: 240 / proporcional}}>
                        <div style={{width: 1, height: 90 / proporcional, background: 'white', marginTop: 50 / proporcional}}/>
                    </div>
                    <div style={{width: '48%', height: 240 / proporcional, padding: 10 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                    fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            País región
                        </p>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_location_white} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                Dirección
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_cell_white} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                +51 999-xxxxxx
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
18