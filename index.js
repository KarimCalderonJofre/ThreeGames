var btnNext = document.getElementById("next");
var imgBuscado =document.getElementById("imagenJuegoB");


var images = ["./assets/masBuscados/Tomb_Raider_1.webp", "./assets/masBuscados/Resident-Evil_2.jpg","./assets/masBuscados/roblox_3.jpg", "./assets/masBuscados/Fifa23_4.webp"]; 
num = 0;

btnNext.addEventListener("click", function(){
    
    num++;
    if(num>=images.length){
        num=0;
        imgBuscado.src = images[num];
    }else{
        imgBuscado.src = images[num];
    }
        
    
});



