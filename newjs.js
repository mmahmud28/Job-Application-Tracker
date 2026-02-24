let totalNum = document.getElementById('total-num');
let interviewNum = document.getElementById('interview-num');
let rejectNum = document.getElementById('reject-num');

let totalJobNum = document.getElementById('total-job-num');

const allFilterButton = document.getElementById('all-filter-btn');
const interviewFilterButton = document.getElementById('interview-btn');
const rejectFilterButton = document.getElementById('reject-btn');

const deleteButton = document.getElementById('delete-button');

const statusButton = document.getElementById('status-button');

statusButton.innerText = statusButton.innerText.toUpperCase();

let allCardViewShow = document.getElementById('all_card-view-show');
let interviewCardViewShow = document.getElementById("interview-card-view-show");
let rejectCardViewShow = document.getElementById("reject-card-view-show");

const interViewButton = document.getElementById('inetview-button');
const rejectButton = document.getElementById('reject-button');

interViewButton.innerText = interViewButton.innerText.toUpperCase();
rejectButton.innerText = rejectButton.innerText.toUpperCase();

const interViewEmty = document.getElementById("interview-emty-card-design");
const rejectEmty = document.getElementById("reject-emty-card-design");

let interViewArrayList = [];
let rejectArrayList = [];
let currentStatue = "All"

function toogleButton (btnId){
    allFilterButton.classList.remove("btn-accent");
    interviewFilterButton.classList.remove("btn-accent");
    rejectFilterButton.classList.remove("btn-accent");

    allFilterButton.classList.add("btn-active","text-black");
    interviewFilterButton.classList.add("btn-active","text-black");
    rejectFilterButton.classList.add("btn-active","text-black");

    const seletedButton = document.getElementById(btnId);

    currentStatue = btnId;

    

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
        
        if(interViewArrayList.length > 0){
        renderInterviewData();
        }

    } else if (btnId=="reject-btn"){
        allCardViewShow.classList.add("hidden");
        interviewCardViewShow.classList.add("hidden");
        rejectCardViewShow.classList.remove("hidden");
        
        if(rejectArrayList.length > 0){
        renderRejectData();
        }

    }
}

function calculateCount (){

    let totalCard = allCardViewShow.children.length;

    totalNum.innerText = totalCard;

    let interviewCard = interViewArrayList.length;
    let rejectCard = rejectArrayList.length;

    interviewNum.innerText = interviewCard;
    rejectNum.innerText = rejectCard;

    if(interViewArrayList.length>0){
        interViewEmty.classList.add("hidden")
    }else{
        interViewEmty.classList.remove("hidden")
    }

    if(rejectArrayList.length>0){
        rejectEmty.classList.add("hidden")
    }else{
        interViewEmty.classList.remove("hidden")
    }

}

function numCalculate (){
     let totalCard = allCardViewShow.children.length;
      let interviewCard = interViewArrayList.length;
    let rejectCard = rejectArrayList.length;

    if(currentStatue=="All"){
        totalJobNum.innerText = totalCard;
    } else if (currentStatue == "all-filter-btn"){
         totalJobNum.innerText = totalCard;
    } else if (currentStatue == "interview-btn"){
         totalJobNum.innerText = interviewCard + " Of " + totalCard;
    } else if (currentStatue == "reject-btn"){
         totalJobNum.innerText = rejectCard + " Of " + totalCard;
    } 
}

calculateCount()

const mainContainer = document.querySelector("main");


