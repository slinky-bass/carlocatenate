paper.install(window);

	window.onload = function(){
	paper.setup('canvas');
	
	var myPath = new Path();

	//give the variable a stroke colour
	myPath.strokeColor = 'black';
	
	//add new points to the existing path
	myPath.add(new Point(0, 0));
	myPath.add(new Point(50, 50));
	
	//the add function can take more than one argument, so can add multiple new points with one add
	myPath.strokeColor = 'red';
	myPath.add(new Point(100, 40), new Point(150, 50));
	
	//we can also insert points inbetween existing points by specifying the index position first, and then the new point
	myPath.strokeColor = 'blue';
	myPath.insert(2, new Point(75, 5));
	
};