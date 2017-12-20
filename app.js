$(document).ready(function(){



	// API key: 90e9a8eb12f64d8f9d05068e5729629c
	// Last.fm key = 051fec367c98d947aa472ff9fcabfae5

	var apiKey = "90e9a8eb12f64d8f9d05068e5729629c";
	var lastApiKey = "051fec367c98d947aa472ff9fcabfae5";

//	var band = one of three



	//request. Root request URL: http://api.musixmatch.com/ws/1.1/

	// Sample artist name search:  https://api.musixmatch.com/ws/1.1/artist.search?format=jsonp&callback=callback&q_artist=misfits&apikey=90e9a8eb12f64d8f9d05068e5729629c
	// From artist_ID, based on above:  https://api.musixmatch.com/ws/1.1/artist.get?format=jsonp&callback=callback&artist_id=8562&apikey=90e9a8eb12f64d8f9d05068e5729629c

	//matcher with name and artist:  https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=twist%20of%20cain&q_artist=danzig&apikey=90e9a8eb12f64d8f9d05068e5729629c

	//rsp: 	callback({"message":{"header":{"status_code":200,"execute_time":0.040897130966187},"body":{"lyrics":{"lyrics_id":1350718,"can_edit":0,"locked":0,"action_requested":"","verified":0,"restricted":0,"instrumental":0,"explicit":1,"lyrics_body":"Yea, yea, yea\nOoh\nI can feel it move me\nFeel it shove me\nAs I break the law\nSaid yea\nI can feel it's jabbing\nCuts the numbness then I\nI come alive yea\n\nTwist of Cain\nYea drives my brain\nYea twist of Cain\nMake me come alive\n'Cause it does\n\nYea twist of Cain\nyea drives my brain\nYea twist of Cain\nMake me come alive\n\nSaid yea\nI took it standing\nBroke commandments\nAnd he tumbled like a toy\nBlood\nLike a crimson highway\nSpreading out\nFrom his forehead to the ground\n...\n\n******* This Lyrics is NOT for Commercial use *******","lyrics_language":"en","lyrics_language_description":"English","script_tracking_url":"https:\/\/tracking.musixmatch.com\/t1.0\/m_js\/e_1\/sn_0\/l_1350718\/su_0\/tr_3vUCAKIqlyDkOLIrYbN7uOr93O8hTqedS62d5WwZ0aOuiUtlIvdwLfzEyzEjJ_j8xgQKjDQtzFmgdO3MYE3LCWeoyeaVZR6fu0591x2uwiEbB_nQT0cC8NjLrFQLMZdy4uOu2PsrQe41iBwgAb1DK3fpp08UQtcdQ86B45IX5QcYeeAaD3N3Qgd0gU1qSZ98oLbAKcyczS2UspTJ3FHHGKgJVy5fSvOXPh7_UmPBhXlRtJwMtCUPojDHqUYqHhFQMQKO5uf-iTTJ6UhS7LCslSCLTkrGmp5GL6C5qPcX5YviiDAf4GjUc9Yur9zkAbiaQrbYkwHTMrMoY1r7lr5juu8PBJpwTJNJS6jXY51Fv7e6317b8S135ND7Hul52WvB4TFneG12bYC000WhN7zVsLqk6FF_IGV9jMzFtYf1\/","pixel_tracking_url":"https:\/\/tracking.musixmatch.com\/t1.0\/m_img\/e_1\/sn_0\/l_1350718\/su_0\/tr_3vUCAIXr3zacaUEQHFgi-7zC0f47Xyi3pYyvzvc32vL7e7BKNA09Ry8L2uoPgepHIg2x-Ev4c4F2Oasy50GI6jAn-jg2A39mA6Sb5nGasQ_u8kz_6VCEyoOwMZypLno92mQyBXnfZPC_26_0VhKKU-3LM0fosJVPhT7E75WZf17ehAUE8MttVCMBzH-lKvl6uGKzgW8mugoRVnAS4PF0Qap-6Mji3mCtxDWMRepUrVrPWqO8B3KWVKFrQF6VKRnJJoRNW47Cp9sqol745jXdfDeR9Aq1mMHM5oUHhdPGe0OwPcIeOiYbIGwTKWzKHe0bcnLJQMiZVXfeAJFoS1rkezO47AYYX5CAFeJAjGHwCizDwcqXFK_wh-qXlFAg_kae-fir8oDyDQPtp0PjhWmcGnSR1YBY3MQZp5JJVlWB\/","html_tracking_url":"https:\/\/tracking.musixmatch.com\/t1.0\/m_html\/e_1\/sn_0\/l_1350718\/su_0\/tr_3vUCAERUhe6pqETNagxFsXcPR8wO5G9tZiSV6TriN5nKGQUVr9UhNIFmzCNAMWF4ze4A1WgcCRtJ8oK_HCzYiCwLp3gSxp-de_MYdDpGIA8Ci-5lKt7ZCYy41GFJ4vufu3W1w4KjI2WIO3l3j1790edVsyW-vQ3hpXlFs6L32tP300oOq94SaIlfp24tYkmJy69zzaHom8pmuDtpcPNtyslAHFVgQKIQSaePnjy1QgMKHat4mUI7ak3OTiQw0gIHhHhxMNGOBUE5yCVfeylT1mTeQsreSrr6cwPoHkiyFHhHCl8U5iXoCTjaKzlkjJOBzUhYZ_miEFF7K85udHuV6feyy1Qx38XMeGY859IkUciMktHB97uGjNBe4qf2akzfUmLRiEXPCkkJq9oGwaqdlyA6p5TZpLCmcKYzslG_\/","lyrics_copyright":"Lyrics powered by www.musixmatch.com. This Lyrics is NOT for Commercial use and only 30% of the lyrics are returned.","writer_list":[],"publisher_list":[],"backlink_url":"https:\/\/www.musixmatch.com\/lyrics\/Danzig\/Twist-of-Cain?utm_source=application&utm_campaign=api&utm_medium=","updated_time":"2010-07-06T21:31:17Z"}}}});


	// Let's try and ajax call

	$("#trackName-submit").click(function(event){
		event.preventDefault();

		var trackName = $("#trackName-value").val();
		var band = $("#band-select").val();
		
			$.ajax({
	  		url: "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=051fec367c98d947aa472ff9fcabfae5&artist=" + band + "&track=" + trackName + "&format=json",
	  		dataType:"json",
	  		accept: "application/json",
	  		contentType: "application/json; charset=utf-8",
	  		success:function(data){
	  			console.log(data);
	  			var albumCover = (data.track.album.image[3]["#text"]);
	  			$(".album-cover").html('<img id="theImg" src="' + albumCover +'" />')
	  			},

	  		error:function(){
	  			console.log("Something is Wrong");
	  		}

		});


	$.ajax({
  		url: "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=" + trackName + "&q_artist="+ band + "&apikey=90e9a8eb12f64d8f9d05068e5729629c",
  		dataType:"jsonp",
  		accept: "application/jsonp",
  		contentType: "application/jsonp; charset=utf-8",
  		success:function(data){
  			$(".main-content").html(data.message.body.lyrics.lyrics_body);
  			console.log(data);
  		
  			},

  		error:function(){
  			console.log("Something is Wrong");
  		}

		});




			
});
//	url = "http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=" + trackName + "&q_artist="+ band + "&apikey=" + apiKey 


});
