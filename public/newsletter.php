
<?php
if(isset($_POST['email'])) {
    $data = $_POST['email'].',' ;
    $ret = file_put_contents( 'emails.txt', $data.PHP_EOL, FILE_APPEND | LOCK_EX );
    if($ret > 0) {
        echo "$ret bytes written to file";
    }
    else {
        die('There was an error recording email');
    }
}
else {
    die('Die');
}
?>  