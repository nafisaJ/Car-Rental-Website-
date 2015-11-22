<?php
if($_REQUEST['do']=='CarRent')
	{ $html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>Car Dealer</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<link href="stylesheet.css" rel="stylesheet" type="text/css" />
</head>
<body>'; //header
if($_GET['err']==1) // no cars available
{
	$html .='<script>
					alert(" There are no more cars of this model available Pls choose some other model ");
					</script>';
					
}	
$html .='<div id="layout">
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
    <form  name="form1" action="rent.php?do=rent_logic" method="post"> 
	<!--p_loc,p_date,p_time,d_date,d_time,car_type -->
	<table align="right" width="70%" border="1" cellpadding="2">
	<tr>
	<td>
	
	<table align="right" width="100%" border="0" cellpadding="2">
	
	<tr>
	<td> Enter pickup location:
	</td>
	<td> <input type="text" name="p_loc">
	</td>
	</tr>
	
	<tr>
	<td> Enter pickup date:
	</td>
	<td> <input type="text" name="p_date">
	</td>
	</tr>
	
	<tr> 
	<td> Enter pickup time:
	</td> 
	<td> <input type="text" name="p_time">
	</td>
	</tr>
	
	
	<tr> 
	<td> Enter destination date :
	</td> 
	<td> <input type="text" name="d_date">
	</td>
	</tr>
		
	<tr> 
	<td> Enter destination time :
	</td> 
	<td> <input type="text" name="d_time">
	</td>
	</tr>
	
	
	<tr> 
	<td> Select car model type:
	</td> 
	<td> <select name="car_type" id="car_type">
			<option> Model1 </option>
			<option> Model2 </option>
			<option> Model2 </option>
		</select>
	</td>
	</tr>
	
	<tr> 
	
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
echo $html;
}
	
/* table=car_rent
pk = id
p_loc,p_date,p_time,d_date,d_time,car_type
feilds - pickup location, pick date, drop date , start time , end time , preferred car type
table=car_details
pk=c_id
tot_count,booked_count,car_type
*/
if($_REQUEST['do']=='rent_logic')
{
echo 'rent logic';
$conn=mysql_connect('localhost','root','');
		$db=mysql_select_db('CR',$conn);
		echo $_POST[car_type];
		$bk_cn=mysql_query("Select booked_count from car_details where car_type='".$_POST[car_type]."'");
		$bk_cn=mysql_fetch_array($bk_cn);
		echo $bk_cn['booked_count'];
		$tot_cn=mysql_query("Select tot from car_details where car_type='".$_POST[car_type]."'");
		$tot_cn=mysql_fetch_array($tot_cn);
		echo $tot_cn['tot'];
		
		if($bk_cn['booked_count']+1<$tot_cn['tot'])
		{
		echo 'yes';
		$res=mysql_query("Insert into car_rent(p_loc,p_date,p_time,d_date,d_time,car_type) values('".$_POST['p_loc']."','".$_POST['p_date']."','".$_POST['p_time']."','".$_POST['d_date']."','".$_POST['d_time']."','".$_POST['car_type']."')");
		}
		else
		{
		//echo 'no';
			Header('Location:rent.php?do=CarRent&err=1');
			
			
		}
		
}
else
{


}
echo $html;
		
?>