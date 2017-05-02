/**********************************/
//		Signup JS
/**********************************/

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
