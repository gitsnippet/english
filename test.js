var xmlHttp;

function ready(){        
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
        xmlHttp.onreadystatechange =  ready();
    }

    ob = document.getElementById("submit"); 
    ob.addEventListener("click",sendData);
    
