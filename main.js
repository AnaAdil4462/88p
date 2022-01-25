
// Create canvas variable

//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

function load_img(){
	
	new_image();
}// write code to Upload golf image on the canvas

function new_image()
{
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	if (keypressed=="38"){

		up();
		console.log("up");
		
		}
		
		
		
		if (keypressed=="40"){
		
		down();
		console.log("down");
		
		}
		
		
		
		if (keypressed=="37"){
		
			left();
			console.log("left");
			
			}
		
		
		
			if (keypressed=="39"){
		
				right();
				console.log("right");
				
				}
		
		
		
		
				