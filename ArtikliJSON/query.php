<?php

include "connection.php";
header('Access-Control-Allow-Origin: *');


$sQuery = "Insert into artikli (Naziv, Proizvodac, Model, Cijena, Kolicina) values('".$_POST['naziv']."','".$_POST['proizvodac']."','".$_POST['model']."',".floatval($_POST['cijena']).",".intval($_POST['kolicina']).")";
echo $sQquery;
$Result = $oConnection->query($sQuery);

?>