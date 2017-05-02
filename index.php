<!DOCTYPE html>
<html>
<head>
	<title>Fligt app</title>
	<meta charset="UTF-8">
	<meta name="author" content="Den seje gruppe">
  	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  	<link rel="shortcut icon" type="image/png" href="img/logo.png"/>
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

	<link rel="stylesheet" type="text/css" href="css/style-main.css">
	<link rel="stylesheet" type="text/css" href="css/style-header.css">

	<link rel="stylesheet" type="text/css" href="css/style-signup.css">
	<link rel="stylesheet" type="text/css" href="css/style-login.css">
	<link rel="stylesheet" type="text/css" href="css/style-profile.css">
	<link rel="stylesheet" type="text/css" href="css/style-search.css">
	<link rel="stylesheet" type="text/css" href="css/style-results.css">
	<link rel="stylesheet" type="text/css" href="css/style-details.css">
	<link rel="stylesheet" type="text/css" href="css/style-payment.css">
	<link rel="stylesheet" type="text/css" href="css/style-confirmation.css">

</head>
<body>

	<div class="wrapper-main">

<?php
	
	require_once "views/view-header.php";

	require_once "views/view-signup.php";
	require_once "views/view-login.php";
	require_once "views/view-profile.php";
	require_once "views/view-search.php";
	require_once "views/view-results.php";
	require_once "views/view-details.php";
	require_once "views/view-payment.php";
	require_once "views/view-confirmation.php";

?>

	</div> <!-- #main-wrapper -->

	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>

	<script src="js/js-main.js"></script>

	<script src="js/js-signup.js"></script>
	<script src="js/js-login.js"></script>
	<script src="js/js-profile.js"></script>
	<script src="js/js-search.js"></script>
	<script src="js/js-results.js"></script>
	<script src="js/js-details.js"></script>
	<script src="js/js-payment.js"></script>
	<script src="js/js-confirmation.js"></script>

</body>
</html>