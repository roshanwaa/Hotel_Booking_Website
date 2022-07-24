// const viewMore = document.querySelector('#viewMore');
// const currentItem = 4;

// viewMore.addEventListener('click', (event) => {
//   const current = event.target;
//   const isViewMore = current.className.includes('view-more');
//   if (!isViewMore) return;
//   const current_itm = event.target.parentNode.querySelector('.btn-view_more');
//   current_itm.classList.toggle('btn-view_more--show');
//   current.textContent = current.textContent.includes('View More')    ? 'View Less'
//     : 'View More';
// });

// function myFunction() {
//   var moreText = document.getElementById('viewMore');
//   var btnText = document.getElementById('btn-view_more');

//   if (dots.style.display === 'none') {
//     dots.style.display = 'inline';
//     btnText.innerHTML = 'Read more';
//     moreText.style.display = 'none';
//   } else {
//     dots.style.display = 'none';
//     btnText.innerHTML = 'Read less';
//     moreText.style.display = 'inline';
//   }
// }

// $('#viewless button').on('click', function () {
//   var $this = $(this);
//   var $content = $this.parent().prev('div.core-img');
//   var linkText = $this.text().toUpperCase();

//   if (linkText === 'View More') {
//     linkText = 'Show less';
//     $content.switchClass('hideContent', 'showContent', 400);
//   } else {
//     linkText = 'View Less';
//     $content.switchClass('showContent', 'hideContent', 400);
//   }

//   $this.text(linkText);
// });

const viewMore = document.querySelector('.showContent');
const core_img = document.getElementsByClassName('core-img');
const visible_content = document.getElementsByClassName('visible-content');
const invisible_content = document.getElementsByClassName('invisible-content');
const lessBtn = document.getElementsByClassName('more-less');

// viewMore.addEventListener('click', (event) => {
//   const current = event.target;
//   const isViewMore = current.className.includes('view_more');
//   if (!isViewMore) return;
//   const current_itm = event.target.parentNode.querySelector('.btn-view_more');
//   current_itm.classList.toggle('btn-view_more--show');
//   current.textContent = current.textContent.includes('View More') ? 'View Less'
//     : 'View More';
// });

$(viewMore).ready(function () {
  $('.invisible-content').hide();
  $(viewMore).on('click', '.more-less', function () {
    var moreLessButton = $('.invisible-content').is(':visible')
      ? 'View More'
      : 'View Less';

    $(this).text(moreLessButton);
    if ($(lessBtn).text() == 'View Less') {
      $(core_img).show(invisible_content).find(invisible_content).toggle();
    }
    // $(core_img).show(invisible_content).find(visible_content).toggle();
    if ($(lessBtn).text() == 'View More') {
      $(core_img).hide(core_img).find(visible_content).toggle();
    }
  });
});
