function ready(xmlHttp,eventTarget)
{        
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
    { 
        if( eventTarget.value  == "changed")
        {
            location.reload();
        }
        else
        {
            var cookies = document.cookie;
            var list = cookies.split("; ");         
            for(var i = 0; i < list.length; i++) 
            {
                arr = list[i].split("=");  
                if(arr[0] == "flag_update" &&  arr[1] == 1)
                {
                    document.cookie="flag_update=2";   
                    data = xmlHttp.responseText;
                    data = JSON.parse(data)[0];
                    tmp_meaning = document.getElementById("meaning").value;
                    data.meaning = data.meaning + "\n" + tmp_meaning;
                    document.getElementById("meaning").value = data.meaning;
                    tmp_source = document.getElementById("source").value;
                    data.source = data.source + "\n" + tmp_source;
                    document.getElementById("source").value = data.source;
                    document.getElementById("prompt").innerHTML =  "已经合并已有的内容，请确认无误后，再次点击add new word";
                    return 0;
                 }
            }
            eventTarget.value = "changed";
            document.getElementById("prompt").innerHTML = xmlHttp.responseText;
        }
    }
}

function addData()
{
    var formData = new FormData( document.querySelector("#form_add") );
    var xmlHttp = new XMLHttpRequest();
    var eventTarget = event.target;
    xmlHttp.open("post", "accessItem.php",true); 
    xmlHttp.send(formData); 
    xmlHttp.onreadystatechange =  function(){
        ready(xmlHttp,eventTarget);
    }
}

ob_add = document.getElementById("add"); 
ob_add.addEventListener("click",addData);

function show(xmlHttp)
{
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
    {
            data = JSON.parse(xmlHttp.responseText);
            table_show = "<table>";
            table_show += "<tr>";
            table_show += "<td>" + "id" + "</td>";
            table_show += "<td>" + "date" + "</td>";
            table_show += "<td>" + "type" + "</td>";
            table_show += "<td>" + "content" + "</td>";
            table_show += "<td>" + "meaning" + "</td>";
            table_show += "<td>" + "source" + "</td>";
            table_show += "</tr>";
        
            for(i=0;i<data.length;i++)
            {
                table_show += "<tr>";
                table_show += "<td>" + data[i][0].replace(/\n/g,"</br>")  + "</td>";
                table_show += "<td>" + data[i][1].replace(/\n/g,"</br>")  + "</td>";
                table_show += "<td>" + data[i][2].replace(/\n/g,"</br>")  + "</td>";
                table_show += "<td>" + data[i][3].replace(/\n/g,"</br>")  + "</td>";
                table_show += "<td>" + data[i][4].replace(/\n/g,"</br>")  + "</td>";
                table_show += "<td>" + data[i][5].replace(/\n/g,"</br>")  + "</td>";
                table_show += "</tr>";
            }
            table_show += "</table>";
            var parent = document.body;
            var tmp = document.createElement("table");
            tmp.innerHTML = table_show;
            parent.appendChild(tmp);
    }
}

function selectData()
{
    var formData = new FormData( document.querySelector("#form_select") );
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("post", "selectData.php",true); 
    xmlHttp.send(formData); 
    xmlHttp.onreadystatechange =  function()
    {
        show(xmlHttp);
    }
}

ob_select = document.getElementById("select");
ob_select.addEventListener("click",selectData);


function resetId()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("get", "resetId.php",true); 
    xmlHttp.send(); 
    xmlHttp.onreadystatechange =  function()
    {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            document.getElementById("prompt").innerHTML = xmlHttp.responseText;
        }
    }
    
}

ob_resetId = document.getElementById("resetId");
ob_resetId.addEventListener("click",resetId);

function refresh(){
    location.reload();
}

ob_refresh = document.getElementById("refresh");
ob_refresh.addEventListener("click",refresh);
