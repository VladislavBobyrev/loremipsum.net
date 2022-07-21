// PROGRESS
const progressValue = document.querySelector('.progress')

const updateProgressValue = () =>
{
  const value = progressValue.value
  document.querySelector('.progress-info__value').innerHTML = value
}
window.addEventListener('click', updateProgressValue)
document.addEventListener('keydown', function (event)
{
  if (event.code == 'ArrowUp' || 'ArrowDown') {
    updateProgressValue()
  }
});

// BURGER
const burger = document.querySelector('.burger')
const toggleNav = () =>
{
  burger.classList.toggle('active')
}
burger.addEventListener('click', toggleNav)