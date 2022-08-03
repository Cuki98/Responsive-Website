//Map Highligter
$(function () {
    $('.map').maphilight();
});





window.onload = function fn() {
   
    HideAllPricingLists();

}


var activePricingList;
var allPricingLists = document.querySelectorAll('.pricing-list');

function HideAllPricingLists() {
    allPricingLists.forEach(entry => {

        entry.style.display = 'none';
    });
}

function HideActivePricingList(callback) {


    if (activePricingList == null) {
        //no active pricing list
        callback();
        return;
    }
    else {

        activePricingList.classList.remove('active');
        
        let timeout = setTimeout(() => {
            activePricingList.style.display = 'none'
            let innerTimeout = setTimeout(() => {

            
                callback();
            }, 150);
            
        }, 150);
    }
}


function ShowPricingList(listType) {


    var pricingListToShow = document.querySelector('.pricing-list-' + listType);

    if (pricingListToShow == null) return;

    
    if (activePricingList != null) {
        if (pricingListToShow != activePricingList)
        HideActivePricingList(() => {
                activePricingList = pricingListToShow;
                activePricingList.style.display = 'block';
                let timeout = setTimeout(() => {
                    activePricingList.classList.add('active');        
                }, 1);
                
            });
    }
    else
    {
        activePricingList = pricingListToShow;
        activePricingList.style.display = 'block';

        let timeout = setTimeout(() => {
            activePricingList.classList.add('active');        
        }, 1);

    }

}