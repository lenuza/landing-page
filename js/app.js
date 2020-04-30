var sections = document.getElementsByClassName('section-title');
var unorderedList = document.getElementById('navbar-list');
var listItem;

// var active = document.getElementsByClassName('active');

//  dynamically creating havbar list items and anchor elements
for(let i = 0; i < sections.length; i++) {
   var title = sections[i].innerHTML;
   listItem = unorderedList.appendChild(document.createElement('li')).appendChild(document.createElement('a'));
   listItem.innerHTML = title;
   listItem.setAttribute('href', `#${sections[i].id}`);
   listItem.setAttribute('class', 'anchor');
}

//adding class active when clicked
var links = document.getElementsByClassName('anchor');
for (var i = 0; i < links.length; i++) {
   links[i].addEventListener('click', function() {
   var active = document.getElementsByClassName('active');

   if(active.length > 0) {
      active[0].className = active[0].className.replace('active', '');
   }

   this.className += " active";
});
}

var prevScrollpos = window.pageYOffset;

window.onscroll = () => {
   var currentScrollPos = window.pageYOffset;

   if (prevScrollpos > currentScrollPos) {
      document.getElementById('navbar').style.top = '0';
   } else {
      document.getElementById('navbar').style.top = '-5em';
   }
   prevScrollpos = currentScrollPos;
}

//show back to top scroll

const scollToTop = document.getElementById('scrollBack');

const backToTop = () => {

   let y = window.scrollY;

   if( y > 0) {
      scollToTop.className = 'back-to-top show';
   }
   else {
      scollToTop.className = 'back-to-top hide';
   }
}

window.addEventListener('scroll', backToTop);