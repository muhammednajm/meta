import {
	PerspectiveCamera,
} from 'three'

export default class {

	constructor (
		options : {
			// https://en.wikipedia.org/wiki/Field_of_view
			fov: number,
			// https://en.wikipedia.org/wiki/Aspect_ratio_(image)
			aspect: number,
			// https://en.wikipedia.org/wiki/Clipping_(computer_graphics)
			near: number, far: number,
			// Camera's initial position: x, y, z
			initialPosition: [ number, number, number ],
		}
	) {

		const {
			fov,
			aspect,
			near,
			far,
		} = options

		const [x, y, z] = options.initialPosition

		// https://en.wikipedia.org/wiki/3D_projection#Perspective_projection
		const camera = new PerspectiveCamera( fov, aspect, near, far )

		// Set initial position
		camera.position.set( x, y, z )

		return camera
	}
}
