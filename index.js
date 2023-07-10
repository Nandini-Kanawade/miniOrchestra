
for(var i =0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        soundmaker(this.innerHTML);
        buttonAnime(this.innerHTML);
    });
}

document.addEventListener("keypress", function(event){
    soundmaker(event.key);
    buttonAnime(event.key);    
});

function soundmaker(zxcv){
    switch(zxcv){
        case "w":
            var x = new Audio("./sounds/tom-1.mp3");
            x.play();
            break;
        case "a":
            var x = new Audio("./sounds/tom-2.mp3");
            x.play();
            break;
        case "s":
            var x = new Audio("./sounds/tom-3.mp3");
            x.play();
            break;
        case "d":
            var x = new Audio("./sounds/tom-4.mp3");
            x.play();
            break;
        case "j":
            var x = new Audio("./sounds/snare.mp3");
            x.play();
            break;
        case "k":
            var x = new Audio("./sounds/crash.mp3");
            x.play();
            break;
        case "l":
            var x = new Audio("./sounds/kick-bass.mp3");
            x.play();
            break;
        default:
            console.log("no proper");
            break;          
    }
} 

function buttonAnime(zxcv){
    var x = "."+zxcv;
    document.querySelector(x).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(x).classList.remove("pressed");
    }, 100);
    
}



