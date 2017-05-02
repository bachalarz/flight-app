/**********************************/
//		Login JS
/**********************************/

$(document).on('click', '#btnCreateAccount', function() {
    $(".view").hide();
    $(".view-signup").show();
});

$(document).on('click', '#btnLogin', function() {
    fnLogin();
});

function fnLogin() {
    var sEmail = $('#inpLoginEmail').val();
    var sPassword = $('#inpLoginPassword').val();
    for (var i = 0; i < aUsers.length; i++) {
        if (sEmail == aUsers[i].email && sPassword == aUsers[i].password) {
            $(".view").hide();
            $(".view-profile").show();
        } else {
            swal(
                'Oops...',
                'Something went wrong! Please try again :)',
                'error'
            )
        }
    }
}
