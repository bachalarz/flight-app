/**********************************/
//		Profile JS
/**********************************/


function fnPopulateProfilePage() {

	var view = document.getElementsByClassName('view-profile')[0];

	view.getElementsByClassName('input-name')[0].value = activeUser.username;
	view.getElementsByClassName('input-email')[0].value = activeUser.email;
	view.getElementsByClassName('input-password')[0].value = activeUser.password;

}