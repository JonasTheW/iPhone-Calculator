const answer = document.getElementById("answer");
const reset = document.getElementById("reset");
var clickCount = 0;
function clear(){
    answer.textContent = " ";
};
reset.addEventListener("click",function(){
    answer.textContent = " ";
});

function start(){
    answer.classList.remove("hidden");
};

function appendToAnswer(input){
    if(answer.classList.contains("hidden")){

    }
    else{
        clickCount++;
        if(clickCount == 1){
            answer.textContent = "";
            answer.textContent += input;
        }
        else{
            answer.textContent += input;
        }
    }
};

function divBy100(){
    answer.textContent /= 100;
};

function equals(){
    
    var percentFinder = answer.textContent;
    var percent = '%';
    for(var i = 0; i < percentFinder.length; i++){
        if(percentFinder[i] === percent){
            answer.textContent /= 100;
        }
    }
    answer.textContent = eval(answer.textContent);
    console.log(answer.textContent);
    

    

};