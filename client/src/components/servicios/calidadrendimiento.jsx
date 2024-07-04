import React from 'react'

export default function CalidadTransporte({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', marginBottom: 70 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '30%', height: 'auto'}}>
                    <div style={{width: 100 / proporcional, background: '#4a9ae9', height: 4 / proporcional, marginBottom: 35 / proporcional}}/>
                    <p style={{fontSize: 36 / proporcional, fontWeight: 300, lineHeight: `${42 / proporcional}px`, color: 'rgb(24, 54, 80)', marginBottom: 0}}>
                        RENDIMIENTO Y <br/> CALIDAD AL <br/> PRECIO JUSTO.
                    </p>
                </div>

                <div style={{width: '30%', height: 'auto'}}>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 0}}>
                        Transcargo Ltd. es uno de los principales proveedores mundiales de soluciones integrales para la cadena de suministro. Combinamos transporte aéreo y marítimo intercontinental con servicios integrales de logística de valor agregado y servicios de cadena de suministro. La gama de soluciones para la cadena de suministro puede variar desde un simple transporte o almacenamiento hasta operaciones complejas.
                    </p>
                </div>

                <div style={{width: '30%', height: 'auto'}}>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 0}}>
                        Optimizamos todas las actividades en torno al flujo de información, materiales y financiero. Proporcionamos soluciones integrales globalmente integradas y adaptadas a las necesidades de gestión de la cadena de suministro de nuestros clientes con un compromiso especial con los requisitos específicos de la industria.
                    </p>
                </div>
            </div> 
        </div>
    )
}
