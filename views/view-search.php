<!-- Search -->

<div class="view view-search container">
	
	<div class="container">

		<div class="search-wrapper">

		<h1>Search</h1>

			<div class="search-infoBox box">

				<div class="search-infoBox__fields">

					<div class="search-infoBox__fields__single">
						<p>Departure date: </p>
						<input type="date" name="">
						<p>Destination: </p>
						<input type="text" name="">
						<p>Number of passengers: </p>
						<input type="number" name="">
					</div>

					<span>
						<i class="search-infoBox__fields__plus search-infoBox__fields__add-return fa fa-plus-circle" aria-hidden="true"></i>
						<i class="search-infoBox__fields__minus search-infoBox__fields__add-return fa fa-minus-circle" aria-hidden="true"></i>

						<p>Return flight</p>
					</span>

					<div class="search-infoBox__fields__return">
						<p>Departure date: </p>
						<input type="date" name="">
						<p>Destination: </p>
						<input type="text" name="">
						<p>Number of passengers: </p>
						<input type="number" name="">
					</div>

					<?php
						require "view-flow.php";
					?>

				</div>

				
			</div>

			<button data-go-to="results" class="btnDanger link">Search flight</button>

		</div>
	</div>

</div>