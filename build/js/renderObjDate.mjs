import { handleErroDom } from './handleErrorDom.mjs'
export function rederDate () {
  const $years = document.querySelector('.card__result--years')
  const $months = document.querySelector('.card__result--months')
  const $days = document.querySelector('.card__result--days')
  const objDate = handleErroDom()
  $years.textContent = objDate.years
  $months.textContent = objDate.months
  $days.textContent = objDate.days
}
