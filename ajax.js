
function ready(xmlHttp){        
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200){ 
        var cookies = document.cookie;
        var list = cookies.split("; ");         
        for(var i = 0; i < list.length; i++) {
            arr = list[i].split("=");  
            if(arr[0] == "flag_update" &&  arr[1] == 1){
                data = xmlHttp.responseText;
                data = JSON.parse(data)[0];
                console.log(data.meaning);
                tmp_meaning = document.getElementById("meaning").value;
                console.log(tmp_meaning);
                data.meaning = data.meaning + "\n" + tmp_meaning;
                document.getElementById("meaning").value = data.meaning;
                tmp_source = document.getElementById("source").value;
                data.source = data.source + "\n" + tmp_source;
                document.getElementById("source").value = data.source;
                document.getElementById("prompt").innerHTML =  "已经合并已有的内容，请确认无误后，再次点击submit"       
                document.cookie="flag_update="+2;   
                return 0;
             }
        }
        document.getElementById("submit").value = "changed";
        document.getElementById("submit").id = "changed";
        document.getElementById("prompt").innerHTML = xmlHttp.responseText;
        ob.removeEventListener("click",sendData);
    }
}

function sendData()
{
    var formData = new FormData( document.querySelector("form") );
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("post", "accessItem.php",true); 
    xmlHttp.send(formData); 
    xmlHttp.onreadystatechange =  function(){
        ready(xmlHttp);
    }
}

ob = document.getElementById("submit"); 
ob.addEventListener("click",sendData);
