<?php

echo '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>Car Dealer</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<link href="stylesheet.css" rel="stylesheet" type="text/css" />
</head>
<body>
<div id="layout">
  <div id="titlebg">
    <div class="title">CAR</div>
    <div class="title1">DEALER</div>
    <div class="title2">WE HAVE</div>
    <div class="title3">THE BEST CARS</div>
    <!--<div class="title4" align="center"> Links: <a target="_blank" href="http://jigsaw.w3.org/css-validator/" class="title4">CSS VALIDATOR</a></div> -->
  </div>
  <hr id="hrline" />
  <div id="gradientbg">
    <div id="links">
     <div class="linktxt"> <a href="index.html" class="linktxt">HOME</a> </div>
      
      <div class="linktxt"><a href="abtus.html" class="linktxt">ABOUT US</a> </div>
      
      <div class="linktxt"><a href="carRent.html" class="linktxt">RENT A CAR </a></div>
      
      
      <div class="linktxt"><a href="contacts.html" class="linktxt">CONTACTS</a></div>
	  </div>
	
	<font color="White">
    <form  name="form1" action="admin.php?do=validate" method="post"> 
	<!--p_loc,p_date,p_time,d_date,d_time,car_type -->
	<table align="right" width="70%" border="1" cellpadding="2">
	<tr>
	<td>
	
	<table align="right" width="100%" border="0" cellpadding="2">
	
	<tr>
	<td> Enter user name
	</td>
	<td> <input type="text" name="uname">
	</td>
	</tr>
	
	<tr>
	<td> Enter password
	</td>
	<td> <input type="text" name="pwd">
	</td>
	</tr>
	
	<td colspan="2" align="center"> <input type="Submit">
	</td>
	</tr>
	
	</table>
	<br>
	<br>
	<br>
	</td>
	</tr>
	</table>
	
	</font>
	</form>
	
	
  </div>
  
  
  <hr id="hrline1" />
  </br>
  </br>
  <!-- to be done -->
  <table border="1" width="100%" align="center" cellpadding="2">
  <tr>
  <td width="25%" align="Center">
  <img src="images/car1.jpg" width="150" height="100">
  </td>
  <td width="25%" align="Center">
  <img src="images/car2.jpg" width="150" height="100">
  </td>
  <td width="25%" align="Center">
  <img src="images/car1.jpg" width="150" height="100">
  </td> 
  <td width="25%" align="Center">
  <img src="images/car2.jpg" width="150" height="100">
  </td>
  </tr>
  
  </table>
  </br>
  </br>
  </br>
  </br>
  <div class="foottxt">Copyright &copy; Cars. </div>
</div>
</html>
';

?>