import React from 'react'

export default function SubtituloSliderTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                background: '#1c4c96'}}>
            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-center' style={{width: '25%', height: 'auto'}}>
                    <p className='' 
                        style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                        Carretera
                    </p>
                </div>
                <div className='d-flex justify-content-center' style={{width: '25%', height: 'auto'}}>
                    <p className='' 
                        style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                        Aérea
                    </p>
                </div>
                <div className='d-flex justify-content-center' style={{width: '25%', height: 'auto'}}>
                    <p className='' 
                        style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                        Marítimo
                    </p>
                </div>
                <div className='d-flex justify-content-center' style={{width: '25%', height: 'auto'}}>
                    <p className='' 
                        style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                        Almacén
                    </p>
                </div>
            </div>
        </div>
    )
}