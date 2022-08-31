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

	const renderer = new Factory.Renderer( {
		container: document.querySelector<HTMLElement>('#webgl-container')!,
	})

	console.log( renderer )

	const camera = new Factory.Camera( {
		// https://en.wikipedia.org/wiki/Field_of_view_in_video_games#Choice_of_field_of_view
		fov: 60,
		// https://en.wikipedia.org/wiki/Aspect_ratio_(image)
		aspect: 1,
		// 10cm
		near: 0.1,
		// 1.5km
		far: 1500,
		// [0, 2, 5] = [x, y, z]
		initialPosition: [0, 2, 5],
	} )

	console.log( camera )
}
