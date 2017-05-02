/**********************************/
//		Main JS
/**********************************/

console.log("main");

fnHideView();
$(".view-login").show();

// When a the link class is clicked
$(document).on("click",".link", function() {
	// Get its data-go-to attribute
	var sGoToWindow = $(this).attr("data-go-to");
	console.log(sGoToWindow);
	// If the sGoToWindow is set, hide current window and show next one
	if (sGoToWindow != null || sGoToWindow != undefined) {
		fnHideView();
		$(".view-"+sGoToWindow).show();
	} 
});

/**********************************/
//		Functions
/**********************************/

function fnHideView() {
	$(".view").hide();
}

function fnLogOut() {
	fnHideView();
	$(".view-login").show();
}