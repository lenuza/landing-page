const sections = document.getElementsByClassName('section-title');
const unorderedList = document.getElementById('navbar-list');
const links = document.getElementsByClassName('anchor');
const active = document.getElementsByClassName('active');
const scollToTop = document.getElementById('scrollBack');
var prevScrollpos = window.pageYOffset;
var listItem;

//dynamically creating havbar list items and anchor elements
for (let i = 0; i < sections.length; i++) {
   const title = sections[i].innerHTML;
   listItem = unorderedList.appendChild(document.createElement('li')).appendChild(document.createElement('a'));
   listItem.innerHTML = title;
   listItem.setAttribute('href', `#${sections[i].id}`);
   listItem.setAttribute('class', 'anchor');
}

//adding class active when clicked
for (let i = 0; i < links.length; i++) {
   links[i].addEventListener('click', () => {

      if (active.length > 0) {
         active[0].className = active[0].className.replace('active', '');
      }
      this.className += " active";
   });
};

window.onscroll = () => {
   var currentScrollPos = window.pageYOffset;

   if (prevScrollpos > currentScrollPos) {
      document.getElementById('navbar').style.top = '0';
   } else {
      document.getElementById('navbar').style.top = '-5em';
   }
   prevScrollpos = currentScrollPos;
}

// show back to top scroll, using this tuttorial as a guide https://getflywheel.com/layout/sticky-back-to-top-button-tutorial/
const backToTop = () => {
   let y = window.scrollY;

   if (y > 0) {
      scollToTop.className = 'back-to-top show';
   } else {
      scollToTop.className = 'back-to-top hide';
   }
}

window.addEventListener('scroll', backToTop);

document.getElementById('scrollBack').addEventListener('click', () => {
   window.scrollTo(0, 0);
})