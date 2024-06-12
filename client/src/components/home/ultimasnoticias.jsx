import React, { useState } from 'react'

import image_00 from '../../assets/images/image_news_300_00.png'
import image_01 from '../../assets/images/image_news_300_01.png'
import image_02 from '../../assets/images/image_news_300_02.png'

import icono_right from '../../assets/iconos/icono_arrow_right_blue_96.png'
import icono_right_bluedark from '../../assets/iconos/icono_arrow_right_bluedark_96.png'
import icono_right_white from '../../assets/iconos/icono_arrow_right_white_96.png'

import icono_dot_grey from '../../assets/iconos/icono_dot_grey_96.png'
import icono_dot_blue from '../../assets/iconos/icono_circle_blue_96.png'

import Noticias from './noticias.jsx'
import Faq from './faq.jsx'

export default function UltimasNoticias({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 150 / proporcional, paddingBottom: 150 / proporcional, paddingLeft: 200 / proporcional, paddingRight: 200 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '48%', height: 'auto'}}>
                        <Noticias proporcional={proporcional}/>
                    </div>
                    <div style={{width: '48%', height: 'auto'}}>
                        <Faq proporcional={proporcional}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
