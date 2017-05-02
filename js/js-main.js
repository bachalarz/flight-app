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


$(document).on("click", "#btnSignup", function() {
    fnSignup();
});

var aUsers = [];

function fnSignup() {
    //Grab the values
    var sEmail = $('#inpEmail').val();
    var sPassword = $('#inpPassword').val();
    if (sEmail && sPassword) {
        //Push to the array
        aUsers.push({ "email": sEmail, "password": sPassword });
        console.log(aUsers);
    }
}


function fnLogOut() {
   fnHideView();
   $(".view-login").show();
}