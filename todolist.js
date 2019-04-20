var input = document.getElementById("in");
var button = document.getElementById("submit_button");
var table = document.getElementById("table");
var count=1;
button.onclick=function() {
  var row=document.createElement('tr');
  var col1=document.createElement('td');
  var col2=document.createElement('td');
  var col3=document.createElement('td');
  var dlt=document.createElement('button');
  dlt.innerHTML='X';
  col3.appendChild(dlt);
  dlt.onclick=function(){
    table.removeChild(row);
    count--;
  }
  col2.innerHTML=input.value;
  col1.innerHTML=count;
  row.appendChild(col1);
  row.appendChild(col2);
  row.appendChild(col3);
  table.appendChild(row);
  count++;
  input.value='';

}
