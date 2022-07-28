const viewMoreBtn = document.querySelector('#view_more');
const viewCity = document.getElementById('view-more-city-cards');

const API_URL = 'https://travel-advisor.p.rapidapi.com/';
const tripAdvisorHost = 'travel-advisor.p.rapidapi.com';
const tripAdvisorKey = '289f16ea54msh62210c94ea30784p1721fbjsn45935df11aa5';

viewMoreBtn.addEventListener('click', () => {
  if (viewMoreBtn.innerText == 'View More') {
    viewCity.style.display = 'block';
    viewMoreBtn.innerText = 'View Less';
  } else {
    viewCity.style.display = 'none';
    viewMoreBtn.innerText = 'View More';
  }
});
