import * as THREE from 'three'
import * as Factory from '../factory'

/*
	Create world
	https://en.wikipedia.org/wiki/Fictional_universe
*/
const build = ( {
	scene,
	debug,
}: {
	debug: boolean,
	scene: Factory.Scene,
} ) => {

	const universe: { [ key: string ]: any } = {}

	{
		// Create helper object for camera states
		const geometry = new THREE.BoxBufferGeometry( 1, 1, 1 )
		const material = new THREE.MeshNormalMaterial()
		const mesh = new THREE.Mesh( geometry, material )

		scene.object.add( mesh )
		universe.pointer = mesh
	}

	if ( debug ) {
		console.log( 'Created temporary box...' )
	}

	return universe
}

const update = ( {
	scene,
	renderer,
	camera,
	clock,
}: {
	scene: Factory.Scene,
	renderer: Factory.Renderer,
	camera: Factory.Camera,
	clock: Factory.Clock,
}, universe: any ) => {

	const delta = clock.delta()

	universe.pointer.rotation.y -= delta

	// render
	renderer.object.render( scene.object, camera.object )
}

export {
	build,
	update,
}
