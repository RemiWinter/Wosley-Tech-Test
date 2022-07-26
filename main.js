const expandButton = document.querySelector('.header-btn')
const dropdownContent = document.querySelector('.dropdown-content')
const radiatorImg = document.querySelector('.radi-img')

expandButton.addEventListener('click', () => {
  if (dropdownContent.classList.contains('hidden')) {
    expandButton.querySelector('p').textContent = 'Read less'
  }
  else {
    expandButton.querySelector('p').textContent = 'Read more'
  }
  
  dropdownContent.classList.toggle('hidden');
  radiatorImg.classList.toggle('hidden');
})

