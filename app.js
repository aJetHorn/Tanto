$(document).ready( function () {
	$("#syncWindow").toggle();
	$("#playButton").on( "click", function(){
		$("#signup").hide();
		$("#syncWindow").toggle();
	});
	$("#resetButton").on( "click", function(){
		location.reload();
	});
});