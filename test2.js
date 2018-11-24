
function ready(xmlHttp){        
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200){ 
            alert(xmlHttp.responseText);
            }
    }

    function sendData()
    {
        var formData = new FormData( document.querySelector("form") );
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("post", "test.php",true); 
        xmlHttp.send(formData); 
        xmlHttp.onreadystatechange =  ready(xmlHttp);
    }

    ob = document.getElementById("submit"); 
    ob.addEventListener("click",sendData);
    
