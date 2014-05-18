/**
* Vector2D - Simple 2d vector object.
* @author Larry Battle
* @date May 18, 2014
* @license MIT
* Example: 
var a = new Vector2D(8, 44);
a.getDegree()
*/
var Vector2D = function (mag, degree) {
	if (isNaN(+degree) || isNaN(+mag)) {
		throw new Error("Both degree and mag must be numbers");
	}
	if (!(this instanceof Vector2D)) {
		return new Vector2D(degree, mag);
	}
	this.degree = +degree % 360;
	this.mag = +mag;
	this.i = 0;
	this.j = 0;
	this.updatePosition();
};
Vector2D.parse = function (i, j) {
	var mag = Vector2D.computeMagnitude(i, j);
	var degree = Vector2D.computeDegree(i, j);
	return new Vector2D(mag, degree);
};
Vector2D.computeDegree = function (i, j) {
	return Vector2D.radianToDegree(Math.atan(j / i));
};
Vector2D.degreeToRadian = function (degree) {
	return (degree * Math.PI) / 180;
};
Vector2D.computeMagnitude = function (i, j) {
	return Math.sqrt((Math.pow(i, 2) + Math.pow(j, 2)));
};
Vector2D.radianToDegree = function (rad) {
	return (rad * 180) / Math.PI;
};
Vector2D.prototype.updatePosition = function () {
	var rad = Vector2D.degreeToRadian(this.degree);
	this.i = this.mag * Math.cos(rad);
	this.j = this.mag * Math.sin(rad);
	return this;
};
Vector2D.prototype.updateVector = function () {
	this.mag = Vector2D.computeMagnitude(this.i, this.j);
	this.degree = Vector2D.computeDegree(this.i, this.j);
	return this;
};
Vector2D.prototype.toArray = function () {
	return [this.i, this.j];
};
Vector2D.prototype.toString = function () {
	return this.toArray().join(",");
};
Vector2D.prototype.toLocaleString = function () {
	var str = "magnitude:" + this.mag + ", degree:" + this.degree;
	str += ", (" + this.i + ", " + this.j + ")";
	return str;
};
Vector2D.prototype.getMagnitude = function () {
	return this.mag;
};
Vector2D.prototype.getDegree = function (precision) {
	return +(this.degree).toFixed(precision);
};
Vector2D.prototype.getX = function () {
	return this.i;
};
Vector2D.prototype.getY = function () {
	return this.j;
};
Vector2D.prototype.valueOf = function () {
	return Vector2D.computeMagnitude(this.i, this.j);
};
Vector2D.prototype.add = function (v) {
	if (!(this instanceof Vector2D)) {
		throw new Error("Must pass a vector.");
	}
	return Vector2D.parse(this.i + v.i, this.j + v.j);
};
Vector2D.prototype.equals = function (v) {
	if (this instanceof Vector2D) {
		return (this.i === v.i && this.j === v.j);
	}
	return false;
};
Vector2D.prototype.subtract = function (v) {
	if (!(this instanceof Vector2D)) {
		throw new Error("Must pass a vector.");
	}
	return Vector2D.parse(this.i - v.i, this.j - v.j);
};
Vector2D.prototype.scale = function (val) {
	this.i *= val;
	this.j *= val;
	this.updateVector();
	return this;
};
Vector2D.prototype.negate = function () {
	this.degree = (this.degree + 180)%360;
	this.updatePosition();
	return this;
};

var u = new Vector2D(8, 44);
var v = new Vector2D(13, 89);
var w = new Vector2D(6, 224);
// (u + w)
// 14
// u.subtract(w).getMagnitude()
// 14
// u + v
// 21
// u.add(v).getMagnitude()
// 19.49559464306749
// w.subtract(u).getMagnitude()
// 14
// w + v 
// 19
// w.negate().subtract(v).getMagnitude()
// 9.730947648348469

// v⃗ =4i^+1j^
// w⃗ =0i^+3j^
// What is the magnitude of v⃗ +w⃗ ? 


// Round to the nearest tenth.
// What is the direction of v⃗ +w⃗  in degrees? 

 
// ∘

// Round to the nearest tenth. Your answer should be between 0
// ∘
 // and 360
// ∘
// .
