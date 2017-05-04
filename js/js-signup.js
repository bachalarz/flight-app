/**********************************/
//		Signup JS
/**********************************/

$(document).on('click', '#btnSignup', function(){
	swal('Thank you for signing up! You are now able to login :)');
	setTimeout(function(){
		$(".view").hide();
		$(".view-login").show();
	}, 500);
});

/**********************************/
//      Keys
/**********************************/

$('#inpUsername, #inpEmail, #inpPassword').keyup(function(event){
    if(event.keyCode == 13){
        $("#btnSignup").click();
    }
});