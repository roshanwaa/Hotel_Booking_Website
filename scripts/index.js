const storeData = document.getElementById('loginBtn');

// *********************************
// $('#login-form').ready(() => {
//   $('#signup-form').submit(() => {
//     var nm1 = $('#uname').val();
//     var ps1 = $('#psw').val();
//     localStorage.setItem('#uname', nm1);
//     localStorage.setItem('#psw', ps1);
//   });

//   $('#login-form').submit(() => {
//     var enteredName = $('#uname').val();
//     var enteredPass = $('#psw').val();

//     var storedName = localStorage.getItem('n1');
//     var storedPass = localStorage.getItem('p1');

//     if (enteredName == storedName && enteredPass == storedPass) {
//       alert('You are logged in!');
//     } else {
//       alert('Username and Password do not match!');
//     }
//   });
// });

// ***********************  checking
// let uname = document.getElementById('uname');
// let psw = document.getElementById('psw');

// addEventListener(
//   'click',
//   (login = () => {
//     localStorage.setItem('name', uname);
//     localStorage.setItem('psw', psw);
//     const nameData = sessionStorage.getItem('uname');
//     const pswData = sessionStorage.getItem('psw');
//     if (nameData && pswData) {
//       console.log('Got the id - ' + nameData + ' and the name - ' + pswData);
//     } else {
//       console.log('Could not find id.');
//     }
//   })
// );

//***************************  checking
function login() {
  let uname = document.querySelectorAll('#uname').value;
  let psw = document.querySelectorAll('#psw').value;
  console.log(uname, psw);
  const setUname = localStorage.setItem('user', JSON.stringify(uname));
  const setPwd = localStorage.setItem('user', JSON.stringify(psw));
  const getUname = JSON.parse(localStorage.getItem('uname'));
  const getPsw = JSON.parse(localStorage.getItem('password'));
  if (getUname == setUname && getPsw == setPwd) {
    console.log('Login successful');
  } else {
    console.log('Login Failed');
  }
}
