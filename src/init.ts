import * as Factory from './factory'

export default async (
	{ debug, helpers } : {
		debug: boolean,		// show logs
		helpers: boolean,	// show helpers
	}
) => {

	console.log( 'Init', debug )

	const scene = new Factory.Scene( {
		background: 0xFFA500,
		helperSize: helpers ? 1000 : 0,
	} )

	console.log( scene )
}
