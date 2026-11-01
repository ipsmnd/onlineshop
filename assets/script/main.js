// $.noConflict();

// jQuery(document).ready(function($) {

//     "use strict";
//     var userid = localStorage.getItem('user_id');
//     if (!userid) {
//         window.location = "index.html";
//     }

//     [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function(el) {
//         new SelectFx(el);
//     });

   

// });

const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })
 
 if (close) {
   close.addEventListener('click', () => {
     nav.classList.remove('active')
   })
 }
}


Array.from(document.getElementsByClassName("showbtn")).map((btn) => {
  btn.addEventListener("click", () => {
      console.log("click")
      document.getElementById("sidemenu").classList.toggle("show")
  })
})

document.getElementById("profile_dropdown").addEventListener("click",()=>{
  document.getElementsByClassName("profilre_dropdown")[0].classList.toggle("toggle_profile_dropdown")
})
