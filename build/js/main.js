import { rederDate } from './renderObjDate.mjs'
function main () {
  const $button = document.querySelector('.form__button')
  $button.addEventListener('click', (e) => {
    e.preventDefault()
    rederDate()
  })
}
main()
