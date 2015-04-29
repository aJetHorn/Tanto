$(document).ready( function () {

	var people = [
		["Luke", "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/10941311_10206098619570320_2082813856509127326_n.jpg?oh=f17155ab8f67c8df29a6d2bdb61b9e85&oe=559A30E4&__gda__=1440489494_5df3a32cd30885fe1bb87c85bda373cb"], 
		["Tim", "https://scontent-lga.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/13761_10153766793179896_8442265877457921615_n.jpg?oh=5fd4fcf7fea59ac0a4d951a5b08557a6&oe=55CF7128"],
		["Greg", "https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/10418468_10205479307797082_7381868372688753177_n.jpg?oh=554f93d9593007b48331ab7d023589a6&oe=55DE9516&__gda__=1437318395_031446ef8f08612a69c4535bdaee32b3"],
		["JJ", "https://scontent-lga.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/1471907_10201820037156922_1579569729_n.jpg?oh=9624036126353b4a3a518833c1f24b98&oe=5597D4DE"],
		["Oisin", "https://scontent-lga.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/1001733_10201330430118300_574719135_n.jpg?oh=68a8a4ad466a6bfd22364f2a1955254f&oe=55DEDFED"],
		["Tony", "https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xaf1/t31.0-8/1496270_10202344738073575_2065515611_o.jpg"],
		["Mack","https://scontent-lga.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/22755_101277333238700_540194_n.jpg?oh=8763850e4e3aebf72e7707eb7f8cb1ab&oe=55CF10E9"],
		["Peter","https://scontent-lga.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/10480225_10204236824818949_8503852688897255962_n.jpg?oh=b74c6404d7cf25cf18f34ec20cf85aba&oe=55D85960"],
		["Jake","https://scontent-lga.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/11021243_805167782891570_7260562805238216009_n.jpg?oh=c06779b48d728870d4de73390e2689f9&oe=55C8E182"],
		["Corey","https://scontent-lga.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/10959634_10153629532619896_6041829709591164862_n.jpg?oh=1bfb12cba69169892ebcaab044f54644&oe=55999595"],
		["Becca","https://scontent-lga.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/10177513_10206667879562600_6758123946888439319_n.jpg?oh=3f551a713c6ac6a6c6446a947d808577&oe=55E5984F"],
		["Alex","https://scontent-lga.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/644005_10151256389783617_1472499648_n.jpg?oh=7701beffe15cd47090fe6222c3470de0&oe=55E248A2"],
		["Sammy","https://scontent-lga.xx.fbcdn.net/hphotos-xat1/v/t1.0-9/11126929_10206586229318828_3630847238945993622_n.jpg?oh=d611572a90ea19ab5144540ffc25904b&oe=55DDAE7B"],
		["Ayman","https://scontent-lga.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/10615521_10152871884146645_7632468579931370621_n.jpg?oh=b7fd52acaeb1ded1362601ef4e083e38&oe=55D6F8D9"],
		["Alek","https://scontent-lga.xx.fbcdn.net/hphotos-xat1/v/t1.0-9/11119090_10153878993299896_4435544049149095025_n.jpg?oh=d532ad2d6b3995c4c0aa9d408858c9c7&oe=55DC9341"],
		["Sydney","https://scontent-lga.xx.fbcdn.net/hphotos-xfa1/v/l/t1.0-9/314227_284480681641845_2005982936_n.jpg?oh=dd89c8daafdf33021048901c5ceeb274&oe=55D5F239"],
		["Kyle","https://scontent-lga.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/11006463_10152804334113429_2967430176282038025_n.jpg?oh=bc68b0e6a7f7f3ff224efdc64ecb9c17&oe=55CC72E9"],
		["Matthew","https://scontent-lga.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/10402700_10203255127124113_4549835234800058504_n.jpg?oh=4645000ff034afaf85fb192995c833f9&oe=55E08FF3"],
		["John","https://scontent-lga.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/11055401_10153857611134896_3439523011634607244_n.jpg?oh=0cfc1383f7017371ea46955bfdbf8a9b&oe=55DFB46F"],
		["Brandon","https://scontent-lga.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/10698625_4706975729007_6489840866970497479_n.jpg?oh=1232394a3759176ca641c13a70fd54c1&oe=55E58D9E"],
		["Bob-o","https://scontent-lga.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/1378021_10204138680974477_6997698796939232494_n.jpg?oh=4329b2c98b97cb1b6a05bbaf02b89547&oe=55DAC6D8"],
	]

	var streamItems = [
		// "Mr. Brightside by The Killers",
		// "Legend by Drake",
		// "Novacane by Frank Ocean",
		// "Swim Good by Frank Ocean",
		// "The Genesis by Nas",
		// "School Spirit by Kanye West",
		// "Roses by Outkast",
		// "10 Bricks by Raekwon",
		// "The Girls on Drugs by Wale",
		// "Louis Vuitton by J. Cole",
		"King and Cross by Asgeir",
		"What's In It For? by Avi Buffalo",
		"The Bellman's Speech by Bajka",
		"Cinemetropolis by Blue Scholars",
		"Budapest by George Ezra",
		"Full Circle by Half Moon Run",
		"Springhouse by Incan Abraham",
		"An Announcement by Jonathan Boulet",
		"Forever Found by Kan Wakan",
		"Boyhood by Oh No! Yoko",
		"Musical Chairs by The Panda Band",
		"Introspective Personality by Ryan Lindsey",
		"Dreaming by Smallpools",
		"Dear Sister by Team Mer",
		"Bizness by tUnE-yArDs",
		"Ocean Man by Ween",
		"Whale by Yellow Ostrich",
		"Ancient Mars by The Zolas",
		"You by The 1975"
	]

	var uiColors = [
		"#1abc9c", //turquoise
		"#2ecc71", //emerald
		"#3498db", //Peter River
		"#9b59b6", //Amethyst
		"#f1c40f", //sunflower
		"#e67e22", //Carrot
		"#e74c3c"
	]

	var footerHtml = "<div class=\"footer\"><a href=\"\">Listen</a> |<a href=\"\"> Like </a>| <a href=\"\">Dislike</a></div>";

	console.log(streamItems[0][0]);
	$("#syncWindow").toggle();
	$("#loadMetaDataWindow").toggle();
	$("#playButton").on( "click", function(){
		$("#signup").hide();
		$("#syncWindow").toggle();
	});
	$("#resetButton").on( "click", function(){
		location.reload();
	});

	loadPeople();
	//loadStream();
	loadDiscoverBody();
	loadFollowers();
	loadFollowing();

	function loadDiscoverBody(){
		var id = 10;
		for (var i = 0; i < 18; i++){
			var randomPerson = Math.floor(Math.random()*people.length);
				$("#discoverBody").append("<div class=\"record\"><h3>"+people[randomPerson][0]+"</h3><div class=\"label\" id="+id+"></div></div>");
			$('#'+id).css("background-image", "url("+people[randomPerson][1]+")"); 
			id++; 
		}
	}

	function loadFollowers(){
		var id = 10;
		for (var i = 0; i < 6; i++){
			var randomPerson = Math.floor(Math.random()*people.length);
				$("#followersContainer").append("<div class=\"record\"><h3>"+people[randomPerson][0]+"</h3><div class=\"label\" id="+id+"></div></div>");
			$('#'+id).css("background-image", "url("+people[randomPerson][1]+")"); 
			id++; 
		}
	}

	function loadFollowing(){
		var id = 20;
		for (var i = 0; i < 6; i++){
			var randomPerson = Math.floor(Math.random()*people.length);
				$("#followingContainer").append("<div class=\"record\"><h3>"+people[randomPerson][0]+"</h3><div class=\"label\" id="+id+"></div></div>");
			$('#'+id).css("background-image", "url("+people[randomPerson][1]+")"); 
			id++; 
		}
	}

	function loadPeople(){
		var id = 0;
		for (var i = 0; i < 8; i++){
			var randomPerson = Math.floor(Math.random()*people.length);

			if (i < 4){
				$("#leftColumn").append("<div class=\"record\"><div class=\"label\" id="+id+"></div><h3>"+people[randomPerson][0]+"</h3></div>");
			}
			else{
				$("#rightColumn").append("<div class=\"record\"><div class=\"label\" id="+id+"></div><h3>"+people[randomPerson][0]+"</h3></div>");

			}
			$('#'+id).css("background-image", "url("+people[randomPerson][1]+")"); 
			id++; 
		}
	}

	function loadStream(){
		for (var i = 0; i < 2; i++){
			var randomPerson = Math.floor(Math.random()*people.length);
			var randomPerson2 = Math.floor(Math.random()*people.length);
			//var randomSong = Math.floor(Math.random()*17);
			$("#stream").append("<div class=\"item\"><span class=\"streamLink\">"+people[randomPerson][0]+"</span> followed <span class=\"streamLink\">"+people[randomPerson2][0]+"</span></div>");
		}
	}

	$(".record").hover(function(){
		//var randomPerson = Math.floor(Math.random()*6);
		$(this).css("background-color", ""+uiColors[Math.floor(Math.random()*7)]);
		}, function() {
			$(this).css("background-color", "#2c3e50");
			//test();
		}

	);

	//soundclud nomenclature: sc1.. sc2.. etc
	//soundcloud embed hacks.. 

	function test(){
		console.log($("#sc1 .playButton__play"));
		$(".playButton__play").css("opacity", .1);
	}

	console.log($("#widget"));

	console.log($("#sc1"));


	$(".scItem .hide").on("click", function(){
		$(this).parents('.scItem').toggle()
	});

	$(".scItem .like").on("click", function(){
		$(this).parents(".middle").text("You liked this too!");
	});

	$(".scItem .dislike").on("click", function(){
		$(this).parents(".middle").text("You didn't like this song!");
	});

	//filePicker
	filepicker.setKey("AeGyWMKdMTEOYyFIWxrqlz");
	$("#syncButton").on("click", function(){
		filepicker.pick(
			function(Blob){
				$.ajax({
					url : Blob.url,
					dataType: "text",
					success : function (data) {
						console.log("Metadata file uploaded successfully");
						$("#syncWindow").toggle();
						$("#title").toggle();
						//$("#background-image").css("webkitFilter", "grayscale(0.6)");
						$("#background-image").css("webkitFilter", "blur(8px)");
						$("#loadMetaDataWindow").toggle();

						setTimeout(
  							function() 
  							{
  								window.location.replace("/dashboard.html");
  							}, 6000);
					}
				});
			}
		);
	});
});