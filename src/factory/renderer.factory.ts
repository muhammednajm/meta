import {
	WebGLRenderer,
} from 'three'

export default class {

	constructor (
		{ container, } : {
			// Container element for canvas
			container: HTMLElement,
		}
	) {

		// WebGL version: 2
		const renderer = new WebGLRenderer( {
			antialias: true,
		} )

		/*
			https://en.wikipedia.org/wiki/Pixel_aspect_ratio
			Set pixel aspect ratio
		*/
		renderer.setPixelRatio( window.devicePixelRatio )
		// Set canvas size
		renderer.setSize( container.offsetWidth, container.offsetHeight )
		
		// Append canvas element to container
		container.appendChild( renderer.domElement )

		return renderer
	}
}
