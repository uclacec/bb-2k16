var upperContainer = "<div class='wristContainer w-upper'>";
var lowerContainer = "<div class='wristContainer w-lower'>";
var title1 = "<h2 class='wristTitle'>How do I get a wristband?</h2>";
var title2 = "<h2 class='wristTitle'>Wristband Giveaway</h2>";
var desc1 = "<h3 class='wristDescription'>Wristbands will be distributed via an online lottery this year. The deadline <br> to signup is SEPTEMBER 9th, at 4:00PM.</h3>";
var desc2 = "<h3 class='wristDescription'>For the full details, please click the following link:</h3>";
var desc3 = "<h3 class='wristDescription'>In case you didn't receive a floor wristband from the lottery, we will be giving away a few floor wristbands through a competition.</h3>";
var desc4 = "<h3 class='wristDescription'>Click <a href='festival.html' class='wristClick2'>here</a> for more details.</h3>";
var button = "<div class='center'><a href='http://bruinbash.ucla.edu/lotto.html' target='_blank' class='wristClick'>CLICK HERE</a></div>";
var hr = "<hr class='break'>";
var headliner = "<div class='headliner' id='ty'></div>";
var headlinerInfo = "<img src='assets/ty.png' class='headlinerPic'><hr class='break'><h3 class='matomaTitle'>Ty Dolla $ign</h3><hr class='break'><h3 class='matomaSub'>TyDolla$ign was born into music.</h3><h5 class='matomaDescription'>The ability to produce music in various genres while retaining a signature sound is what TyDolla$ign prides himself on. <br> With major labels calling, millions of online views, and co-signs from Snoop Dogg and Will.I.Am., the movement is on the rise. TyDolla$ign continues to tour all over the country to promote his mixtapes and additional projects. As TyDolla$ign continues to find commercial success producing, he's amassing a huge following as an artist.</h5>";
var matoma = "<div class='headliner' id='matoma'></div>";
var matomaInfo = "<img src='assets/matoma.png' class='headlinerPic'><hr class='break'><h3 class='matomaTitle'>Matoma</h3><hr class='break'><h3 class='matomaSub'>A modern staple to festival lineups.</h3><h5 class='matomaDescription'>Norway's Tom Stræte Lagergren (aka Matoma) is a DJ and producer known for his dance-oriented, tropical house music. By 2014, he had started to gain international recognition for his Matoma remixes, including cuts for Jessie J, Akon, Enrique Iglesias, and others.</h5>";
var fourohfour = "<div class='headliner' id='sb'></div>";
var fourohfourInfo = "<img src='assets/sbs.png' class='headlinerPic'><hr class='break'><h3 class='fourohfourTitle'>404 Artist Not Found</h3><hr class='break'><h3 class='fourohfourSub'>The artist you are looking for cannot be found.</h3><h5 class='fourohfourDescription'>Please check back in a day or two.</h5>";
var clear = '<div class="clear"></div>';
var floorList = "<ul class='seatingInfo'><li class='wrist-list-item'>If you received a 100/200 Level Wristband, please click the 100/200 button at the top right of this box.</li><li class='wrist-list-item'>On Monday, September 19th, please go to the UCLA Central Ticket Office between the hours of <strong>10am to 4pm</strong> to receive your FLOOR wristband. Your BruinCard will be scanned prior to receiving your wristband. If you need a replacement BruinCard, you may purchase a replacement at Kerckhoff 123.</li><li class='wrist-list-item'>Please note that you do not need to line up early because your wristband is guaranteed as long as you are in line to pick up your wristband by 4pm. Please arrive at least 30 minutes in advance to 4pm to ensure you do not miss the deadline.</li><li class='wrist-list-item'>If you are not in line by 4pm, your wristband will be nullified and you will not be admitted into the concert. No exceptions.</li><li class='wrist-list-item'>There is absolutely no cutting in line. Any sign of misconduct will result in the loss of your ticket.</li><li class='wrist-list-item'>Tickets are nontransferable. They are bound to your BruinCard and can only be claimed by yourself with your BruinCard present. Nobody BUT yourself can claim the wristband.</li></ul>";
var hunnaTwoList = "<ul class='seatingInfo'><li class='wrist-list-item'>If you received a FLOOR wristband, please click the Floor button at the top left of this box.</li><li class='wrist-list-item'>On Monday, September 19th, please go to the IM Field (across from Pauley Pavilion) to pick up your 100/200 Level wristband. The wristbands will be available for pickup between the hours of <strong>12pm to 4pm.</strong></li><li class='wrist-list-item'>Your BruinCard will be scanned prior to receiving your wristband. If you need a replacement BruinCard, you may purchase a replacement at Kerckhoff 123</li><li class='wrist-list-item'>On the IM Field, you will have the opportunity to claim either a 100 seating level wristband or a 200 seating level wristband, while supplies last.</li><li class='wrist-list-item'>Please note that for all lottery recipients, a wristband is guaranteed as long as you are in line to pick up your wristband by 4pm, but we cannot guarantee that you will receive the seating level you want. Please arrive at least 30 minutes in advance to 4pm to ensure you do not miss the deadline.</li><li class='wrist-list-item'>If you are not in line to pick up your wristband by 4pm, your wristband will be nullified and you will not be admitted into the concert. No exceptions.</li><li class='wrist-list-item'>There is absolutely no cutting in line. Any sign of misconduct will result in the loss of your ticket.</li><li class='wrist-list-item'>Tickets are nontransferable. They are bound to your BruinCard and can only be claimed by yourself with your BruinCard present. Nobody BUT yourself can claim the wristband.</li></ul>";
var topInfo = "<h2 class='wristTitle'>Where do I get my wristband?</h2><hr class='break'><p class='wristband-clickable wrist-active' id='floor'>Floor</p><p class='wristband-clickable wrist-inactive' id='hunnatwo'>100/200</p><div class='clear'></div><div class='wristInfo'></div>";

