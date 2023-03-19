var objPeople = [
{
usrname:"Pamod"
password:"LPP@3232"
},
{
username="Agrabanu"
password="123456"
}
]

function fun2()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;


for(i=0; i<objPeople.length; i++) {
if(username = objPeople[i].usename && password=objPeople[i].password)
{console.log(username + "is logged in!")
return
}
}
console.log("incorrect username or password")
}
