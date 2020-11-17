import createError from 'http-errors'
import express from 'express'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import login from './routes/login.js'

const corsOptions = {
	exposedHeaders: 'Authorization'
}
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

const allowedOrigins = ['http://127.0.0.1:3000']

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))

app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors(corsOptions))
app.use(
	cors({
		origin: function (origin, callback) {
			if (!origin) return callback(null, true)
			if (allowedOrigins.indexOf(origin) === -1) {
				const msg = 'The CORS policy for this site does not allow access from the specified Origin.'
				return callback(new Error(msg), false)
			}
			return callback(null, true)
		}
	})
)
app.use('/api/v1', login)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render('error')
})

export default app
