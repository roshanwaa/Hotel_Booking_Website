let pay_Btn = document.getElementById('pay_now-Btn');

if (!isLogin || isLogin === 'false') {
  pay_Btn.disabled = true;
} else if (isLogin === 'true') {
  pay_Btn.disabled = false;
}

pay_Btn.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Hi your booking is successfully!');
});

const API_URL = 'https://travel-advisor.p.rapidapi.com/';
const tripAdvisorHost = 'travel-advisor.p.rapidapi.com';
const tripAdvisorKey = '289f16ea54msh62210c94ea30784p1721fbjsn45935df11aa5';

