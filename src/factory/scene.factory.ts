import {
	Scene,
	Color,
	AxesHelper,
	GridHelper,
} from 'three'

export default class {

	constructor (
		{ background, helperSize, } : {
			// Scene background color
			background: number,
			// Show global helpers
			helperSize: number,
		} = {
			// default white
			background: 0xFFFFFF,
			// default no helpers
			helperSize: 0,
		}
	) {

		const scene = new Scene()
		scene.background = new Color( background )

		if ( helperSize > 0 ) {

			// Axes helper (X, Y, Z) = (Red, Green, Blue)
			scene.add( new AxesHelper( helperSize ) )

			// Grid helper (in meters)
			scene.add( new GridHelper( helperSize, helperSize ) )
		}

		return scene
	}
}
