/**********************************/
//		Flow-bar JS
/**********************************/

console.log(flowBar);

function setFlowBar() {
	switch (flowBar) {
	    case "search":
	        $(".flow-bar-line__element1").addClass("flow-element-selected link");
	        break;
	    case "results":
	        $(".flow-bar-line__element2").addClass("flow-element-selected link");
	        break;
	    case "details":
	        $(".flow-bar-line__element3").addClass("flow-element-selected link");
	        break;
	    case "payment":
	        $(".flow-bar-line__element4").addClass("flow-element-selected link");
	        break;
	}
}

setFlowBar();