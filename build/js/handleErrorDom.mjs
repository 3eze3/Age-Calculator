import { DateComponent } from './dateComponent.mjs'

export function handleErroDom () {
  const $year = document.getElementById('years').value
  const $month = document.getElementById('months').value
  const $day = document.getElementById('days').value
  const $inputs = document.querySelectorAll('.form__input')
  const $labels = document.querySelectorAll('.form__label')
  const isEmpy = $year === '' || $month === '' || $day === ''
  const $error = document.querySelector('.form__error')
  const date = new DateComponent()
  date.setDateComponent($year, $month, $day)
  if (!date.validFormat() || isEmpy) {
    $inputs.forEach(input => input.classList.add('error-input'))
    $labels.forEach(label => label.classList.add('error-label'))
    $error.style.opacity = '1'
  } else {
    $inputs.forEach(input => input.classList.remove('error-input'))
    $labels.forEach(label => label.classList.remove('error-label'))
    $error.style.opacity = '0'
    return date.getDifferencesBetweenDates()
  }
}
