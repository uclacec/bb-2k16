/**
 * Created by George on 8/9/2016.
 */



$(document).ready(function(){

	var lights = false;

	$('#left').on('click', function(){ //here is the trigger div, should be changed

	if(lights == false){
		lights = true;
		$('#left').css({ "background-color" : "#000066"});
		$('#concert').css({ "background-color" : "#0000cc"});
		$('#film').css({ "background-color" : "#9999e6"});
		$('#festival').css({ "background-color" : "#ff66d9"});
		$('#faq').css({ "background-color" : "#00ffcc"});
		$('.title').css({ "color" : "white"});
		}
	else if (lights == true) {
		lights = false;
		$('#left').css({ "background-color" : "#fed202"});
		$('#concert').css({ "background-color" : "deepskyblue"});
		$('#film').css({ "background-color" : "lightcoral"});
		$('#festival').css({ "background-color" : "#2ecc71"});
		$('#faq').css({ "background-color" : "#9b59b6"});
		$('.title').css({ "color" : "black"});
			//change everything back
		}
	});
});