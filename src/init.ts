import * as Factory from './factory'
import * as Universe from './universe'
import * as Events from './events'

export default async (
	{ debug, helpers } : {
		debug: boolean,		// show logs
		helpers: boolean,	// show helpers
	}
) => {

	// Container
	const container = document.querySelector<HTMLElement>('#webgl-container')!

	// Scene
	const scene = new Factory.Scene( {
		background: 0xFFFFFF,
		helperSize: helpers ? 1000 : 0,
	} )

	// Renderer (WebGL version: 2)
	const renderer = new Factory.Renderer( {
		container,
	})

	// Camera (Perspective)
	const camera = new Factory.Camera( {
		// https://en.wikipedia.org/wiki/Field_of_view_in_video_games#Choice_of_field_of_view
		fov: 60,
		// https://en.wikipedia.org/wiki/Aspect_ratio_(image)
		aspect: container.offsetWidth / container.offsetHeight,
		// 10cm
		near: 0.1,
		// 1.5km
		far: 1500,
		// [0, 2, 6] = [x, y, z]
		initialPosition: [0, 1, 5],
	} )

	/*
		Create world
		https://en.wikipedia.org/wiki/Fictional_universe
	*/
	const universe = Universe.build( {
		debug,
		scene,
		camera,
	} )

	// Controls
	const controls = new Factory.Controls( {
		camera,
	}, universe )
	controls.moveSpeed = 10

	// Listen events
	Events.listen( {
		debug,
		container,
		renderer,
		camera,
	}, universe )

	// Main clock
	const clock = new Factory.Clock()

	// https://threejs.org/docs/index.html?q=WebGl#api/en/renderers/WebGLRenderer.setAnimationLoop
	renderer.object.setAnimationLoop( () => {

		// Animation logic (a.k.a Game loop)
		Universe.update( {
			scene,
			renderer,
			camera,
			controls,
			clock: clock,
		} )
	} )
}
