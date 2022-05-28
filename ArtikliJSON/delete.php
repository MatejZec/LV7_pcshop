<?php

include "connection.php";
include "artikli.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: access');
header('Access-Control-Allow-Methods: PUT');
header('Content-type: application/json; charset-utf-8');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, Access-Control-Allow-Methods');



//$sQuery = "Insert into artikli (Naziv, Proizvodac, Model, Cijena, Kolicina) values('".$_POST['naziv']."','".$_POST['proizvodac']."','".$_POST['model']."',".floatval($_POST['cijena']).",".intval($_POST['kolicina']).")";
/*$sQuery = "UPDATE artikli SET Naziv=?, Proizvodac=?, Model=?, Cijena=?, Kolicina=? WHERE Id=?";
$oRecord = $oConnection->prepare($sQuery);
$oRecord->execute([$Id,$Naziv ,$Proizvodac ,$Model ,$Cijena ,$Kolicina] );*/
$query = "DELETE FROM artikli WHERE Id=".$_POST['Id'];
echo $query;
$result = $oConnection->query($query);



?>