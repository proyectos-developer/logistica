import React from 'react'

export default function NuestrosSociosCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: 100 / proporcional, background: '#4a9ae9', height: 4 / proporcional, marginBottom: 50 / proporcional}}/>
            <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <p className='' 
                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(24, 54, 80)',
                            fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                    NUESTROS SOCIOS
                </p>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div className='rounded' style={{width: 400 / proporcional, height: 150 / proporcional, border: '1px solid #bdbdbd'}}/>
                    <div className='rounded' style={{width: 400 / proporcional, height: 150 / proporcional, border: '1px solid #bdbdbd'}}/>
                    <div className='rounded' style={{width: 400 / proporcional, height: 150 / proporcional, border: '1px solid #bdbdbd'}}/>
                    <div className='rounded' style={{width: 400 / proporcional, height: 150 / proporcional, border: '1px solid #bdbdbd'}}/>
                </div>
            </div>
        </div>
    )
}
