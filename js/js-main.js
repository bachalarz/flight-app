/**********************************/
//		Main JS
/**********************************/

// VÆLG STARTSIDE:
<<<<<<< HEAD
=======

>>>>>>> 443587aeaa37d335d76e883ad56cd64ac7e553f6
var startside = "confirmation";

var flowBar = "search";

fnHideView();
$(".view-login").show();

// When a the link class is clicked
$(document).on("click",".link", function() {
	// Get its data-go-to attribute
	var sGoToWindow = $(this).attr("data-go-to");
	flowBar = sGoToWindow;
	// If the sGoToWindow is set, hide current window and show next one
	if (sGoToWindow != null || sGoToWindow != undefined) {
		fnHideView();
		$(".view-"+sGoToWindow).show();
	} 



	setFlowBar();
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
var activeUser = {};

function fnSignup() {
    //Grab the values
    var sUserName = $('#inpUsername').val();
    var sEmail = $('#inpEmail').val();
    var sPassword = $('#inpPassword').val();
    if (sUserName && sEmail && sPassword) {
        //Push to the array
<<<<<<< HEAD
        aUsers.push({ "email": sEmail, "password": sPassword });
=======
        aUsers.push({"username": sUserName, "email": sEmail, "password": sPassword });
        // console.log(aUsers);
>>>>>>> 443587aeaa37d335d76e883ad56cd64ac7e553f6
    }
}

function fnLogOut() {
	fnHideView();
	$(".view-login").show();
}

// Set new startpage

if (startside == "") {
	startside = "login";
}
setView(startside);
function setView(input) { 
	
	$(".view").hide();
	var page = input;
	$(".view-"+page).show();
}


/**********************************/
//		Flowbar
/**********************************/



/**********************************/
//		Flights
/**********************************/

var ajoFlights = [
	{
		"id":"1",
		"departFrom":"CPH",
		"departTo":"BUD",
		"departDate":"",
		"departTime":"",
		"arriveDate":"",
		"arriveTime":"",
		"flightDuration":"",
		"company":""
	}
];




