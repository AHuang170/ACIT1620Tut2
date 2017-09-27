document.getElementById("open").addEventListener("click",
function(){
    document.getElementById("control").style.left = "0px";
    
});

document.getElementById("close").addEventListener("click",
function(){
    document.getElementById("control").style.left = "-200px";
    
});

document.getElementById("bg1").addEventListener("click",function(){
    document.getElementById("backgroundImage").style.backgroundImage = "url(Image/img1.jpeg)";
});

document.getElementById("bg2").addEventListener("click",function(){
    document.getElementById("backgroundImage").style.backgroundImage = "url(Image/img2.jpg)";
});

document.getElementById("bg3").addEventListener("click",function(){
    document.getElementById("backgroundImage").style.backgroundImage = "url(Image/img3.jpg)";
});

document.getElementById("bg4").addEventListener("click",function(){
    document.getElementById("backgroundImage").style.backgroundImage = "url(Image/img4.jpg)";
});