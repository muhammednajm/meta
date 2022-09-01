import * as THREE from 'three'
import { Camera } from './index'

export default class {

	public DEG: number = 0.017453292519943295

	public yaw: number = 0
	public pitch: number = 0

	public moveSpeed: number = 5

	public keys: { [ key: string ]: boolean } = {}

	public camera: Camera

	constructor (
		{ camera, } : {
			camera: Camera,
		}, universe: any
	) {

		this.camera = camera
		this.keys = universe.keys

		const spherical = new THREE.Spherical()
		.setFromVector3(
			new THREE.Vector3( 0, 0, -1 )
			.applyQuaternion( camera.object.quaternion)
		)

		this.yaw = spherical.theta / this.DEG
		this.pitch = spherical.phi / this.DEG
	}

	update( delta: number ) {

		/*
			Rotations
		*/
		if ( this.keys.ArrowRight || this.keys.KeyD ) {
			this.yaw--
		}
		if ( this.keys.ArrowLeft || this.keys.KeyA ) {
			this.yaw++
		}
		if ( this.keys.ArrowUp ) {
			this.pitch = Math.min( Math.max( ++this.pitch, 45 ), 180 )
		}
		if ( this.keys.ArrowDown ) {
			this.pitch = Math.min( Math.max( --this.pitch, 45 ), 180 )
		}

		this.camera.object.lookAt(
			new THREE.Vector3()
			.copy( this.camera.object.position )
			.setFromSphericalCoords( 1, this.pitch * this.DEG, this.yaw * this.DEG )
			.add( this.camera.object.position )
		)

		/*
			Move
		*/
		if ( this.keys.KeyW ) {
			this.camera.object.translateZ( - delta * this.moveSpeed )
		}
		if ( this.keys.KeyS ) {
			this.camera.object.translateZ( delta * this.moveSpeed )
		}
	}
}
