/**********************************/
//		Main JS
/**********************************/

// When a the link class is clicked
$(document).on("click",".link", function() {

	// Get its data-go-to attribute
	var sGoToWindow = $(this).attr("data-go-to");

	// If the sGoToWindow is set, hide current window and show next one
	if (sGoToWindow != null || sGoToWindow != undefined) {

		$(".wdw").hide();

		$("#"+sGoToWindow).show();
	} 

});