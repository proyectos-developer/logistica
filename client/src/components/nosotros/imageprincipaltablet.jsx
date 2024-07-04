import React from 'react'

import image_00 from '../../assets/images/image_nosotros_principal_1920.png'

export default function ImagePrincipalTablet({proporcional}) {
    
    return (
        <div className='' 
            style={{width: '100%', height: 350 / proporcional, backgroundImage: `url(${image_00})`, backgroundPosition: 'cencter', backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat'}}>
            <div className='position-relative' style={{width: '100%', height: 350 / proporcional, background: 'rgba(39, 39, 39, 0.8)'}}>
            </div>
        </div>
    )
}
