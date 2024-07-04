import React, { useState } from 'react'

import image_00 from '../../assets/images/image_news_300_00.png'
import image_01 from '../../assets/images/image_news_300_01.png'
import image_02 from '../../assets/images/image_news_300_02.png'

import icono_right from '../../assets/iconos/icono_arrow_right_blue_96.png'
import icono_right_bluedark from '../../assets/iconos/icono_arrow_right_bluedark_96.png'
import icono_right_white from '../../assets/iconos/icono_arrow_right_white_96.png'

import icono_dot_grey from '../../assets/iconos/icono_dot_grey_96.png'
import icono_dot_blue from '../../assets/iconos/icono_circle_blue_96.png'

import NoticiasTablet from './noticiastablet.jsx'
import FaqTablet from './faqtablet.jsx'

export default function UltimasNoticiasTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <NoticiasTablet proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <FaqTablet proporcional={proporcional}/>
            </div>
        </div>
    )
}
