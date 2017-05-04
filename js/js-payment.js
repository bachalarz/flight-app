/**********************************/
//		Payment JS
/**********************************/


$(document).on("click", "#btn-terms", function() {
	swal('We demmand your first born child!');
})


$(document).on("click", ".btnBook", function() {
	var sGoToWindow = $(this).attr("data-go-to");
	var oForm = $(this).siblings(".payment-infoBox").children(".payment-infoBox__fields");
	

	if ( fnCheckInputs(oForm) ){

		flowBar = sGoToWindow;
		// If the sGoToWindow is set, hide current window and show next one
		if (sGoToWindow != null || sGoToWindow != undefined) {
			fnHideView();
			$(".view-"+sGoToWindow).show();
		} 

		setFlowBar();
	}
})


function fnCheckInputs(form) {
	
	var aoOne 	= form.children("div").children("input");
	var aoTwo 	= form.children(".payment-infoBox__fields__phone-passport").children("div").children("input");
	var aoThree = form.children(".payment-infoBox__fields__name").children("div").children("input");
	var aoFour 	= form.children(".payment-infoBox__fields__address").children("div").children("input");
	var aoFive 	= form.children(".payment-infoBox__fields__cardinfo").children("input");
	var aoSix 	= form.children(".payment-infoBox__fields__cardinfo").children("div").children("input");


	var aoChildrenOne = $.merge(aoOne, aoTwo, aoFive);
	var aoChildrenTwo = $.merge(aoThree, aoFour);
	var aoChildrenThree = $.merge(aoChildrenTwo, aoSix);

	var aoChildren = $.merge(aoChildrenOne, aoChildrenThree);

	$("#terms-check").parent("div").removeClass("invalid-checkbox");

	for( var i = 0; i < aoChildren.length; i++ ){
        var oInput = $(aoChildren[i]);
        oInput.removeClass("invalid-input");
        var sText = oInput.val();
        if(sText == "") {
        	oInput.addClass("invalid-input");
        }
        
    }	


    if( !document.getElementById("terms-check").checked ) {
    	$("#terms-check").parent("div").addClass("invalid-checkbox");
    }

	if(!$(aoChildren).hasClass("invalid-input") && document.getElementById("terms-check").checked ){

		return true;
	}

}



