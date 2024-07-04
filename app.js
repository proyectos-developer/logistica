const cors = require ('cors')
const express = require ('express')
const morgan = require ('morgan')
const path = require ('path')

const app = express ()
app.use (cors())

app.set('port', process.env.PORT || 3001);

app.use (morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(express.static(path.resolve(__dirname, './client/build')))
app.get ('/', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/sobre-nosotros')))
app.get ('/sobre-nosotros', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/sobre-nosotros', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/nuestros-servicios')))
app.get ('/nuestros-servicios', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/nuestros-servicios', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/nuestros-servicios')))
app.get ('/nuestros-servicios/:servicio', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/nuestros-servicios', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/noticias')))
app.get ('/noticias', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/noticias', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/noticias')))
app.get ('/noticias/:id_notica', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/noticias', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/galeria')))
app.get ('/galeria', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/galeria', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/cotizacion')))
app.get ('/cotizacion', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/cotizacion', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/contactanos')))
app.get ('/contactanos', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/contactanos', 'index'))
})

//Iniciar el servidor
app.listen (app.get('port'), () => {
    console.log ('Server en puerto ', app.get ('port'))
})
