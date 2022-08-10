var toggle = document.querySelector("#nav .toggle-btn");
var collapse = document.querySelector("#nav .collapse");

var sideMenuButton = document.querySelector('.side-menu-button');
var menuToggled = false;
var menu = document.querySelector('.phone-menu'); 

window.onload = function onLoad()
{
       //INTERACTIVE NAVIGATION BAR
       const header = document.querySelector('.interactive-navigation');
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
      //INTERACTIVE NAVIGATION BAR 
}

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

document.addEventListener('click', function handleClickOutsideBox(event) {
    const sideMenu = document.querySelector('.phone-menu');
  
    if(menuToggled)
    {
        if (!sideMenu.contains(event.target)) {
            ToggleSideMenu();
        }
    }
  });


  sideMenuButton.addEventListener("click", () => {
    
    const toggleTimeout = setTimeout(()=>{
        if(collapse.classList.contains('active'))
        {
            collapse.classList.remove('active');
        }
        ToggleSideMenu();
    }, 2);
});


function ToggleSideMenu() {
    
    if(menuToggled)
    {
        menu.classList.remove('active');
        
    }
    else
    {
        menu.classList.add('active');    
    }
    console.log(menu.classList.contains('active'));
    menuToggled = !menuToggled;
}