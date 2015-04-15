$(document).ready( function () {

	var people = [
		["Luke Beil", "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/10941311_10206098619570320_2082813856509127326_n.jpg?oh=f17155ab8f67c8df29a6d2bdb61b9e85&oe=559A30E4&__gda__=1440489494_5df3a32cd30885fe1bb87c85bda373cb"], 
		["Tim O'Hearn", "https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-9/11146197_753858891401159_1427141548840180165_n.jpg?oh=26c0a0b943bcb27d5f24f51f7695e36d&oe=55D893CB&__gda__=1436825922_1deff25ea3a6195a31488cecbe6ac615"],
		["Greg Potter", "https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/10418468_10205479307797082_7381868372688753177_n.jpg?oh=554f93d9593007b48331ab7d023589a6&oe=55DE9516&__gda__=1437318395_031446ef8f08612a69c4535bdaee32b3"],
		["JJ O'Brien", "https://scontent-lga.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/1471907_10201820037156922_1579569729_n.jpg?oh=9624036126353b4a3a518833c1f24b98&oe=5597D4DE"],
		["Oisin Connolly", "https://scontent-lga.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/1001733_10201330430118300_574719135_n.jpg?oh=68a8a4ad466a6bfd22364f2a1955254f&oe=55DEDFED"],
		["Tony Ge", "https://scontent-lga.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/10369867_10204980538926949_1328690150712913308_n.jpg?oh=ef4bb6d4e9c84d88f7f7e3350a3fc6cb&oe=55A8CF4A"]
	]

	var streamItems = [
		[people[Math.floor(Math.random()*6)][0]," listened to Mr. Brightside by The Killers"],
		[people[Math.floor(Math.random()*6)][0]," listened to Legend by Drake"],
		[people[Math.floor(Math.random()*6)][0]," listened to Novacane by Frank Ocean"],
		[people[Math.floor(Math.random()*6)][0]," listened to Swim Good by Frank Ocean"],
		[people[Math.floor(Math.random()*6)][0]," listened to The Genesis by Nas"],
		[people[Math.floor(Math.random()*6)][0]," listened to School Spirit by Kanye West"],
		[people[Math.floor(Math.random()*6)][0]," listened to Roses by Outkast"],
		[people[Math.floor(Math.random()*6)][0]," listened to 10 Bricks by Raekwon"],
		[people[Math.floor(Math.random()*6)][0]," listened to The Girls on Drugs by Wale"],
		[people[Math.floor(Math.random()*6)][0]," listened to Louis Vuitton by J. Cole"],
	]

	var footerHtml = "<div class=\"footer\"><a href=\"\">Listen</a> |<a href=\"\"> Like </a>| <a href=\"\">Dislike</a></div>";

	console.log(streamItems[0][0]);
	$("#syncWindow").toggle();
	$("#playButton").on( "click", function(){
		$("#signup").hide();
		$("#syncWindow").toggle();
	});
	$("#resetButton").on( "click", function(){
		location.reload();
	});

	loadPeople();
	loadStream();
	loadDiscoverBody();

	function loadDiscoverBody(){
		var id = 10;
		for (var i = 0; i < 18; i++){
			var randomPerson = Math.floor(Math.random()*6);
				$("#discoverBody").append("<div class=\"record\"><h3>"+people[randomPerson][0]+"</h3><div class=\"label\" id="+id+"></div></div>");
			$('#'+id).css("background-image", "url("+people[randomPerson][1]+")"); 
			id++; 
		}
	}

	function loadPeople(){
		var id = 0;
		for (var i = 0; i < 6; i++){
			var randomPerson = Math.floor(Math.random()*6);
			if (i < 3){
				$("#leftColumn").append("<div class=\"record\"><h3>"+people[randomPerson][0]+"</h3><div class=\"label\" id="+id+"></div></div>");
			}
			else{
				$("#rightColumn").append("<div class=\"record\"><h3>"+people[randomPerson][0]+"</h3><div class=\"label\" id="+id+"></div></div>");

			}
			$('#'+id).css("background-image", "url("+people[randomPerson][1]+")"); 
			id++; 
		}
	}

	function loadStream(){
		for (var i = 0; i < 10; i++){
			var randomSong = Math.floor(Math.random()*10);
			$("#stream").append("<div class=\"item\">"+streamItems[randomSong][0]+streamItems[randomSong][1]+footerHtml+"</div>");
		}
	}
});