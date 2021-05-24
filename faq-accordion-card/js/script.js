const items = document.querySelectorAll('.accordion-item');
const box = document.querySelector('.image-wrapper__box');

items.forEach((item) => {
  item.addEventListener('click', () => {
    box.style.left = '-100px';
    if (item.classList.contains('active')) {
      item.classList.toggle('active');
    } else {
      box.style.left = '-125px';
      items.forEach((item) => {
        item.classList.remove('active');
      });
      item.classList.add('active');
    }
  });
});
