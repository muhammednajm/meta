export default async (
	{ debug, helpers } : {
		debug: boolean,		// show logs
		helpers: boolean,	// show helpers
	}
) => {

	console.log( 'Init', debug, helpers )
}
