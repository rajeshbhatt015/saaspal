// Select buttons
var monthly=document.querySelector(".price-monthly");
var yearly=document.querySelector(".price-yearly");


 monthly.classList.add("defualt-button")

function change(obj){
  
console.log(obj.id) 
if(obj.id=="year"){
 yearly.classList.add("defualt-button");
 monthly.classList.remove("defualt-button");
//  Select yealy price and change
 document.querySelector(".text_1").innerHTML="$136";
 document.querySelector(".text2").innerHTML="$156";
 document.querySelector(".text3").innerHTML="$189";


}
else{
    monthly.classList.add("defualt-button");
    yearly.classList.remove("defualt-button");
    // Change back price
    document.querySelector(".text_1").innerHTML="$36";
    document.querySelector(".text2").innerHTML="$56";
    document.querySelector(".text3").innerHTML="$89";

}


}

// Humburger menu
var navMenu=document.querySelector("#main-menu");
var cross=document.querySelector(".cross");

function openMenu(){
    console.log("hamburger")
    navMenu.classList.add("enter");
    cross.style.display="block"
 
 }
 
 // remove classes
 
 function crossMenu(){
      console.log("cross");
      navMenu.classList.remove("enter");
      cross.style.display="none"
 
 }