var sections = document.getElementsByClassName('section-content');
var unorderedList = document.getElementById('navbar-list');
var listItem;

for(let i = 0; i < sections.length; i++) {
   listItem = unorderedList.appendChild(document.createElement('li'));
   listItem.innerHTML = `Item ${i+1}`;
}