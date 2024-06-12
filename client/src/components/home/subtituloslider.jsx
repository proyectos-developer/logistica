import React from 'react'

export default function SubtituloSlider({proporcional}) {

    return (
        <div style={{width: '100%', height: 100 / proporcional, paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional, paddingLeft: 200 / proporcional, paddingRight: 200 / proporcional,
                background: '#1c4c96'}}>
            <div className='d-flex' style={{width: '100%', height: 60 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '25%', height: 60 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                        Transporte <br/>por carretera
                    </p>
                </div>
                <div className='d-flex justify-content-center' style={{width: '25%', height: 60 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                        Carga <br/>aérea
                    </p>
                </div>
                <div className='d-flex justify-content-center' style={{width: '25%', height: 60 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                        Transporte <br/>marítimo
                    </p>
                </div>
                <div className='d-flex justify-content-center' style={{width: '25%', height: 60 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 24 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                        Almacenamiento
                    </p>
                </div>
            </div>
        </div>
    )
}