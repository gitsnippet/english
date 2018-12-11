<?php
$dsn = "mysql:host=localhost;dbname=english";
$con = new PDO($dsn,"root","xyzzy");
try{
    $sql ="
        alter table english drop id;
        alter table english auto_increment=1;
        alter table english add id int(4) unsigned NOT Null auto_increment primary key;
        alter table english modify id int(4) unsigned NOT Null auto_increment first;
";
    $stmt = $con->prepare($sql);
    $stmt->execute();
    echo "reset id successfully";
}
catch(PDOException $e){
    echo $e->getMessage();
}
?>
