<!-- Details -->

<div class="view view-details container">

<h1>Details</h1>

	<div id="details-container ">
		<div class="ticket-type form-control">Ticket type: <br>
		    <input type="radio" name="gender" value="male" checked> Economy<br>
			<input type="radio" name="gender" value="female"> Premium Economy ( +30£ )<br>
			<input type="radio" name="gender" value="other"> Business class ( +100£ )<br> 
			<input type="radio" name="gender" value="female"> First class ( +250£ )
		</div>

	<div class="Baggages form-control">
		Baggages: 
    	<select name="Baggages">
	    <option value="1">1</option>
	    <option value="2">2</option>
	    <option value="3">3</option>
	    <option value="5">5</option>
	    <option value="6">6</option>
	    <option value="7">7</option>
  </select>
      </div>


    <button id="btn-details" data-go-to="payment" class="btnSuccess link">Accept details</button>

    </div>
	

	<?php
		require "view-flow.php";
	?>

</div>