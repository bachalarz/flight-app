/**********************************/
//      Login JS
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
            activeUser = { "username": aUsers[0].username, "email": sEmail, "password": sPassword };
            swal({
                title: 'Thank you for signing in!',
                text: 'You will be taken to your profile page',
                timer: 2000
            }).then(
                function() {
                    fnPopulateProfilePage();
                    $(".view").hide();
                    $(".view-profile").show();
                },
                // handling the promise rejection
                function(dismiss) {
                    if (dismiss === 'timer') {
                        fnPopulateProfilePage();
                        $(".view").hide();
                        $(".view-profile").show();
                    }
                }
            )
        } else {
            swal(
                'Oops...',
                'Something went wrong! Please try again :)',
                'error'
            )
        }
    }
}

/**********************************/
//      Keys
/**********************************/

$('#inpLoginEmail, #inpLoginPassword').keyup(function(event){
    if(event.keyCode == 13){
        $("#btnLogin").click();
    }
});
