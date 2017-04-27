
Parking.prototype.printTableHead=function ()
{
    var szSec = "";
    if(this.secure)
        szSec = " (Secure)";
    else
        szSec = " (Unsecure)".fontcolor("red");
    document.write("<TABLE BORDER cellpadding='5' cellspacing='0'>");
    document.write("<CAPTION ALIGN=LEFT>" +
        this.detailsOfOwner.surName + " " + this.detailsOfOwner.Age + szSec +
        "</CAPTION>");
    document.write("<TH ALIGN=LEFT>Поле записи</TH>"
        + "<TH ALIGN=LEFT>Содержимое</TH>");
}
Parking.prototype.printTableEnd=function()
{
    document.write("</TABLE>");
    document.write("<P> ");
}
Parking.prototype. printRecord= function(){
        document.write("<TR><TD>Марка машины:</TD><TD>" +
        this.nameAuto.italics() + "</TD></TR>");
document.write("<TR><TD>Реквизиты владельца:</TD><TD>" +
    this.detailsOfOwner.surName.italics() + ", " + this.detailsOfOwner.Age.italics() + "лет, " + this.detailsOfOwner.Telefon.italics() + "</TD></TR>");
document.write("<TR><TD>Номер машины:</TD><TD>" +
    this.carNumber.italics() + "</TD></TR>");
document.write("<TR><TD>Время стоянки:</TD><TD>" +
    this.time.italics() + "</TD></TR>");
}


function Parking(nameAuto,name,age,telefonNumber,carNumber,time) {
    this.nameAuto=nameAuto;
    this.detailsOfOwner={surName:name,Age:age,Telefon:telefonNumber};
    this.carNumber=carNumber;
    this.time=time;
    this.secure  = false;

}
var array= new Array();
array[0]=new Parking('Jeep','Иванов','32','611-44-85', 'Hg43-23','12-12');
array[1]=new Parking('Ford','Васильев','36', '219-44-85', 'Hg43-23','12-12');
array[2]=new Parking('Lexus','Берёзкин','21','611-44-85', 'Hg43-23','12-12');
array[3]=new Parking('Mazda','Козловский','45','611-44-85', 'Hg43-23','12-12');


for(var i=0;i<array.length;i++){
    array[i].printTableHead();
    array[i].printRecord();
    array[i].printTableEnd();
}

