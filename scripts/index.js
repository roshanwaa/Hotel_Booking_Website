const viewMore = document.querySelector('.showContent');
const core_img = document.getElementsByClassName('core-img');
const visible_content = document.getElementsByClassName('visible-content');
const invisible_content = document.getElementsByClassName('invisible-content');
const lessBtn = document.getElementsByClassName('more-less');

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
