<?php
$password1 = password_hash("rasmuslerdorf", PASSWORD_DEFAULT);
$password2 = password_hash("rasmuslerdorf", PASSWORD_DEFAULT);
echo $password1 . "<br>" . $password2 . "<br>";
$converted_res = password_verify("rasmuslerdorf", $password1) ? 'true' : 'false';
echo $converted_res;
?>
