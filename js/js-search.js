/**********************************/
//		Search JS
/**********************************/

var showReturn = false;

$(document).on("click", ".search-infoBox__fields__add-return", function() {
	if ( showReturn == false ) {
		$(".search-infoBox__fields__return").slideDown();
		$(".search-infoBox__fields__plus").hide();
		$(".search-infoBox__fields__minus").show();
		showReturn = true;
	} else {
		$(".search-infoBox__fields__return").slideUp();
		$(".search-infoBox__fields__plus").show();
		$(".search-infoBox__fields__minus").hide();
		showReturn = false;
	}
});