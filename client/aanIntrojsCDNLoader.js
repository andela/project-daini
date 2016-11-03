const introJs = document.createElement("script");
introJs.setAttribute("type", "text/javascript");
introJs.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/intro.js/2.3.0/intro.min.js");
document.getElementsByTagName("head")[0].appendChild(introJs);

// const startTour = document.createElement("script");
// startTour.

// function startTour() {
//     const tour = introJs();
//     tour.setOption('tooltipPosition', 'auto');
//     tour.setOption('positionPrecedence', ['left', 'right', 'bottom', 'top'])
//     tour.start();
// }
// introJs().setOption('tooltipPosition', 'auto');
// introJs().setOption('positionPrecedence', ['left', 'right', 'bottom', 'top'])
		

const introCss = document.createElement("link");
introCss.setAttribute("rel", "stylesheet");
introCss.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/intro.js/2.3.0/introjs.min.css");
document.getElementsByTagName("head")[0].appendChild(introCss);
