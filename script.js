var square = document.querySelector(".square");
var button = document.querySelector("button");
var flag = 0;
button.addEventListener("click", function(){
    if(flag === 0){
        square.style.backgroundColor = "yellow";
        flag = 1;
    }
    else{
        square.style.backgroundColor = "red";
        flag = 0;
    }
});