// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function(){
	arrayMovies = [];
 	questionYear = Math.random() * (2005 - 2001) + 2001;
 	questionYear = Math.round(questionYear);
 	strYear = questionYear.toString(); 
$("#clickPoster").on('click',function(){
	var theme = "love";
	searchMovies();
	$("#question").text("Which movie was released the year " + questionYear);
			

	
	
	function searchMovies(){
		$.ajax({
			url: "http://www.omdbapi.com/?t=" + theme + "&y=" + 2001 + "&plot=short&r=json",
			data: "",
			success: function(response){showMovie1(response)},
			error: function(){console.log("error error error")},
			dataType: "json"
		});
		$.ajax({
			url: "http://www.omdbapi.com/?t=" + theme + "&y=" + 2002 + "&plot=short&r=json",
			data: "",
			success: function(response){showMovie2(response)},
			error: function(){console.log("error error error")},
			dataType: "json"
		});
		$.ajax({
			url: "http://www.omdbapi.com/?t=" + theme + "&y=" + 2003 + "&plot=short&r=json",
			data: "",
			success: function(response){showMovie3(response)},
			error: function(){console.log("error error error")},
			dataType: "json"
		});
			$.ajax({
			url: "http://www.omdbapi.com/?t=" + theme + "&y=" + 2004 + "&plot=short&r=json",
			data: "",
			success: function(response){showMovie4(response)},
			error: function(){console.log("error error error")},
			dataType: "json"
			});
			$.ajax({
			url: "http://www.omdbapi.com/?t=" + theme + "&y=" + 2005 + "&plot=short&r=json",
			data: "",
			success: function(response){showMovie5(response)},
			error: function(){console.log("error error error")},
			dataType: "json"
			});
	}
$("#poster1").on('click',function(){
	
	if(strYear === arrayMovies[1].Year){
		$("#result").text('Win');
		$("#resultImg").attr("src","gremlinGood.jpg");
	}
	else{
		$("#result").text('Wrong');
		$("#resultImg").attr("src","gremlinBad.jpg");
	}

	});
$("#poster2").on('click',function(){
	
	if(strYear === arrayMovies[2].Year){
		$("#result").text('Win');
		$("#resultImg").attr("src","gremlinGood.jpg");
	}
	else{
		$("#result").text('Wrong');
		$("#resultImg").attr("src","gremlinBad.jpg");
	}

	});
$("#poster3").on('click',function(){
	
	if(strYear === arrayMovies[3].Year){
		$("#result").text('Win');
		$("#resultImg").attr("src","gremlinGood.jpg");
	}
	else{
		$("#result").text('Wrong');
		$("#resultImg").attr("src","gremlinBad.jpg");
	}

	});
$("#poster4").on('click',function(){
	
	if(strYear === arrayMovies[4].Year){
		$("#result").text('Win');
		$("#resultImg").attr("src","gremlinGood.jpg");
	}
	else{
		$("#result").text('Wrong');
		$("#resultImg").attr("src","gremlinBad.jpg");
	}

	});
$("#poster5").on('click',function(){

	if(strYear === arrayMovies[5].Year){
		$("#result").text('Win');
		$("#resultImg").attr("src","gremlinGood.jpg");
	}
	else{
		$("#result").text('Wrong');
		$("#resultImg").attr("src","gremlinBad.jpg");
	}

	});

});

function showMovie1 (response){
	var urlPhoto = response.Poster
	$("#poster1").attr("src",response.Poster);
	arrayMovies[1] = response;
}
function showMovie2 (response){
	var urlPhoto = response.Poster
	$("#poster2").attr("src",response.Poster);
	arrayMovies[2] = response;
}
function showMovie3 (response){
	var urlPhoto = response.Poster
	$("#poster3").attr("src",response.Poster);
	arrayMovies[3] = response;
}
function showMovie4 (response){
	var urlPhoto = response.Poster
	$("#poster4").attr("src",response.Poster);
	arrayMovies[4] = response;
}
function showMovie5 (response){
	var urlPhoto = response.Poster
	$("#poster5").attr("src",response.Poster);
	arrayMovies[5] = response;
}



});