// Show All Display Numer 
let totalNum = document.getElementById('total-num');
let interviewNum = document.getElementById('interview-num');
let rejectNum = document.getElementById('reject-num');

let totalJobNum = document.getElementById('total-job-num');

// All Button Find By Id 
const allFilterButton = document.getElementById('all-filter-btn');
const interviewFilterButton = document.getElementById('interview-btn');
const rejectFilterButton = document.getElementById('reject-btn');


// Delete Button 
const deleteButton = document.getElementById('delete-button');


// Status Button Add 
const statusButton = document.getElementById('status-button');

// Cardview Parent 
let allCardViewShow = document.getElementById('all_card-view-show');
let interviewCardViewShow = document.getElementById("interview-card-view-show");
let rejectCardViewShow = document.getElementById("reject-card-view-show");


const interViewButton = document.getElementById('inetview-button');
const rejectButton = document.getElementById('reject-button');

interViewButton.innerText = interViewButton.innerText.toUpperCase();
rejectButton.innerText = rejectButton.innerText.toUpperCase();


const interViewEmty = document.getElementById("interview-emty-card-design");
const rejectEmty = document.getElementById("reject-emty-card-design");

function calculateCount (){
    totalNum.innerText = allCardViewShow.children.length;
    totalJobNum.innerText = allCardViewShow.children.length;

    const interviewCount = interviewCardViewShow.children.length-1;

    const rejectCount = rejectCardViewShow.children.length-1;


    interviewNum.innerText = interviewCount;
    rejectNum.innerText = rejectCount;

    if(interviewCount>0){
        interViewEmty.classList.add("hidden")
    }

    if(rejectCount>0){
        rejectEmty.classList.add("hidden")
    }

}

calculateCount()

function toogleButton (btnId){
    allFilterButton.classList.remove("btn-accent");
    interviewFilterButton.classList.remove("btn-accent");
    rejectFilterButton.classList.remove("btn-accent");

    allFilterButton.classList.add("btn-active","text-black");
    interviewFilterButton.classList.add("btn-active","text-black");
    rejectFilterButton.classList.add("btn-active","text-black");

    const seletedButton = document.getElementById(btnId);

    if(seletedButton){
        seletedButton.classList.remove("btn-active","text-black");
        seletedButton.classList.add("btn-accent","text-black");
    }

    if(btnId=="all-filter-btn"){
        allCardViewShow.classList.remove("hidden");
        interviewCardViewShow.classList.add("hidden");
        rejectCardViewShow.classList.add("hidden");
    } else if (btnId=="interview-btn"){
        allCardViewShow.classList.add("hidden");
        interviewCardViewShow.classList.remove("hidden");
        rejectCardViewShow.classList.add("hidden");
    } else if (btnId== "reject-btn"){
        allCardViewShow.classList.add("hidden");
        interviewCardViewShow.classList.add("hidden");
        rejectCardViewShow.classList.remove("hidden");
    }
}


// main contttttttttne 
const mainContainer = document.querySelector("main");

mainContainer.addEventListener("click",function(event){
    
    
});