/**
 * Vector2D - Simple 2d vector object.
 * @author Larry Battle
 * @created May 18, 2014
 * @version 0.2
 * @license MIT
 */
var Vector2D = (function () {
	"use strict";
	var Vector2D = function (mag, degree) {
		if (!(this instanceof Vector2D)) {
			return new Vector2D(degree, mag);
		}
		if (isNaN(+degree) || isNaN(+mag)) {
			throw new Error("Both degree and mag must be numbers");
		}
		this.degree = +degree % 360;
		this.mag = +mag;
		this.i = 0;
		this.j = 0;
		this.updatePosition();
	};
	/**
	Creates a new Vector based on the (i, j) components.
	 * @param {Number} i - length of horizontal
	 * @param {Number} j - length of vertical
	 * @return {Vector2D}
	 */
	Vector2D.parse = function (i, j) {
		var mag = Vector2D.computeMagnitude(i, j);
		var degree = Vector2D.computeDegree(i, j);
		return new Vector2D(mag, degree);
	};
	/**
	Returns the angle between (0,0) and (i,j).
	 * @param {Number} i - length of horizontal
	 * @param {Number} j - length of vertical
	 * @return {Number} - the angle between the two lines
	 */
	Vector2D.computeDegree = function (i, j) {
		return Vector2D.radianToDegree(Math.atan2(j, i));
	};
	/**
	Converts degree to radian
	 * @param {Number} degree
	 * @return {Number}
	 */
	Vector2D.degreeToRadian = function (degree) {
		return (degree * Math.PI) / 180;
	};
	/**
	Converts radian to degrees.
	 * @param {Number} rad - radian
	 * @return {Number} - degree
	 */
	Vector2D.radianToDegree = function (rad) {
		return (rad * 180) / Math.PI;
	};
	/**
	Returns the hypotenuse given the two smaller sides, using the Pythagorean theorem.
	 * @param {Number} i - length of horizontal
	 * @param {Number} j - length of vertical
	 * @return {Number}
	 */
	Vector2D.computeMagnitude = function (i, j) {
		return Math.sqrt((Math.pow(i, 2) + Math.pow(j, 2)));
	};
	/**
	Resets the x,y coordinates based off the degree.
	 * @return {Vector} this
	 */
	Vector2D.prototype.updatePosition = function () {
		var rad = Vector2D.degreeToRadian(this.degree);
		this.i = this.mag * Math.cos(rad);
		this.j = this.mag * Math.sin(rad);
		return this;
	};
	/**
	Resets the magnitude and degree based off the x, y coordinates.
	 * @return {Vector} this
	 */
	Vector2D.prototype.updateVector = function () {
		this.mag = Vector2D.computeMagnitude(this.i, this.j);
		this.degree = Vector2D.computeDegree(this.i, this.j);
		return this;
	};
	/**
	Returns the vector coordinates as a array.
	 * @return {Array}
	 */
	Vector2D.prototype.toArray = function () {
		return [this.i, this.j];
	};
	/**
	Returns the vector as a plane object.
	 * @return {Object}
	 */
	Vector2D.prototype.toJSON = function () {
		return {
			magnitude : this.mag,
			degree : this.degree,
			x : this.i,
			y : this.j
		};
	};
	/**
	 * Returns the vector coordinates as a string.
	 * @return {String}
	 */
	Vector2D.prototype.toString = function () {
		return "(" + this.i + ", " + this.j + ")";
	};
	/**
	 * Returns the vector angle, position and degree as a string.
	 * @return {String}
	 */
	Vector2D.prototype.toLocaleString = function () {
		var str = "magnitude:" + this.mag + ", angle:" + this.degree;
		str += ", position:" + this.toString();
		return str;
	};
	/**
	 * Returns the magnitude of the vector
	 * @return {Number}
	 */
	Vector2D.prototype.getMagnitude = function () {
		return +this.mag;
	};
	/**
	 * Returns the degree of the vector
	 * @param {Number} precision
	 * @return {Number}
	 */
	Vector2D.prototype.getDegree = function (precision) {
		return  + (this.degree).toFixed(precision);
	};
	/**
	 * Returns the x position of the vector
	 * @return {Number}
	 */
	Vector2D.prototype.getX = function () {
		return this.i;
	};
	/**
	 * Returns the y position of the vector
	 * @return {Number}
	 */
	Vector2D.prototype.getY = function () {
		return this.j;
	};
	/**
	 * Returns the magnitude the vector
	 * @return {Number}
	 */
	Vector2D.prototype.valueOf = function () {
		return Vector2D.computeMagnitude(this.i, this.j);
	};
	/**
	 * Add the current vector with another vector
	 * @param {Vector} v
	 * @return {Vector}
	 */
	Vector2D.prototype.add = function (v) {
		if (!(v instanceof Vector2D)) {
			throw new Error("Must pass a vector.");
		}
		return Vector2D.parse(this.i + v.i, this.j + v.j);
	};
	/**
	 * Subtract the current vector with another vector
	 * @param {Vector} v
	 * @return {Vector}
	 */
	Vector2D.prototype.subtract = function (v) {
		if (!(v instanceof Vector2D)) {
			throw new Error("Must pass a vector.");
		}
		return Vector2D.parse(this.i - v.i, this.j - v.j);
	};
	/**
	 * Checks if the current vector is equivalent to another vector.
	 * @param {Vector} v
	 * @return {boolean}
	 */
	Vector2D.prototype.equals = function (v) {
		if (this instanceof Vector2D) {
			return (this.i === v.i && this.j === v.j);
		}
		return false;
	};
	/**
	 * Scale the vector by a factor.
	 * @param {Number} val - factor
	 * @return {Vector}
	 */
	Vector2D.prototype.scale = function (val) {
		this.i *= val;
		this.j *= val;
		this.updateVector();
		return this;
	};
	/**
	 * Flips the vector into the opposite quadrant by adding 180 degrees to it.
	 * @return {Vector}
	 */
	Vector2D.prototype.negate = function () {
		this.degree = (this.degree + 180) % 360;
		this.updatePosition();
		return this;
	};
	/**
	 * Returns a copy of the current vector.
	 * @return {Vector}
	 */
	Vector2D.prototype.clone = function () {
		return Vector2D.parse(this.i, this.j);
	};
	return Vector2D;
})();
