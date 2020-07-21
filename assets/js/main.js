// get element by css selector
const query = (ele, cssQry) => {
  return ele.querySelector(cssQry);
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