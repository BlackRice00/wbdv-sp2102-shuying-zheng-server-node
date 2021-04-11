module.exports = (app) => {

    const add = (req, res) => {
        const a = parseInt(req.params['paramA'])
        const b = parseInt(req.params.paramB)
        res.send(`${a + b}`)
    }

    app.get('/add/:paramA/:paramB', add)

    const subtract = (req, res) => {
        const a = req.query['x'];
        const b = req.query['y'];
        const c = a - b
        res.send(`${c}`)
        // res.send(c + '')
    }

    app.get('/subtract', subtract)


    app.get('/', function (req, res) {
        res.send('Hello World')
    })
}