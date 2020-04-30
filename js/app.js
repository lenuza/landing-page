var sections = document.getElementsByClassName('section-title');
var unorderedList = document.getElementById('navbar-list');
var listItem;

for(let i = 0; i < sections.length; i++) {
   var title = sections[i].innerHTML;
   listItem = unorderedList.appendChild(document.createElement('li'));
   listItem.innerHTML = title;
}