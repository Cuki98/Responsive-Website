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

  window.onload
  {
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