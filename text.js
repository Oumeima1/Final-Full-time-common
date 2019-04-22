
// ...............formulaire code java.................
function empty(){
    var email= document.getElementById("adress-email").value;
    var re = /\S+@\S+\.\S+/;
    if(document.getElementById("nom").value=="")
    {
    alert('Empty Case');
    document.getElementById("nom").style.bordercolor="red";
    return false;  
    }
    if(document.getElementById("prenom").value==="")
    {
    alert('Empty Case');
    document.getElementById("prenom").style.bordercolor="red";
    return false;  
    }
    if(document.getElementById("age").value==="")
    {
    alert('Empty Case');
    document.getElementById("age").style.bordercolor="red";
    return false;  
    }
    if(document.getElementById("adress").value==="")
    
    {
    alert('Empty Case');
    document.getElementById("adress").style.bordercolor="red";
    return false;  
    }
    
    if(!re.test(email))
    {
     alert('Email Invalid')
     return false
    }
    var password= document.getElementById("password").value;//On récupère la valeur de l'input
        // var longueur = password.lenght; // tu récupères la longueur
        // // si la longueur n'est pas bonne tu affiches le message
        // if(longueur < 8 || longueur > 255) {
        //     document.getElementById("message").innerHTML = "Attention le mot de passe n'est pas assez long, il doit faire 8 caractères minimum.";}
        var regex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
        console.log(regex.test(password))
        if(!regex.test(password)){
        alert('Password Invalid');
        return false;
        }
        else 
        alert('bienvenue')
}
// ------------------------------------------shopping Cart Addition---------------------------------------------
var k1 = 0;
var k2=0
var k3=0
function qtrFunction(x,i) {

      if(i===1)
{
        if(k1<0)
    return {}
    if(x=="I")
    {
      k1=k1+1;
    }
    else if((k1>=1)&&(x=="D"))
    {
      k1=k1-1;
    }
    var k=k1
 }
 else if(i===2)
 {
     if(k2<0)
     return {}
     if(x=="I")
     {
       k2=k2+1;
     }
     else if((k2>=1)&&(x=="D"))
     {
       k2=k2-1;
     }
     var k=k2
 }
 else 
 {
     if(k3<0)
     return {}
     if(x=="I")
     {
       k3=k3+1;
     }
     else if((k3>=1)&&(x=="D"))
     {
       k3=k3-1;
     }
     var k=k3
 }
    document.getElementById('qt'+i).innerHTML = k;
 //    console.log(k);
}
function price(i){

let a= Number(document.getElementById("qt"+i).textContent)
let b=Number(document.getElementById("price"+i).textContent)
let price=a*b;

document.getElementById('total'+i).innerHTML =price;
}
function totalprice(){
let totalprice=0
 let a=Number(document.getElementById("total1").textContent);
 let b=Number(document.getElementById("total2").textContent);
 let c=Number(document.getElementById("total3").textContent);
 totalprice=a+b+c;
 document.getElementById('total').innerHTML =totalprice;
}
