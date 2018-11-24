<?php
 $date = $_POST["date"];
 $content = $_POST["content"];
 $type = $_POST["type"];
 $meaning = $_POST["meaning"];
 $source = $_POST["source"];

 $dsn = "mysql:host=localhost;dbname=english";
 $con = new PDO($dsn,"root","xyzzy");
 
 global  $date,$content,$type,$meaning,$source,$dsn,$con;

function checkData(){
    global  $date,$content,$type,$meaning,$source,$dsn,$con;
    $query_check = "select * from english where `content`='$content' and `type`='$type' ";
    $result = $con->query($query_check);
    $rows = $result->fetchAll();
    return $rows;    
}

function writeData(){
    global  $date,$content,$type,$meaning,$source,$dsn,$con;
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
    global  $date,$content,$type,$meaning,$source,$dsn,$con;
    $query_update = "update english SET `date`='$date',`content`='$content',
                                        `type`='$type',`meaning`='$meaning',`source`='$source' ";
    if($con->query($query_update)){
        setcookie("flag_update","",0);
    }
    else{
        echo "something wrong";
    }
}

if(isset($_COOKIE["flag_update"]) && $_COOKIE["flag_update"]  == 1  &&  isset($_POST)){
    updateData();
    exit("update database");
}
 
$rows = checkData();
$rowCount = count($rows);

if($rowCount >= 1){
    $result = $rows;
    setcookie("flag_update","1");
//    echo "combine exist content and then update</br>";
    echo (json_encode($result));
}
elseif($rowCount == 0){
    writeData();
}

?>
