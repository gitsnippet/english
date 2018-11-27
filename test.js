
function ready(xmlHttp){        
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200){ 
        document.getElementById("submit").value = "changed";
        document.getElementById("submit").id = "changed";
        document.getElementById("prompt").innerHTML = xmlHttp.responseText;
    }
}

function sendData()
{
    var formData = new FormData( document.querySelector("form") );
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("post", "test.php",true); 
    xmlHttp.send(formData); 
    xmlHttp.onreadystatechange =  function(){
        ready(xmlHttp);
    }
}

ob = document.getElementById("submit"); 
ob.addEventListener("click",sendData);
