import './main.css'
import init from './init'

;( async () => {

	await init( {
		debug: true,	// show logs
		helpers: true,	// show helpers
	} )

} )()
