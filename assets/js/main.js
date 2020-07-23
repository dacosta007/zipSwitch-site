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
    // toggle navbar menu btwn display(flex & none)
    navbar.classList.toggle('navbarBg');
    navbarMenu.classList.toggle('showNav');
  });
}

// handles img slide on the page first section
const imgSlideIndx = 0;
const showImgSlides = () => {
  let imgIndicators = queryAll(document, '.img-slide-indicator');
  let imgContainers = queryAll(document, '.device-img');

  // increment imgSlideIndx value
  imgSlideIndx++;
  // check to see if reach end of img count: to repeat action
  if(imgSlideIndx > imgContainers.length) { imgSlideIndx = 0 }

  imgContainers.forEach(img => {
    
    console.log(img.children[0].getAttribute('alt'));
  });
  // console.log(imgs.length, imgIndicators.length, imgSlideIndx);
};


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


// Init small device navbar
document.addEventListener('load', smallNav());