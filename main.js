const IconArrowDown = document.querySelectorAll('.icon-arrow-down');

IconArrowDown.forEach((icon) => {
  icon.addEventListener('click', () => {
    let isOpen = icon.dataset.isopen;
  //the iconarrow is inside a div and above the div there is a p tag
  const pTag = icon.parentElement.parentElement.querySelector('p');
  const h2Tag = icon.previousElementSibling
  if (isOpen === 'false') {
    icon.dataset.isopen = 'true';
    h2Tag.dataset.visible = 'true';
    pTag.style.display = 'block';
  }
  else{
    icon.dataset.isopen = 'false';
    icon.classList.add('rotateBack');
    h2Tag.dataset.visible = 'false';
    pTag.style.display = 'none';
  }
  });
});