/**
 * Created by George on 8/9/2016.
 */



$(document).ready(function(){

	var lights = false;

	$('#left').on('click', function(){ //here is the trigger div, should be changed

	if(lights == false){
		lights = true;
		$("#logo").attr('src','assets/Home%20Page%20Nighttime%20Animation.gif');
		$('#left').css({ "background-color" : "#090344"});
		$('#concert').css({ "background-color" : "#140d01"});
		$('#film').css({ "background-color" : "#170116"});
		$('#festival').css({ "background-color" : "#011000"});
		$('#faq').css({ "background-color" : "#170022"});
		$('.title').css({ "color" : "white"});
		$('.subtitle').css({"color" : "white"});
		}
	else if (lights == true) {
		lights = false;
		$('#logo').attr('src','assets/Home%20Page%20Blue%20Daytime%20Animation.gif');
		$('#left').css({ "background-color" : "#40bfff"});
		$('#concert').css({ "background-color" : "#fed225"});
		$('#film').css({ "background-color" : "lightcoral"});
		$('#festival').css({ "background-color" : "#2ecc71"});
		$('#faq').css({ "background-color" : "#9b59b6"});
		$('.title').css({ "color" : "darkblue"});
		$('.subtitle').css({"color" : "darkblue"});
			//change everything back
		}
	});
});