$(function() {


	$('body').on('click', '#wristbands', function() {
		$(this).removeClass("switch");
		$(this).addClass("current");
		$('#concert').removeClass("current");
		$('#concert').addClass("switch");

		$('.info').empty();
		$('.info').append(clear);


		$('.info').append(upperContainer);
		$('.w-upper').append(topInfo);
		$('.wristInfo').append(floorList);

		$('.info').append(lowerContainer);
		$('.w-lower').append(title2);
		$('.w-lower').append(hr);
		$('.w-lower').append(desc3);
		$('.w-lower').append(desc4);
	});

	$('body').on('click', '#concert', function() {
		$(this).removeClass("switch");
		$(this).addClass("current");
		$('#wristbands').removeClass("current");
		$('#wristbands').addClass("switch");

		$('.info').empty();
		$('.info').append(clear);

		$('.info').append(headliner);
		$('#ty').append(headlinerInfo);

		$('.info').append(matoma);
		$('#matoma').append(matomaInfo);

		$('.info').append(fourohfour);
		$('#sb').append(fourohfourInfo);
	});

	$('body').on('click', '#floor', function() {
		$(this).removeClass("wrist-inactive");
		$(this).addClass("wrist-active");
		$('#hunnatwo').removeClass("wrist-active");
		$('#hunnatwo').addClass("wrist-inactive");

		$(".wristInfo").empty();
		$(".wristInfo").append(floorList);
	});

	$('body').on('click', '#hunnatwo', function() {
		$(this).removeClass("wrist-inactive");
		$(this).addClass("wrist-active");
		$('#floor').removeClass("wrist-active");
		$('#floor').addClass("wrist-inactive");

		$(".wristInfo").empty();
		$(".wristInfo").append(hunnaTwoList);
	});

	$('body').on('click', '#ty', function() {
		var win = window.open('https://www.youtube.com/watch?v=snTZ7X8OMuc', '_blank');
		if (win) {
    	//Browser has allowed it to be opened
    	win.focus();
		} 
		else {
    	//Browser has blocked it
    	alert('Please allow popups for this website');
		}
	});

	$('body').on('click', '#matoma', function() {
		var win = window.open('https://soundcloud.com/matoma-official', '_blank');
		if (win) {
    	//Browser has allowed it to be opened
    	win.focus();
		} 
		else {
    	//Browser has blocked it
    	alert('Please allow popups for this website');
		}
	});

	$('body').on('click', '#sb', function() {
		var win = window.open('https://www.youtube.com/watch?v=Sagg08DrO5U', '_blank');
		if (win) {
    	//Browser has allowed it to be opened
    	win.focus();
		} 
		else {
    	//Browser has blocked it
    	alert('Please allow popups for this website');
		}
		
	});


});