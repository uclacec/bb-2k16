/**
 * Created by George on 8/9/2016.
 */



$(document).ready(function(){

	var lights = false;


	if(lights == false){
		$('#left').on('click', function(){ //here is the trigger div, should be changed
			
			lights = true;

			$('#left').css({ "background-color" : "#000066"});
 			$('#concert').css({ "background-color" : "#0000cc"});
 			$('#film').css({ "background-color" : "#9999e6"});
 			$('#festival').css({ "background-color" : "#ff66d9"});
 			$('#faq').css({ "background-color" : "##00ffcc"});
 			$('.title').css({ "color" : "white"});
 			});
		}
	else{
		$('#left').on('click', function(){ 
			lights = false;
			$('#left').css({ "background-color" : "yellow"});
			//change everything back
			 	});
		}
});