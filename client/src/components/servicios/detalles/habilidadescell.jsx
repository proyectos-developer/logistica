import React from 'react'

export default function HabilidadesCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
            <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <div style={{width: 100 / proporcional, background: '#4a9ae9', height: 4 / proporcional, marginBottom: 35 / proporcional}}/>
                <p style={{fontSize: 36 / proporcional, fontWeight: 300, lineHeight: `${42 / proporcional}px`, color: 'rgb(24, 54, 80)', marginBottom: 0}}>
                    DESCUBRE NUESTRAS <br/>
                    CAPACIDADES Y RED
                </p>
            </div>

            <div style={{width: '100%', height: 'auto'}}>
                <p style={{fontSize: 14 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 25 / proporcional}}>
                    El modelo flexible de Logistics Ground, que utiliza únicamente transportistas de calidad, significa que usted se beneficiará de mejores niveles de servicio, mayor flexibilidad y entregas en plazos definidos. Nuestra experiencia en gestión y planificación del transporte nos permite diseñar una solución que satisfaga sus necesidades y también responder rápidamente a cualquier interrupción del evento, como el clima.
                </p>
                <p style={{fontSize: 14 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 25 / proporcional}}>
                    A través de nuestra red global de torres de control y tecnología de última generación, podemos monitorear y reaccionar dinámicamente ante situaciones como clima adverso, recogidas o entregas adicionales o tráfico intenso, lo que significa que sus mercancías siempre están viajando. la ruta más eficiente.
                </p>
                <p style={{fontSize: 14 / proporcional, fontWeight: 300, lineHeight: `${26 / proporcional}px`, color: 'rgb(128, 128, 128)', marginBottom: 0 / proporcional}}>
                    Nuestra red de carreteras no basada en activos le brinda flexibilidad, niveles de servicio mejorados, entrega acelerada, costos directos e indirectos reducidos y mucha menos complejidad. Redes de Carreteras Integradas, que cubren el mundo.
                </p>
            </div>
        </div>
    )
}
