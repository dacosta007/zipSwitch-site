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

// help show  successful confirmation message on contact form
const confirmationMsg = (e) => {
  // prevent default behaviour of form submission
  e = e || window.event;
  e.preventDefault();

  // show confirmation message
  const msg = query(document, '.msg-confirmation-container');
  msg.classList.add('show');

  // clear all input field
  id('contactFrm').reset();
};

// help close confirmation message on contact form
const closeConfirmationMsg = () => {
  const msg = query(document, '.msg-confirmation-container');
  msg.classList.add('fade-out');

  // hide confirmation message after 1s.
  setTimeout(() => {
    msg.classList.remove('fade-out');
    msg.classList.remove('show');
  }, 1000);
};

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

/* ***** Method for image slides ***** */
// image slide start counter
let imgSlideCount = 0;
const imgSlides = () => {
  let images = queryAll(document, '.device-img-slide-preview-container img');
  let indicators = queryAll(document, '.img-preview-indicator-container .img-preview-indicator');

  // increment img slide count
  imgSlideCount++;
  // check to see if reach end of img count: to repeat action
  if(imgSlideCount > (images.length - 1)) { imgSlideCount = 0; }

  // remove the 'active' class from every element
  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
    indicators[i].classList.remove('active');
  }

  // display required img (base on img slide count)
  images[imgSlideCount].classList.add('active');
  indicators[imgSlideCount].classList.add('active');
  
  // auto slide image, and show indicator after specified seconds
  setTimeout(imgSlides, 4000);
};
/* ***** Method for image slides ends ***** */

/* **** For previewing device picture in a modal window **** */
const closeModal = () => {
  const modalWindow = query(document, '.modal');
  modalWindow.style.display = 'none';
};

const showImgModal = () => {
  // device images
  const images = imgsToPreview;
  // modal window, modal big img content, & modal list of images
  let modalWindow = query(document, '.modal');
  let modalImg = query(document, '.image-preview img');
  let modalImgList = queryAll(document, '[data-modal-img-list]');

  images.forEach(img => {
    img.addEventListener('click', () => {
      // set modal big img content src
      modalImg.src = img.src;
      // remove all active class from list of imgs & put it on displayed img among the list
      for (let i = 0; i < modalImgList.length; i++) {
        modalImgList[i].classList.remove('active');
      }
      modalImgList[img.dataset.deviceImg].classList.add('active');
    
      // display the modal window
      modalWindow.style.display = 'flex';
    });
  });
};

// Method to handle modal image slide
const modalImgListSlide = () => {
  // modal large img
  let modalImg = query(document, '.image-preview img');
  // modal list of imgs
  let modalImgList = queryAll(document, '[data-modal-img-list]');

  // add click event to all device img list: to display desired img
  modalImgList.forEach((img) => {
    img.addEventListener('click', () => {
      // remove 'active' class from all the imgs
      for (let i = 0; i < modalImgList.length; i++) {
        modalImgList[i].classList.remove('active');
      }
      // add 'active' class to selected img
      img.classList.add('active');
      // show the img selected in the big modal content container
      modalImg.src = img.src;
    });
  });
};

let imgsToPreview = queryAll(document, '.device-img-slide-preview-container img');
if (imgsToPreview && imgsToPreview != undefined) {
  showImgModal();
  modalImgListSlide();
}
/* **** For previewing device picture in a modal window ends **** */

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

// Init small device navbar
document.addEventListener('load', smallNav());

// Init images slide animation effects
document.addEventListener('DOMContentLoaded', () => {
  if (document.location.href == `${document.location.origin}/` || document.location.href == `${document.location.origin}/index.html`) {
    // callout image showcase slide 
    showImgSlides();
  
    // for image slide preview
    imgSlides();
  }
});

// close modal window
const closeModalBtn = query(document, '.close-modal');
if (closeModalBtn && closeModalBtn != undefined) {
  closeModalBtn.addEventListener('click', closeModal);
}
/* ***** Event Handlers Ends ***** */