// get element by css selector
const query = (ele, cssQry) => {
  return ele.querySelector(cssQry);
};

const queryAll = (ele, cssQry) => {
  return ele.querySelectorAll(cssQry);
};

// get element by its id attr
const id = (ele) => {
  return document.getElementById(ele);
};

const smallNav = () => {
  let menuIconBtn = query(document, "[data-menu-btn]");
  let navbarMenu = query(document, "[data-navbar-menu]");
  let navbar = query(document, '.navbar');

  menuIconBtn.addEventListener('click', () => {
    if(menuIconBtn.classList.contains('ti-menu')) {
      menuIconBtn.classList.remove('ti-menu');
      menuIconBtn.classList.add('ti-close');
    } else {
      menuIconBtn.classList.add('ti-menu');
      menuIconBtn.classList.remove('ti-close');
    }
    // menuIconBtn.classList.toggle('-');
    navbar.classList.toggle('navbarBg');
    navbarMenu.classList.toggle('showNav');
  });
}

// handles img slide on the page first section
let imgSlideIndx = 0;
const showImgSlides = () => {
  let imgIndicators = queryAll(document, '.img-slide-indicator');
  let imgContainers = queryAll(document, '.device-img');

  // increment imgSlideIndx value
  imgSlideIndx++;
  // check to see if reach end of img count: to repeat action
  if(imgSlideIndx > (imgContainers.length - 1)) { imgSlideIndx = 0; }

  // hide all the img at initialization of the page load
  for(let i = 0; i < imgContainers.length; i++) {
    imgContainers[i].classList.remove('active');
    imgIndicators[i].classList.remove('active');
  }
  // display img  required img (base on img slide count)
  imgContainers[imgSlideIndx].classList.add('active');
  imgIndicators[imgSlideIndx].classList.add('active');

  // auto slide image, and show indicator after 6seconds
  setTimeout(showImgSlides, 6000);
};


/* ***** Event Handlers ***** */
// handles navbar transparency
window.addEventListener('scroll', () => {
  let windowScrl = window.scrollY;
  let navbar = query(document, '.navbar');
  if(windowScrl >= 612) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove('active');
  }
});

// document.addEventListener('DOMContentLoaded', showImgSlides);

// Init small device navbar
document.addEventListener('load', smallNav());