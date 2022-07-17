function loadXMLDoc(outputSize) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        myFunction(this, outputSize);
        }
    };
    xmlhttp.open("GET", "../updates.xml", true);
    xmlhttp.send();
}
    
function myFunction(xml, outputSize) {
    var i;
    var xmlDoc = xml.responseXML;
    var list = "<ul>";
    var table = "<tr><th>Date</th><th>Update</th><th>Link</th></tr>";
    var date;
    var year;
    var content;
    var link;
    x = xmlDoc.getElementsByTagName("UPDATE");

    for (i = 0; i < outputSize; i++) {
        if (x[i].getElementsByTagName("DATE")[0].childNodes[0] != undefined) {
            date =  x[i].getElementsByTagName("DATE")[0].childNodes[0].textContent;
        }

        if (x[i].getElementsByTagName("YEAR")[0].childNodes[0] != undefined) {
            year =  x[i].getElementsByTagName("YEAR")[0].childNodes[0].textContent;
        }

        if (x[i].getElementsByTagName("CONTENT")[0].childNodes[0] != undefined) {
            content =  x[i].getElementsByTagName("CONTENT")[0].childNodes[0].textContent;
        }

        if (x[i].getElementsByTagName("LINK")[0].childNodes[0] != undefined) {
            link =  " <a href=" + x[i].getElementsByTagName("LINK")[0].childNodes[0].textContent + " target='\_blank'>[link]</a>";
        } else {
            link = " ";
        }

        table += "<tr><td style='white-space: nowrap;'>" + date + " " + year + "</td><td>" + content + "</td><td>" + link + "</td></tr>";

        // list += "<li>" + date + content + link
        // "</li>";
    }

    document.getElementById("showUpdates").innerHTML = table + "<tr><td>...</td><td>...</td><td>...</td></tr>";
}