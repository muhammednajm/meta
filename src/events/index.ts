import * as Factory from '../factory'

export const listen = ( {
	debug,
	renderer,
	container,
	camera,
}: {
	debug: boolean,
	container: HTMLElement,
	renderer: Factory.Renderer,
	camera: Factory.Camera,
}, universe: any ) => {

	window.addEventListener( 'keydown', e => universe.keys[e.code] = true )
	window.addEventListener( 'keyup', e => universe.keys[e.code] = false )

	window.addEventListener( 'resize', () => {

		const width = container.offsetWidth
		const height = container.offsetHeight

		renderer.object.setSize( width, height )

		camera.object.aspect = width / height
		camera.object.updateProjectionMatrix()
	} )

	if ( debug ) {

		console.log( 'Listen events...' )
	}
}
