const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')
const cors = require('cors')


const apartmentRouter = require('./Routes/apartmentRouter')


const app = express()

//#region Security
app.use(cors())
app.options('*', cors())
app.use(helmet())
app.use(bodyParser.json())
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(
  express.json({
    // Body must be less than 10kb
    limit: '1000kb',
  }),
)
app.use(mongoSanitize())
app.use(xss())
app.use(
  hpp(),
)
app.use(express.static(`${__dirname}/public`))

//#endregion

app.use('/apartments', apartmentRouter)


app.all('*', (req, res, next) => {
  next(new Error(`Not Found`, 404))
})

module.exports = app
