<?php
$type = $_POST["type"];
$what =$_POST["what"];
if($what == "")
{
    if($type == "all")
    {
        $query = "SELECT * FROM `english`;";
    }
    else
    {
        $query = "SELECT * FROM `english` WHERE `type`='$type';";
    }
}
else
{
    $query = 'SELECT * FROM `english` WHERE `meaning` LIKE ' . '"%' . "$what" .'%"';    
}


$dsn = "mysql:host=localhost;dbname=english";
$con = new PDO($dsn,"root","xyzzy");

$result = $con->query($query)->fetchALL();
echo json_encode($result);
?>
