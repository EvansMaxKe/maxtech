function openNav(){
    document.getElementById("mySidenav").style.width="250px";
}
function closeNav(){
    document.getElementById("mySidenav").style.width="0";
}
function closePage() {
    document.getElementById("mySidenav").style.width="0";
    document.getElementById("page").style.width="0";
}
function homebtn() {
    document.getElementById("home").style.backgroundColor="violet";
var firstName = prompt("What's your First Name?");
    
    if(firstName=="" || firstName==null) {
        alert("YOU DIN'T ENTER ANY VALUE MY GUY!! ");
    }
    else{
        alert("Hi " + firstName+ "Thanks for showing Interest. Always Remember you are Special!! ");
    }
}
function like(){
    document.getElementById("liked").style.backgroundColor="red";
}
function like1(){
    document.getElementById("liked1").style.backgroundColor="red";
}
function like2(){
    document.getElementById("liked2").style.backgroundColor="red";
}
function com(){
    document.getElementById("com").style.backgroundColor="pink";
    var firstName = prompt("What's your Comment?");
    
    if(firstName=="" || firstName==null) {
        alert("YOU DIN'T ENTER ANY VALUE MY GUY!! ");
    }
    else{
    alert(firstName);
        alert("Thenks for your comment");
    }
}
function com1(){
    document.getElementById("com1").style.backgroundColor="pink";
    var firstName = prompt("What's your Comment?");
    
    if(firstName=="" || firstName==null) {
        alert("YOU DIN'T ENTER ANY VALUE MY GUY!! ");
    }
    else{
    alert(firstName);
        alert("Thenks for your comment");
    }
}
function com2(){
    document.getElementById("com2").style.backgroundColor="pink";
    var firstName = prompt("What's your Comment?");
    
    if(firstName=="" || firstName==null) {
        alert("YOU DIN'T ENTER ANY VALUE MY GUY!! ");
    }
    else{
    alert(firstName);
        alert("Thenks for your comment");
    }
}
function share(){
    document.getElementById("share").style.backgroundColor="green";
}function share1(){
    document.getElementById("share1").style.backgroundColor="green";
}
function share2(){
    document.getElementById("share2").style.backgroundColor="green";
}
