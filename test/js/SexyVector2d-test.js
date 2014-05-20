describe("SexyVectory2d", function(){
	describe("Creating a vector", function(){
		it("can be done without any arguments", function(){
			var a = new Vector2D();
			assert.equal("a", "a");
		});
	});
	describe("Output formats", function(){
		var x = Vector2D.parse(0,0);
		it("can be json", function(){
			assert.equal( JSON.stringify(x), '{"magnitude":0,"degree":0,"x":0,"y":0}' );
		});
		it("can be a string", function(){
			assert.equal(x.toString(), "(0, 0)");
		});
		it("can be a local string", function(){
			assert.equal(x.toLocaleString(), "magnitude:0, angle:0, position:(0, 0)");
		});
		it("can be an array", function(){
			assert.deepEqual(x.toArray(), [0,0]);
		});
	});
	describe("a clone", function(){
		it("should be a new copy.", function(){
			var x = Vector2D.parse(0,0);
			var y = x.clone();
			
			assert.ok( y !== x );
			assert.ok( x.equals(y) );
		});
	});
	describe("coordinates", function(){
		var x = Vector2D.parse(2,3);
		it("should have a x and y.", function(){
			assert.equal( x.getX(), 2 );
			assert.equal( x.getY(), 3 );
		});
	});
});


//var u = new Vector2D(8, 44);
//var v = new Vector2D(13, 89);
//var w = new Vector2D(6, 224);
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
