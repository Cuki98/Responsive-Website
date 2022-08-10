var selectedTag = "";


window.onload
{
    var allFilter = document.querySelector('.articles-all-filter');
    var waxingFilter = document.querySelector('.articles-waxing-filter');
    var aftercareFilter = document.querySelector('.articles-aftercare-filter');
    var treatmentsFilter = document.querySelector('.articles-treatments-filter');


    allFilter.addEventListener("click", () => {
        ChangeSelection('all');
    });

    waxingFilter.addEventListener("click", () => {
        ChangeSelection('waxing');
    });

    aftercareFilter.addEventListener("click", () => {
        ChangeSelection('aftercare');
    });

    treatmentsFilter.addEventListener("click", () => {
        ChangeSelection('treatments');
    });
}





function ChangeSelection(selection) {

    if (selectedTag == '') {
        let all = document.querySelectorAll('.article-item');
        all.forEach(item => {
            item.style.display = "none"
        });
    }
    if (selectedTag == selection) return;



    if (selection == 'all') {
        let all = document.querySelectorAll('.article-item');
        all.forEach(item => {
            item.style.display = "block"
            selectedTag = selection;

        });
        return;
    }

    console.log(selectedTag);



    let articlesToHide;

    if (selectedTag != '') {
        if (selectedTag == 'all') {
            articlesToHide = document.querySelectorAll('.article-item');
        }
        else {
            articlesToHide = document.querySelectorAll("." + selectedTag);
        }


        articlesToHide.forEach(articleHide => {


            articleHide.style.display = "none"

        });

    }

    selectedTag = selection;



    let articlesToShow = document.querySelectorAll("." + selection);

    articlesToShow.forEach(articleShow => {
        articleShow.style.display = "block"
    });
}