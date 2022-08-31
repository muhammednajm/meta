import {
	WebGLRenderer,
} from 'three'

export default class {

	public object: WebGLRenderer

	constructor (
		{ container, } : {
			// Container element for canvas
			container: HTMLElement,
		}
	) {

		// WebGL version: 2
		this.object = new WebGLRenderer( {
			antialias: true,
		} )

		/*
			https://en.wikipedia.org/wiki/Pixel_aspect_ratio
			Set pixel aspect ratio
		*/
		this.object.setPixelRatio( window.devicePixelRatio )
		// Set canvas size
		this.object.setSize( container.offsetWidth, container.offsetHeight )
		
		// Append canvas element to container
		container.appendChild( this.object.domElement )
	}
}