mainContainer.addEventListener("click", function(event){

    const interviewBtn = event.target.closest(".interview-btn");
    const rejectBtn = event.target.closest(".reject-btn");
    const deleteBtn = event.target.closest("#delete-button");

    numCalculate();

    if(interviewBtn){

        const parentNode = interviewBtn.closest(".job-card");
        if(!parentNode) return;

        const companyName = parentNode.querySelector(".company-name")?.innerText;
        const jobType = parentNode.querySelector(".job-type")?.innerText;
        const jobLocation = parentNode.querySelector(".job-location")?.innerText;
        const jobDescription = parentNode.querySelector(".job-description")?.innerText;

        parentNode.querySelector(".status-btn").innerText = "Interview";

        const allCards = allCardViewShow.querySelectorAll(".job-card");
        
        for(let card of allCards){
            const name = card.querySelector(".company-name")?.innerText;
            if(name === companyName){
                card.querySelector(".status-btn").innerText = "Interview";
                 card.querySelector(".status-btn").classList.remove("bg-red-400");
                card.querySelector(".status-btn").classList.add("bg-green-400");
                break;
            }
        }

        const cardInfo = {
            companyName,
            jobType,
            jobLocation,
            statusButton:"Interview",
            jobDescription
        };

        const exist = interViewArrayList.find(item => item.companyName == companyName);
        if(!exist){
            interViewArrayList.push(cardInfo);
        }

        rejectArrayList = rejectArrayList.filter(item => item.companyName != companyName);

        if(currentStatue == "reject-btn"){
            renderRejectData();
            numCalculate();
        }

        calculateCount();
        numCalculate();

    } else if(rejectBtn){

        const parentNode = rejectBtn.closest(".job-card");
        if(!parentNode) return;

        const companyName = parentNode.querySelector(".company-name")?.innerText;
        const jobType = parentNode.querySelector(".job-type")?.innerText;
        const jobLocation = parentNode.querySelector(".job-location")?.innerText;
        const jobDescription = parentNode.querySelector(".job-description")?.innerText;

        parentNode.querySelector(".status-btn").innerText = "Rejected";

        const allCards = allCardViewShow.querySelectorAll(".job-card");
        
        for(let card of allCards){
            const name = card.querySelector(".company-name")?.innerText;
            if(name === companyName){
                card.querySelector(".status-btn").innerText = "Rejected";
                card.querySelector(".status-btn").classList.remove("bg-green-400");
                card.querySelector(".status-btn").classList.add("bg-red-400");
                break;
            }
        }

        const cardInfo = {
            companyName,
            jobType,
            jobLocation,
            statusButton:"Rejected",
            jobDescription
        };

        const exist = rejectArrayList.find(item => item.companyName == companyName);
        if(!exist){
            rejectArrayList.push(cardInfo);
        }

        interViewArrayList = interViewArrayList.filter(item => item.companyName != companyName);

        if(currentStatue === "interview-btn"){
            renderInterviewData();
            numCalculate();
        }

        calculateCount();
        numCalculate();

    } else if(deleteBtn){

    const parentNode = deleteBtn.closest(".job-card");
    if(!parentNode) return;

    const companyName = parentNode.querySelector(".company-name")?.innerText;
    if(!companyName) return;

    const allCards = allCardViewShow.querySelectorAll(".job-card");

    for(let card of allCards){
        const name = card.querySelector(".company-name")?.innerText;
        if(name === companyName){
            card.remove();
            break;
        }
    }

    const interviewCards = interviewCardViewShow.querySelectorAll(".job-card");

    for(let card of interviewCards){
        const name = card.querySelector(".company-name")?.innerText;
        if(name === companyName){
            card.remove();
            break;
        }
    }

    const rejectCards = rejectCardViewShow.querySelectorAll(".job-card");

    for(let card of rejectCards){
        const name = card.querySelector(".company-name")?.innerText;
        if(name === companyName){
            card.remove();
            break;
        }
    }

    interViewArrayList = interViewArrayList.filter(
        item => item.companyName !== companyName
    );

    rejectArrayList = rejectArrayList.filter(
        item => item.companyName !== companyName
    );

    if(currentStatue === "interview-btn"){
        renderInterviewData();
    }

    if(currentStatue === "reject-btn"){
        renderRejectData();
    }

    calculateCount();
    numCalculate();}

});

function renderInterviewData(){

    interviewCardViewShow.innerHTML = "";

    if(interViewArrayList.length === 0){
        interViewEmty.classList.remove("hidden");
        return;
    }

    interViewEmty.classList.add("hidden");

    
    for (let cardData of interViewArrayList){
        
        let div = document.createElement("div");

        div.className = "job-card bg-base-100 card-xs shadow-sm grid grid-cols-1 md:flex justify-between rounded-md p-6 mb-8";

        div.innerHTML = `
        
                    <div class="space-y-6">
            
                    <div>
                        <h4 class="company-name font-bold text-xl">
                        ${cardData.companyName}
                        </h4>
                <p class="job-type text-gray-600 text-xl">
                ${cardData.jobType}
                </p>
                    </div>

                <p class="job-location text-gray-600 text-xl">
                ${cardData.jobLocation}
                </p>
                <button id="status-button" class="status-btn btn bg-green-500">
                ${cardData.statusButton}
                </button>

                <p class="job-description text-xl">
                ${cardData.jobDescription}
                </p>

                <div class="flex gap-5">
                    <button id="inetview-button" class="interview-btn btn btn-dash btn-accent">interview</button>
                    <button id="reject-button"  class="reject-btn btn btn-dash btn-warning">Rejected</button>
                </div>
            </div>

            <div class="mt-10 md:">
                <span id="delete-button" class="delete-btn bg-red-400 md:bg-red-300 rounded-md md:rounded-full px-4 py-3 md:p-2"><i class="fa-solid fa-trash-can"></i></span>
            </div>
               
        `

        interviewCardViewShow.appendChild(div);
    }

}

function renderRejectData(){

    rejectCardViewShow.innerHTML = "";

    if(rejectArrayList.length === 0){
        rejectEmty.classList.remove("hidden");
        return;
    }

    rejectEmty.classList.add("hidden");

    for (let cardData of rejectArrayList){
        
        let div = document.createElement("div");

        div.className = "job-card bg-base-100 card-xs shadow-sm grid grid-cols-1 md:flex justify-between rounded-md p-6 mb-8";

        div.innerHTML = `
       
                    <div class="space-y-6">
            
                    <div>
                        <h4 class="company-name font-bold text-xl">
                        ${cardData.companyName}
                        </h4>
                <p class="job-type text-gray-600 text-xl">
                ${cardData.jobType}
                </p>
                    </div>

                <p class="job-location text-gray-600 text-xl">
                ${cardData.jobLocation}
                </p>
                <button id="status-button" class="status-btn btn bg-red-400">
                ${cardData.statusButton}
                </button>

                <p class="job-description text-xl">
                ${cardData.jobDescription}
                </p>

                <div class="flex gap-5">
                    <button id="inetview-button" class="interview-btn btn btn-dash btn-accent">interview</button>
                    <button id="reject-button"  class="reject-btn btn btn-dash btn-warning">Rejected</button>
                </div>
            </div>

            <div class="mt-10 md:">
                <span id="delete-button" class="delete-btn bg-red-400 md:bg-red-300 rounded-md md:rounded-full px-4 py-3 md:p-2"><i class="fa-solid fa-trash-can"></i></span>
            </div>
               
        `

        rejectCardViewShow.appendChild(div);
    }

}