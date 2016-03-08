 function draw(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
		  
		//start grid  
		for (var x = 0.5; x < 1024; x += 10) {
  			ctx.moveTo(x, 0);
  			ctx.lineTo(x, 600);
			} 
		for (var y = 0.5; y < 600; y += 10) {
  			ctx.moveTo(0, y);
  			ctx.lineTo(1014, y);
			}
			
		ctx.strokeStyle = "#999";
		ctx.stroke();
		//end grid
		
		//filled text(string, xpos, ypos)
		ctx.font = "bold 12px sans-serif";
		ctx.fillText("carlo", 248, 43);
		
		//filled rectangle (xpos, ypos, width, height)
		ctx.fillRect(500, 100, 60, 100);
		
		//head arc(xpos, ypos, diameter, circumference-open/closed circle, )
		ctx.beginPath();
		ctx.arc(525,260,40,0,2*Math.PI);
		ctx.stroke();
		ctx.closePath();
		
		//left eye
		ctx.beginPath();
		ctx.arc(518,249,5,0,2*Math.PI);
		ctx.stroke();
		ctx.closePath();
		
		//right eye
		ctx.beginPath();
		ctx.arc(546,249,5,0,2*Math.PI);
		ctx.stroke();
		ctx.closePath();
       
      };