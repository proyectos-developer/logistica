import React from 'react'

import icono_comments from '../../../assets/iconos/icono_comments_black_v1_96.png'
import icono_dot from '../../../assets/iconos/icono_dot_grey_96.png'

import icono_facebook from '../../../assets/iconos/icono_facebook_color_96.png'
import icono_instagram from '../../../assets/iconos/icono_instagram_color_96.png'
import icono_twitter from '../../../assets/iconos/icono_twitter_color_96.png'
import icono_linkedin from '../../../assets/iconos/icono_linkedin_color_96.png'

export default function Detalles({proporcional, noticia}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: 100 / proporcional, background: '#4a9ae9', height: 4 / proporcional, marginBottom: 35 / proporcional}}/>
            <div style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                <p className='' 
                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(24, 54, 80)',
                            fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                    {noticia.titulo}
                </p>
            </div>
            <div className='d-flex' style={{width: '100%', height: 75 / proporcional, marginBottom: 42 / proporcional}}>
                <div style={{width: 75 / proporcional, height: 75 / proporcional, marginRight: 20 / proporcional, background: 'rgb(52, 204, 255)'}}>
                    <p className='' 
                        style={{fontSize: 24 / proporcional, lineHeight: `${37.5 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                fontWeight: 700, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                        {noticia.fecha}
                    </p>
                    <p className='' 
                        style={{fontSize: 24 / proporcional, lineHeight: `${37.5 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                fontWeight: 300, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                        {noticia.mes}
                    </p>
                </div>
                <div style={{width: '100%', height: 75 / proporcional, borderTop: '1px solid rgb(230, 230, 230)', borderBottom: '1px solid rgb(230, 230, 230)'}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 73 / proporcional, padding: 20 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 13 / proporcional, lineHeight: `${33 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                                    fontWeight: 300, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            Publicado por: <span style={{color: 'rgb(52, 204, 255)', fontWeight: 500}}>Admin</span>
                        </p>
                        <p className='' 
                            style={{fontSize: 13 / proporcional, lineHeight: `${33 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                                    fontWeight: 300, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            Categorias: <span style={{color: 'rgb(52, 204, 255)', fontWeight: 500}}>{noticia.categorias}</span>
                        </p>
                        <p className='' 
                            style={{fontSize: 13 / proporcional, lineHeight: `${33 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                                    fontWeight: 300, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            <img src={icono_comments} style={{width: 33 / proporcional, height: 33 / proporcional, padding: 8.5 / proporcional}}/>
                            <span style={{color: 'rgb(52, 204, 255)', fontWeight: 500}}>Sin comentarios</span>
                        </p>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                <p className='' 
                    style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                            fontWeight: 300, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                    ¿Cómo mover una máquina de 33m de largo, 15m de ancho y 18m de alto? El equipo de Logística de Proyectos de BestLogistics conoce el procedimiento. El equipo coordinó el transporte de una terminal construida por Van Aalst Bulk Handling (grúas para descargar cemento, un cargador de barcos y dos sistemas de transporte) junto con unas 17.000 toneladas a través del puerto de Rotterdam, Países Bajos, hasta su destino final en dos nuevas cementeras. terminales de importación en Nueva Zelanda.
                </p>
            </div>
            <div style={{width: '100%', height: 415 / proporcional, marginBottom: 20 / proporcional}}>
                <img src={noticia.image} style={{width: 630 / proporcional, height: 360 / proporcional, marginBottom: 20 / proporcional}}/>
                <div className='d-flex justify-content-center'  style={{width: '100%', height: 35 / proporcional}}>
                    <div className='rounded-circle' style={{width: 15 / proporcional, height: 15 / proporcional, margin: 10 / proporcional, border: '1px solid rgb(52, 204, 255)'}}/>
                    <img src={icono_dot} style={{width: 35 / proporcional, height: 35 / proporcional, padding: 7.5 / proporcional}}/>
                    <img src={icono_dot} style={{width: 35 / proporcional, height: 35 / proporcional, padding: 7.5 / proporcional}}/>
                    <img src={icono_dot} style={{width: 35 / proporcional, height: 35 / proporcional, padding: 7.5 / proporcional}}/>
                    <img src={icono_dot} style={{width: 35 / proporcional, height: 35 / proporcional, padding: 7.5 / proporcional}}/>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', marginBottom: 60 / proporcional}}>
                <p className='' 
                    style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 26 / proporcional, color: 'rgb(128, 128, 128)',
                            fontWeight: 300, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                    Como patrocinador del equipo Aprilia Racing que compite en el Campeonato Mundial de Superbikes, una de las tres principales series mundiales de automovilismo junto con la Fórmula 1 y MotoGP, tenemos el placer de ofrecer a nuestros clientes una experiencia única en las tribunas del paddock y en el box Aprilia durante varias rondas.
                </p>
                <div className='' style={{width: '100%', height: 75 / proporcional, borderLeft: '2px solid rgb(52, 204, 255)', marginLeft: 42 / proporcional,
                    paddingLeft: 50 / proporcional, marginBottom: 26 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 14 / proporcional, lineHeight: `${37.5 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                                fontWeight: 300, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                        Estoy satisfecho con los servicios prestados por BestLogistic LLC. ¡Samantha Culligan ha sido maravillosa! ¡Me devolvió las llamadas rápidamente y respondió todas mis preguntas!
                    </p>
                </div>
                <p className='' 
                    style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                            fontWeight: 300, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                    En la última prueba, el Round Pirelli de España los días 19 y 20 de septiembre, el equipo Apria consiguió grandes resultados con dos pilotos en el podio. ¡Felicidades! Aprilia Racing es parte del Grupo Piaggio, un productor mundial de motocicletas y cliente de BestLogistics. El equipo es uno de los más exitosos del mundo con 54 títulos y actualmente es campeón del mundo.
                </p>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 32 / proporcional, marginBottom: 60 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: 'auto', height: 32 / proporcional}}>
                    <div className='rounded-pill' style={{width: 'auto', height: 32 / proporcional, border: '1px solid rgb(52, 204, 255)', paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional,
                            marginRight: 8 / proporcional
                    }}>
                        <p className='' 
                            style={{fontSize: 13 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(24, 54, 80)',
                                    fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            Cargo
                        </p>
                    </div>
                    <div className='rounded-pill' style={{width: 'auto', height: 32 / proporcional, border: '1px solid rgb(52, 204, 255)', paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional,
                            marginRight: 8 / proporcional
                    }}>
                        <p className='' 
                            style={{fontSize: 13 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(24, 54, 80)',
                                    fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            Seguro
                        </p>
                    </div>
                    <div className='rounded-pill' style={{width: 'auto', height: 32 / proporcional, border: '1px solid rgb(52, 204, 255)', paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional,
                            marginRight: 8 / proporcional
                    }}>
                        <p className='' 
                            style={{fontSize: 13 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(24, 54, 80)',
                                    fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            Logística
                        </p>
                    </div>
                    <div className='rounded-pill' style={{width: 'auto', height: 32 / proporcional, border: '1px solid rgb(52, 204, 255)', paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional,
                            marginRight: 8 / proporcional
                    }}>
                        <p className='' 
                            style={{fontSize: 13 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(24, 54, 80)',
                                    fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            Suministros
                        </p>
                    </div>
                    <div className='rounded-pill' style={{width: 'auto', height: 32 / proporcional, border: '1px solid rgb(52, 204, 255)', paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional,
                            marginRight: 8 / proporcional
                    }}>
                        <p className='' 
                            style={{fontSize: 13 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(24, 54, 80)',
                                    fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            Transporte
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-end' style={{width: 'auto', height: 32 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 12 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                                fontWeight: 300, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left', marginRight: 8 / proporcional}}>
                        Compartir en:
                    </p>
                    <img src={icono_facebook} style={{width: 32 / proporcional, height: 32 / proporcional, padding: 6 / proporcional}}/>
                    <img src={icono_instagram} style={{width: 32 / proporcional, height: 32 / proporcional, padding: 6 / proporcional}}/>
                    <img src={icono_linkedin} style={{width: 32 / proporcional, height: 32 / proporcional, padding: 6 / proporcional}}/>
                    <img src={icono_twitter} style={{width: 32 / proporcional, height: 32 / proporcional, padding: 6 / proporcional}}/>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', marginBottom: 80 / proporcional}}>
                <div style={{width: '100%', height: 165 / proporcional, padding: 30 / proporcional, background: '#f7f7f7'}}>
                    <div className='d-flex' style={{width: '100%', height: 105 / proporcional}}>
                        <div style={{width: 105 / proporcional, height: 105 / proporcional, background: 'rgb(52, 204, 255)', marginRight: 23 / proporcional}}/>
                        <div style={{width: '100%', height: 105 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                Autor: <br/><stgong style={{color: 'rgb(24, 54, 80)'}}>Admin</stgong>
                            </p>
                            <p className='' 
                                style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(128, 128, 128)',
                                        fontWeight: 500, fontFamily: 'Roboto, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                I know that I know little, but still what I know as I know is something good to know. Knowing of not knowing is also a knowledge. Not knowing that you don't know anything is a delusion of knowledge.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', marginBottom: 100 / proporcional}}>
                <div style={{width: 100 / proporcional, background: '#4a9ae9', height: 4 / proporcional, marginBottom: 35 / proporcional}}/>
                <div style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 36 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 32 / proporcional, color: 'rgb(24, 54, 80)',
                                fontWeight: 300, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                        Deje un comentario
                    </p>
                    <p className='' 
                        style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 26 / proporcional, color: 'rgb(128, 128, 128)',
                                fontWeight: 500, fontFamily: 'Lato, sans-serif', cursor: 'default'}}>
                        Debe haber <span style={{color: 'rgb(52, 204, 255)', cursor: 'pointer'}}> iniciado sesión </span> para dejar un comentario
                    </p>
                </div>
            </div>
        </div>
    )
}
