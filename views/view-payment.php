<!-- Payment -->

<div class="view view-payment container">

	<div class="payment-wrapper">

		
		<h1>Payment</h1>

		<div class="payment-infoBox box">

			<div class="payment-infoBox__fields">
				<!-- <form id="frmBook"> -->

					

					<p>First name:</p>
					<input type="text" name="first-name">
					<p>Surname: </p>
					<input type="text" name="surname">

					<div class="payment-infoBox__fields__address">

						<p>Address</p>
						<div>
							<input type="text" name="address-name">
							<input type="number" name="address-number">
						</div>

						<div>
							<input type="number" name="postalcode" min="1000" max="9999">
							<input type="text" name="city">
						</div>

					</div>

					<p>Phonenumber: </p>
					<input type="number" name="phone-number">
					<p>Passport number: </p>
					<input type="number" name="passport-number">

					<div class="payment-infoBox__fields__cardinfo">
						<p>Card information: </p>
						
						<input type="number" name="card-number">
						
						<div>
							<input type="number" name="card-valid-month" min="01" max="12">
							<p>/</p>
							<input type="number" name="card-valid-year" min="16" max="40">
						</div>
						<div>
							<p>CVC: </p>
							<input type="number" name="cvc" min="100" max="999">
						</div>
					</div>

					<div class="payment-infoBox__fields__terms">
						<input id="terms-check" type="checkbox" name="terms">
						<p id="btn-terms">I accept the terms and conditions</p>
					</div>

					


				<!-- </form> -->
			</div>
				
				<?php require "view-flow.php"; ?>
		
		</div>

		<button data-go-to="conformation" class="btnDanger btnBook">Book flight</button>


	</div>

</div>