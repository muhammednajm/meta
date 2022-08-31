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

	scene.object.add(
		new THREE.Mesh(
			new THREE.BoxBufferGeometry( 1, 1, 1),
			new THREE.MeshNormalMaterial()
		)
	)

	if ( debug ) {
		console.log( 'Created temporary box...' )
	}
}

const update = ( {
	scene,
	renderer,
	camera,
}: {
	scene: Factory.Scene,
	renderer: Factory.Renderer,
	camera: Factory.Camera,
} ) => {

	// render
	renderer.object.render( scene.object, camera.object )
}

export {
	build,
	update,
}
