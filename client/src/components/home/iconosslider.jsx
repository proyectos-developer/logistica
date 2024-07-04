import React from 'react'

import icono_camion_white from '../../assets/iconos/icono_camion_carga_white_96.png'
import icono_camion_blue from '../../assets/iconos/icono_camion_carga_blue_96.png'
import icono_almacen_white from '../../assets/iconos/icono_almacen_carga_white_96.png'
import icono_almacen_blue from '../../assets/iconos/icono_almacen_carga_blue_96.png'
import icono_avion_white from '../../assets/iconos/icono_avion_carga_white_96.png'
import icono_avion_blue from '../../assets/iconos/icono_avion_carga_blue_96.png'
import icono_buque_white from '../../assets/iconos/icono_buque_carga_white_96.png'
import icono_buque_blue from '../../assets/iconos/icono_buque_carga_blue_96.png'

export default function IconosSlider({proporcional}) {

    return (
        <div className='position-absolute' style={{width: '100%', height: 380 / proporcional, top: 620 / proporcional, paddingLeft: 200 / proporcional, paddingRight: 200 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 380 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '25%', height: 380 / proporcional}}>
                    <img src={icono_camion_white} style={{width: 128 / proporcional, height: 128 / proporcional, marginTop: 180 / proporcional}}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '25%', height: 380 / proporcional}}>
                    <img src={icono_avion_white} style={{width: 128 / proporcional, height: 128 / proporcional, marginTop: 180 / proporcional}}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '25%', height: 380 / proporcional}}>
                    <img src={icono_buque_white} style={{width: 128 / proporcional, height: 128 / proporcional, marginTop: 180 / proporcional}}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '25%', height: 380 / proporcional}}>
                    <img src={icono_almacen_white} style={{width: 128 / proporcional, height: 128 / proporcional, marginTop: 180 / proporcional}}/>
                </div>
            </div>
        </div>
    )
}
