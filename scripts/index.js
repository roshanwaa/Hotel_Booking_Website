const viewMore = document.querySelector('#viewMore');
const currentItem = 4;

viewMore.addEventListener('click', (event) => {
  const current = event.target;
  const isViewMore = current.className.includes('view-more');
  if (!isViewMore) return;
  const current_itm = event.target.parentNode.querySelector('.btn-view_more');
  current_itm.classList.toggle('btn-view_more--show');
  current.textContent = current.textContent.includes('View More')
    ? 'View Less'
    : 'View More';
});
