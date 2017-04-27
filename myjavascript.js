/**
 * Created by USER on 23.10.2016.
 */

 var win;
 var exist=false;
 var array=new Array();
 var i=0;

 function sendForm() {
 var f = document.forms[0];
 var elems = f.elements;
 var isEmpty = false;

 for (var k = 1; k < elems.length; k++) {
 if (elems[k].value == "") {
 elems[k].style.borderColor = "red";
 isEmpty = true;
 }

 else {
 elems[k].style.borderColor = "";
 }
 }
 if (isEmpty) {
 alert("Заполните все поля");
 }
 if (elems[5].checked == false
 && elems[6].checked == false
 && elems[7].checked == false
 && elems[8].checked == false
 && elems[9].checked == false) {
 alert("Выберите цвет корпуса");
 isEmpty = true;
 }


 if (elems[2].checked == false && elems[3].checked == false) {
 alert("Выберите пол");
 isEmpty = true;
 }
 var korpus = "";
 if (!isEmpty) {
 array[i++] = elems[1].value;
 if (elems[2].checked == true) array[i++] = elems[2].value;
 else array[i++] = elems[3].value;
 array[i++] = elems[4].value;//Список
 for (var j = 5; j < 10; j++) {
 if (elems[j].checked == true) {
 korpus += elems[j].value + ",";
 }
 }
 array[i++] = korpus;
 array[i++] = elems[10].value;
 console.log("=======================");
 for (var t = 0; t < array.length; t++) {
 console.log(array[t]);
 }
 console.log("=======================");

var headtitle="<html><head><title>New window</title>"  + "</head><body><p>Результаты" +
    " опроса покупателей мобильных телефоноы</p>";
 var newwinstyle = '<strong class="first">Ваше Имя</strong><strong  class="first">Ваш Пол</strong>' +
     '<strong  class="first">Модель</strong><strong  class="second">Цвет корпуса</strong><strong  class="second">Пожелания</strong><br></body></html>';

 var select = "";
 var select2 = "";
 var select3 = "";
 var select4 = "";
 var select5 = "";
 var col = array.length / 5;
 console.log(col);
 var ind = 0;
 var  table ="";
 var text="<div class='txt'>"+array[array.length-5]+" "+array[array.length-4]+" "+array[array.length-3]+" "
 +array[array.length-2]+" "+array[array.length-1]+" "+"</div><br>";
 //
 //////////////////////////////Список имён
 select+="<body><select>";
 for (var x = 0; x < col; x++) {
 for(var j=0;j<5;j++,ind++){

 if((ind+5)%5==0) {
 var strr=new String(x+1);
 var option = "<option>" + strr+"."+array[ind] + "</option>";
 select+=option;
 }
 }
 }
 select+="</select></body>";
 /////////////////////////////////
 /////////////////////Список пола
 ind=0;
 select2+="<body><select>";
 for (var x = 0; x < col; x++) {
 for(var j=0;j<5;j++,ind++){

 if((ind+5)%5==1) {
 var strr=new String(x+1);
 var option = "<option>" + strr+"."+array[ind] + "</option>";
 select2+=option;
 }
 }
 }
 select2+="</select></body>";
 ind=0;
 ////////////////////////////////////////////////
 ////////////////////////// Список Модели
 select3+="<body><select>";
 for (var x = 0; x < col; x++) {
 for(var j=0;j<5;j++,ind++){

 if((ind+5)%5==2) {
 var strr=new String(x+1);
 var option = "<option>" + strr+"."+array[ind] + "</option>";
 select3+=option;
 }
 }
 }
 select3+="</select></body>";
 ind=0;
 ////////////////////////////
 //////////////////////////////список корпусов
 select4+="<body><select>";
 for (var x = 0; x < col; x++) {
 for(var j=0;j<5;j++,ind++){

 if((ind+5)%5==3) {
 var strr=new String(x+1);
 var option = "<option>" + strr+"."+array[ind] + "</option>";
 select4+=option;
 }
 }
 }
 select4+="</select></body>";
 ind=0;
 /////////////////////////
 /////////////////////Сптсок пожеланий
 select5+="<body><select>";
 for (var x = 0; x < col; x++) {
 for(var j=0;j<5;j++,ind++){

 if((ind+5)%5==4) {
 var strr=new String(x+1);
 var option = "<option>" + strr+"."+array[ind] + "</option>";
 select5+=option;
 }
 }
 }
 select5+="</select></body>";
 ind=0;
 //////////////////////////
 if(exist && !win.closed){
     console.log(exist);
 win.focus();
 win.document.clear();
 win.document.open();
  win.document.write(headtitle);
  win.document.write(text);
 win.document.write(newwinstyle);

 win.document.write(select);
 win.document.write(select2);
 win.document.write(select3);
 win.document.write(select4);
 win.document.write(select5);

  win.document.write('<head><link rel="stylesheet" href="mystyle.css"><script src="myjavascript.js"></script></head>');
     var butt='<input type="button" value="Закрыть" onclick="javascript:closeWin()"/>;' ;
     win.document.write(butt);
 }
 else {

 win = window.open("", "","width=800px,height=300px");
  win.document.write(headtitle);
  win.document.write(text);
 win.document.write(newwinstyle);

 win.document.write(select);
 win.document.write(select2);
 win.document.write(select3);
 win.document.write(select4);
 win.document.write(select5);
  win.document.write('<head><link rel="stylesheet" href="mystyle.css"><script src="myjavascript.js"></script></head>');
 var butt='<input type="button" value="Закрыть" onclick="javascript:closeWin()"/>;' ;
         //a href="index4.html" class ="button1">Назад</a>'
     //butt+='<input type="button" value="Назад" onclick="window.opener.focus() "/>';
 win.document.write(butt);
 exist=true;

 }

 }

 }
function closeWin(){
 window.close();
  // exist=false;

}

function Opener(){
    opener.focus();
    window.blur();
}

 function resetForm(){
 var f=document.forms[0];

 f.reset();

 }


