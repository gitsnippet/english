<?php
$date = trim($_POST["date"]);
$content = trim($_POST["content"]);
$type = trim($_POST["type"]);
$meaning = trim($_POST["meaning"]);
$source = trim($_POST["source"]);

if($date == ""){
    $date = date("Y-m-d");
}

if($source == ""){
    $source = "dictionary";
}

$dsn = "mysql:host=localhost;dbname=english";
$con = new PDO($dsn,"root","xyzzy");

function checkData(){
    global $date,$content,$type,$meaning,$source,$dsn,$con;
    $query_check = "select * from english where `content`='$content' and `type`='$type' ";
    $result = $con->query($query_check);
    $rows = $result->fetchAll();
    return $rows;    
}

function insertData(){
    global $date,$content,$type,$meaning,$source,$dsn,$con;
    $query_insert = "insert into english (`date`,`content`,`type`,`meaning`,`source`) 
                     values('$date','$content','$type','$meaning','$source')"; 
    if($con->query($query_insert)){
        echo "成功写入数据库";
    }
    else{
        echo "something wrong";
    }
}

function updateData(){
    global $date,$content,$type,$meaning,$source,$dsn,$con;
    $query_update = "update english SET `date`='$date',`meaning`='$meaning',`source`='$source' where `content`='$content' and`type`='$type'";
    if($con->query($query_update)){
        setcookie("flag_update","",0);
    }
    else{
        setcookie("flag_update","",0);
        echo "something wrong";
    }
}

if(isset($_COOKIE["flag_update"]) && $_COOKIE["flag_update"]  == 2  &&  isset($_POST)){
    updateData();
    exit();
}
 
$rows = checkData();
$rowCount = count($rows);

if($rowCount >= 1){
    $result = $rows;
    setcookie("flag_update","1");
    echo (json_encode($result));
}
elseif($rowCount == 0){
    insertData();
}

?>
