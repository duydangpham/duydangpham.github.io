---
layout: page
title: Updates
permalink: /updates/
image: /assets/img/duy_research.jpg
---
<script>
  function loadXMLDoc(update_year, update_table_id) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this, update_year, update_table_id);
      }
    };
    xmlhttp.open("GET", "../updates.xml", true);
    xmlhttp.send();
  }
        
  function myFunction(xml, update_year, update_table_id) {
    var i;
    var xmlDoc = xml.responseXML;
    var list = "<ul>";
    var table = "<tr><th>Date</th><th>Update</th><th>Link</th></tr>";
    var date;
    var content;
    var link;
    var query = "UPDATE[year=" + "'" + update_year + "']"

    // var x = xmlDoc.getElementsByTagName("UPDATE");
    var x = xmlDoc.querySelectorAll(query);

    for (i = 0; i < x.length; i++) {
      if (x[i].getElementsByTagName("DATE")[0].childNodes[0] != undefined) {
        date =  x[i].getElementsByTagName("DATE")[0].childNodes[0].textContent;
      }

      if (x[i].getElementsByTagName("CONTENT")[0].childNodes[0] != undefined) {
        content =  x[i].getElementsByTagName("CONTENT")[0].childNodes[0].textContent;
      }

      if (x[i].getElementsByTagName("LINK")[0].childNodes[0] != undefined) {
        link =  " <a href=" + x[i].getElementsByTagName("LINK")[0].childNodes[0].textContent + " target='\_blank'>[link]</a>";
      } else {
        link = " ";
      }

      table += "<tr><td style='white-space: nowrap;'>" + date + "</td><td>" + content + "</td><td>" + link + "</td></tr>";

      // list += "<li>" + date + content + link
      // "</li>";
    }
    document.getElementById(update_table_id).innerHTML = table;
  }

  loadXMLDoc(2022, '2022updates')
  loadXMLDoc(2021, '2021updates')
  loadXMLDoc(2020, '2020updates')
  loadXMLDoc(2019, '2019updates')
  loadXMLDoc(2018, '2018updates')
</script>

<!-- <div id="showUpdates"></div> -->
### 2022
<table id="2022updates" style="font-size:100%"></table>
### 2021
<table id="2021updates" style="font-size:100%"></table>
### 2020
<table id="2020updates" style="font-size:100%"></table>
### 2019
<table id="2019updates" style="font-size:100%"></table>
### 2018
<table id="2018updates" style="font-size:100%"></table>