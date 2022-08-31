import * as Factory from './factory'
import * as Universe from './universe'

export default async (
	{ debug, helpers } : {
		debug: boolean,		// show logs
		helpers: boolean,	// show helpers
	}
) => {

	// Scene
	const scene = new Factory.Scene( {
		background: 0xFFFFFF,
		helperSize: helpers ? 1000 : 0,
	} )

	// Renderer (WebGL version: 2)
	const renderer = new Factory.Renderer( {
		container: document.querySelector<HTMLElement>('#webgl-container')!,
	})

	// HTMLCanvasElement
	const canvas = renderer.object.domElement

	// Camera (Perspective)
	const camera = new Factory.Camera( {
		// https://en.wikipedia.org/wiki/Field_of_view_in_video_games#Choice_of_field_of_view
		fov: 60,
		// https://en.wikipedia.org/wiki/Aspect_ratio_(image)
		aspect: canvas.offsetWidth / canvas.offsetHeight,
		// 10cm
		near: 0.1,
		// 1.5km
		far: 1500,
		// [0, 2, 5] = [x, y, z]
		initialPosition: [0, 2, 5],
	} )

	/*
		Create world
		https://en.wikipedia.org/wiki/Fictional_universe
	*/
	Universe.build( {
		debug,
		scene,
	} )

	// https://threejs.org/docs/index.html?q=WebGl#api/en/renderers/WebGLRenderer.setAnimationLoop
	renderer.object.setAnimationLoop( () => {

		// Animation logic (a.k.a Game loop)
		Universe.update( {
			scene,
			renderer,
			camera,
		} )
	} )
}
