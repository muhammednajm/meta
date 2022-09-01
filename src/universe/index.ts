import * as Factory from '../factory'

/*
	Create world
	https://en.wikipedia.org/wiki/Fictional_universe
*/
const build = ( {
	debug,
}: {
	debug: boolean,
	scene: Factory.Scene,
	camera: Factory.Camera,
} ) => {

	const keys: { [ key: string ]: boolean } = {}

	const universe: { [ key: string ]: any } = {
		keys: keys,
	}

	if ( debug ) {
		console.log( 'Created temporary box...' )
	}

	return universe
}

/*
	Update
*/
const update = ( {
	scene,
	renderer,
	camera,
	clock,
	controls,
}: {
	scene: Factory.Scene,
	renderer: Factory.Renderer,
	camera: Factory.Camera,
	clock: Factory.Clock,
	controls: Factory.Controls,
} ) => {

	const delta = clock.delta()

	controls.update( delta )

	renderer.object.render( scene.object, camera.object )
}

export {
	build,
	update,
}
