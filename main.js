const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-Btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Will you be my valentine?";
    gif.src = "second.gif"

    yesBtn.addEventListener("click", () => {
        question.innerHTML = "YOU JUST SAID YES!, I'll see you on the 14th then ehe!"
        gif.src = "third.gif";
    });
});

function showError(){
    alert("there was an error, the answer is not valid!");
};