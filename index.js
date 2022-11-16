const numberCount=document.querySelector(".number_count");
numberCount.innerText=0;
numberCount.style.fontSize="4rem";
var count=0;
// ------------------------To Decrease---------------------------------------------------------
const decreaseButton=document.querySelector(".btn_decrease");

function decreaseNumber()
{
    count--;
    numberCount.innerText=count;
}

decreaseButton.addEventListener("click",decreaseNumber);

// -------------------------------------To Reset--------------------------------------------------
const resetButton=document.querySelector(".btn_reset");

function resetNumber()
{
    count=0;
    numberCount.innerText=count;
}

resetButton.addEventListener("click",resetNumber);

//------------------------------------To Increase------------------------------------------------

const increaseButton=document.querySelector(".btn_increase");

function increaseNumber()
{
    count++;
    numberCount.innerText=count;
}

increaseButton.addEventListener("click",increaseNumber);