/**
 * Created by George on 8/9/2016.
 */



$(document).ready(function(){

	var lights = false;

	$('#left').on('click', function(){ //here is the trigger div, should be changed

	if(lights == false){
		lights = true;
		$("#logo").attr('src','assets/Home%20Page%20Nighttime%20Animation.gif');
		$('#left').css({ "background-color" : "#090344", "cursor":'url(../assets/fire_emoji.gif), pointer !important;'});
		$('#concert').css({ "background-color" : "#140d01"});
		$('#film').css({ "background-color" : "#170116"});
		$('#festival').css({ "background-color" : "#011000"});
		$('#faq').css({ "background-color" : "#170022"});
		$('#left').find('.subtitle').css({"color" : "white"});
		$('#left').find('.title').css({'color':'white'});
		$('#concert').find('.subtitle').css({'color':'rgb(229, 201, 129)'});
		$('#film').find('.subtitle').css({'color':'rgb(159, 53, 152)'});
		$('#festival').find('.subtitle').css({'color':'rgb(62, 168, 67)'});
		$('#faq').find('.subtitle').css({'color':'rgb(114, 70, 163)'});

		//take out all of the words
		$('#right').find(".title").css({'display':'none'});
		$('.glow').css({'display':'block'});
	}
	else if (lights == true) {
		lights = false;
		$('#logo').attr('src','assets/Home%20Page%20Blue%20Daytime%20Animation.gif');
		$('#left').css({ "background-color" : "#40bfff"});
		$('#concert').css({ "background-color" : "#fed225"});
		$('#film').css({ "background-color" : "lightcoral"});
		$('#festival').css({ "background-color" : "#2ecc71"});
		$('#faq').css({ "background-color" : "#9b59b6"});
		$('.subtitle').css({"color" : "darkblue"});
		$('#left').find('.title').css({'color':'darkblue'});
			//change everything back
		//put in all the words
		$('.title').css({'display':'block'});
		$('.glow').css({'display':'none'});
		}
	});
});