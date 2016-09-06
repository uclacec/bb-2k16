var upperContainer = "<div class='wristContainer w-upper'>";
var lowerContainer = "<div class='wristContainer w-lower'>";
var title1 = "<h2 class='wristTitle'>How do I get a wristband?</h2>";
var title2 = "<h2 class='wristTitle'>Wristband Giveaway</h2>";
var desc1 = "<h3 class='wristDescription'>Wristbands will be distributed via an online lottery this year. The deadline to signup is SEPTEMBER 9th, at 4:00PM.</h3>";
var desc2 = "<h3 class='wristDescription'>For the full details, please click the following link:</h3>";
var desc3 = "<h3 class='wristDescription'>In case you didn't receive a floor wristband from the lottery, we will be giving away XX floor wristbands through a competition.</h3>";
var desc4 = "<h3 class='wristDescription'>Click <a href='festival.html' class='wristClick2'>here</a> for more details.</h3>";
var button = "<div class='center'><a href='http://bruinbash.ucla.edu/lotto.html' target='_blank' class='wristClick'>CLICK HERE</a></div>";
var hr = "<hr class='break'>";
var headliner = "<div class='headliner'></div>";
var headlinerInfo = "<img src='assets/headliner-silhouette.png' class='headlinerPic'><hr class='break'><h3 class='shrug'>¯\\_(ツ)_/¯</h3><hr class='break'><h3 class='headliner-description'>We didn't think you would be able to handle the entire lineup at once, so we decided to take it easy on you. Come back tomorrow, we'll have something special for you.</h3>";
var matoma = "<div class='matoma'></div>";
var matomaInfo = "<img src='assets/matoma.jpg' class='matomaPic'><hr class='break'><h3 class='matomaTitle'>Matoma</h3><hr class='break'><h3 class='matomaSub'>A modern staple to festival lineups.</h3><h5 class='matomaDescription'>Norway's Tom Stræte Lagergren (aka Matoma) is a DJ and producer known for his dance-oriented, tropical house music. By 2014, he had started to gain international recognition for his Matoma remixes, including cuts for Jessie J, Akon, Enrique Iglesias, and others.</h5>";
var fourohfour = "<div class='fourohfour'></div>";
var fourohfourInfo = "<img src='assets/fourohfour.png' class='fourohfourPic'><hr class='break'><h3 class='fourohfourTitle'>404 Artist Not Found</h3><hr class='break'><h3 class='fourohfourSub'>The artist you are looking for cannot be found.</h3><h5 class='fourohfourDescription'>Please check back in a day or two.</h5>";
$(function() {
	$('#wristbands').on('click', function() {
		$(this).removeClass("switch");
		$(this).addClass("current");
		$('#concert').removeClass("current");
		$('#concert').addClass("switch");
		$('.info').empty();


		$('.info').append(upperContainer);
		$('.w-upper').append(title1);
		$('.w-upper').append(hr);
		$('.w-upper').append(desc1);
		$('.w-upper').append(desc2);
		$('.w-upper').append(button);

		$('.info').append(lowerContainer);
		$('.w-lower').append(title2);
		$('.w-lower').append(hr);
		$('.w-lower').append(desc3);
		$('.w-lower').append(desc4);
	});

	$('#concert').on('click', function() {
		$(this).removeClass("switch");
		$(this).addClass("current");
		$('#wristbands').removeClass("current");
		$('#wristbands').addClass("switch");

		$('.info').empty();

		$('.info').append(headliner);
		$('.headliner').append(headlinerInfo);

		$('.info').append(matoma);
		$('.matoma').append(matomaInfo);

		$('.info').append(fourohfour);
		$('.fourohfour').append(fourohfourInfo);
	});

	$('.headliner').on('click', function() {
		var win = window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
		if (win) {
    	//Browser has allowed it to be opened
    	win.focus();
		} 
		else {
    	//Browser has blocked it
    	alert('Please allow popups for this website');
		}
	});

	$('.matoma').on('click', function() {
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

	$('.fourohfour').on('click', function() {
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