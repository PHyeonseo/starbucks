const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});
searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('foucused');
  searchInputEl.setAttribute('placeholder',' 통합검색'); //html속성지정할떄사용하는메소드 
});
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('foucused');
  searchInputEl.setAttribute('placeholder',''); //html속성지정할떄사용하는메소드 
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021
