<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $file = fopen($_POST['key'] + ".html", "w");
    $html = $_POST['snatch_raw'];
    fwrite($file, $html);
    fclose($file);
}