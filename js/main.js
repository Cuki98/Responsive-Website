// execute script after page load
var d = new Date();

var reviews = [];
reviews = [
    {name:"Quinyetta B" , review:"Everytime i go to wax spa gisele does a fantastic job and makes you feel so comfortable and relax. The staff are very professional and friendly. Thanx Giselle 😊"},
    {name:"Serena Troise" , review:"I love Wax Spa! The staff is super professional. Boris is very precise and attentive to customer needs. I have been waxing with Carolina for years, she is very kind, gentle and professional. Always do an amazing job. The spa is extremely clean and beautiful! They are ALWAYS on time. I never had to wait 1 minute for my appointment their app management is on point! Highly recommended."},
    {name:"Keith Holmes" , review:"Every time I go there the staff is always friendly and professional. Plus the service is top notch. I always leave completely satisfied with the service that I received while being there. I would highly recommend going there to anyone"},

];

var thropies = [];
trophies = 
[
    {name:"Providing greatness since", startingValue:2022 , finalValue:2006 , extra:""},
    {name:"Happy clients", startingValue:0 , finalValue:20000 , extra:"+"},
    {name:"Product quality", startingValue:0 , finalValue:100 , extra:"%"}
]


window.onload = function digital_fn() {

    UpdateReviews();
    UpdateTrophyStat();
    
    //Update current date
    switch (d.getDay()) {
        case 0:
            highlightDate('.sunday');
            // code block
            break;
        case 1:
            highlightDate('.monday');
            // code block
            break;
        case 2:
            highlightDate('.tuesday');
            // code block
            break;
            case 3:
            highlightDate('.wednesday');
            // code block
            break;
        case 4:
            highlightDate('.thursday');
            // code block
            break;
        case 5:
            highlightDate('.friday');
            // code block
            break;
        case 6:
            highlightDate('.saturday');
            // code block
            break;
        default:
        // code block
    }



    // mansonry js
    let grid = document.querySelector("#site-main .recent-work-area .images-flex");

    let msnry = new Masonry(grid, {
        itemSelector: '.flex-item',
        gutter: 100,
        fitWidth: true,
    })

}


window.addEventListener("resize", displayWindowSize);

function displayWindowSize(){
    // Get width and height of the window excluding scrollbars
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    
    console.log(collapse == null);
    // Display result inside a div element
    if(w >= 1024)
    {
        if(collapse.classList.contains('active'))
        {
            collapse.classList.remove('active');
        }
    }
}






function highlightDate(date)
{
   let dateRow = document.querySelector(date);
   dateRow.classList.toggle('highlighted-date-row');
    console.log(dateRow);
}

const reviewHolder = document.querySelector('.review-content');
const reviewName = document.querySelector('.review-name');
const reviewContent = document.querySelector('.review-text');
var currentReviewIndex = -1;

function UpdateReviews()
{
    currentReviewIndex =randomArrayIndex(reviews , currentReviewIndex);

    reviewHolder.classList.toggle("fade-out");
    const animationTimeout = setTimeout(()=>{
        reviewName.innerHTML =  reviews[currentReviewIndex].name;
        reviewContent.innerHTML =  reviews[currentReviewIndex].review;
        reviewHolder.classList.toggle("fade-out");
        const myTimeout = setTimeout(UpdateReviews, 5000);
    }, 1000);

}



const changingStatHeader = document.querySelector(".changing-stat-header");
const changingStatNumber = document.querySelector(".changing-stat-number");
var currentTrophyIndex = -1;

function UpdateTrophyStat()
{

    currentTrophyIndex =randomArrayIndex(trophies , currentTrophyIndex);
    
    changingStatHeader.innerHTML =  trophies[currentTrophyIndex].name;
    animateValue(changingStatNumber , trophies[currentTrophyIndex].startingValue , trophies[currentTrophyIndex].finalValue  , 500 ,
        ()=>{
            changingStatNumber.innerHTML = changingStatNumber.innerHTML + trophies[currentTrophyIndex].extra;
        });

    const fadeTimeout = setTimeout(()=>{

        UpdateTrophyStat();
    }, 5000);

}

///////////////////////////////////////////////UTILITY FUNCTIONS////////////////////////////////////////
function randomArrayIndex(arr , previous = -1) {
    let num = Math.floor(Math.random() * arr.length);


    if(previous !=-1)
    {
        if(num == previous)
        {
           return randomArrayIndex(arr , previous);
        }
        else
        {
            return num;
        }
    }
    else
    {
        return num;
    }

  }

  function animateValue(obj, start, end, duration , callbackFunction = null) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
    }
    else
    {
        if(callbackFunction != null)
        callbackFunction();
    }
};

window.requestAnimationFrame(step);
  }
  /////////////////////////////////////////////UTILITY FUNCTIONS////////////////////////////////////////




