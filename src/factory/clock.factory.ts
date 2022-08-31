import {
	Clock,
} from 'three'

export default class {

	public object: Clock

	constructor() {

		this.object = new Clock()
	}

	delta() {

		return this.object.getDelta()
	}
}
