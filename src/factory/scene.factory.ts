import {
	Scene,
	Color,
	AxesHelper,
	GridHelper,
} from 'three'

export default class {

	public object: Scene

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

		this.object = new Scene()
		this.object.background = new Color( background )

		if ( helperSize > 0 ) {

			// Axes helper (X, Y, Z) = (Red, Green, Blue)
			this.object.add( new AxesHelper( helperSize ) )

			// Grid helper (in meters)
			this.object.add( new GridHelper( helperSize, helperSize ) )
		}
	}
}
