<?php
		// Fixado pro www.CriaHabbos.ga
    if(!isset($_GET["fig"]) || empty($_GET["fig"])) {
        echo "Sem avatar definido";
        exit;
    }
	$fig = $_GET['fig'];
	$fig .= str_replace("_", ".", $fig);
    $ch = curl_init("http://avatar-retro.com/habbo-imaging/avatarimage?figure=$fig&action=wlk&direction=2&head_direction=3&gesture=sml&size=b&headonly=1");

    curl_setopt_array($ch, array(
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HEADER         => false,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_ENCODING       => "",
        CURLOPT_USERAGENT      => "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36",
        CURLOPT_AUTOREFERER    => true,
        CURLOPT_SSL_VERIFYPEER => false
    ));
 
    $content = curl_exec($ch);
    $type = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
 
    curl_close($ch);
 
    if(!isset($content) || empty($content) || strpos($content, 'Not Found') !== false) {
        echo "Not found";
        exit;
    }
     
    header("Content-Type: {$type}");
 
    echo $content;
?>
