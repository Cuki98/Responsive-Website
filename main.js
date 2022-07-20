// execute script after page load
var d = new Date();

var reviews = [];
reviews = [
    {name:"Quinyetta B" , review:"Everytime i go to wax spa gisele does a fantastic job and makes you feel so comfortable and relax. The staff are very professional and friendly. Thanx Giselle 😊"},
    {name:"Serena Troise" , review:"I love Wax Spa! The staff is super professional. Boris is very precise and attentive to customer needs. I have been waxing with Carolina for years, she is very kind, gentle and professional. Always do an amazing job. The spa is extremely clean and beautiful! They are ALWAYS on time. I never had to wait 1 minute for my appointment their app management is on point! Highly recommended."},
    {name:"Keith Holmes" , review:"Every time I go there the staff is always friendly and professional. Plus the service is top notch. I always leave completely satisfied with the service that I received while being there. I would highly recommend going there to anyone"},

];





window.onload = function digital_fn() {

    UpdateReviews();
   

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


    const header = document.querySelector('.navigation-holder');
    const sectionOne = document.querySelector('.banner-area');
    const sectionOptions = {
        rootMargin: "-800px 0px 0px 0px"
    };
    const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {

        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                header.classList.add('nav-scrolled');
            } else {
                header.classList.remove('nav-scrolled');
            }
        })
    }, sectionOptions);




    sectionOneObserver.observe(sectionOne);





    // toggle button
    let toggle = document.querySelector("#nav .toggle-btn");
    let collapse = document.querySelector("#nav .collapse");

    toggle.addEventListener('click', function (event) {
        collapse.classList.toggle('active')
        // console.log(toggle)
    });

    // mansonry js
    let grid = document.querySelector("#site-main .recent-work-area .images-flex");

    let msnry = new Masonry(grid, {
        itemSelector: '.flex-item',
        gutter: 100,
        fitWidth: true,
    })


    //animaiton observers
    faders.forEach(fader => {
        appearOnScroll.observe(fader)
    });

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });
    zoomers.forEach(zoom => {
        appearOnScroll.observe(zoom);
    });

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


const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const zoomers = document.querySelectorAll('.zoom');

const appearOptions =
{
    threshold: 0,
    rootMargin: "0px 0px -350px 0px"
};
const appearOnScroll = new IntersectionObserver
    (function
        (entries,
            appearOnScroll
        ) {

        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                console.warn('false');
                return;
            } else {

                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });

    }, appearOptions);



