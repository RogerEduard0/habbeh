<?php
try {
	$PDO = new PDO("mysql:host=localhost;dbname=comet", "emu_habbo", "HdvXZ0TEZ3cpLxe6ovM0");
	$PDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $ex) {
	die($ex->getMessage());
	exit();
}

if(empty($_GET['user'] ) || strlen( $_GET['user'] ) < 1 )
	die;

$vars = explode('.', $_GET['user']);
if( sizeof( $vars ) < 1 ){
	
	die('akih?');
}

$user = $vars[0];

$p = $PDO->prepare("SELECT figure FROM players WHERE username = ?;");
$p->execute( array( $user ) );

$userLook = $p->fetch()['figure'];
header( "Content-Type: image/png" );
$connect = curl_init('http://habbo.city/habbo-imaging/avatarimage?figure=' . $userLook . '&head_direction=2&direction=2&headonly=0&size=m');
curl_setopt($connect, CURLOPT_SSL_VERIFYPEER, false); 
curl_setopt($connect, CURLOPT_RETURNTRANSFER, 1);         
curl_setopt($connect, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($connect, CURLOPT_TIMEOUT, 1000);      
curl_setopt($connect, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.89 Safari/537.36');
echo curl_exec($connect);
curl_close($connect);