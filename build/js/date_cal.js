class DateComponent {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.date = new Date();
  }

  isEmpy() {
    return this.day === "" || this.month === "" || this.year === "";
  }

  isValidNumber() {
    const onlyPositiveNumbers = /^(?:1|[1-9]\d*)$/;
    return onlyPositiveNumbers.test(`${this.day}${this.month}${this.year}`);
  }

  isValidFormat() {
    if (
      this.day >= 1 &&
      this.day <= 31 &&
      this.month >= 1 &&
      this.month <= 12 &&
      this.year <= this.date.getFullYear()
    )
      return true;
    return false;
  }
  //  Al ultimo
  calculateDifferenceFromPastDate() {}
}

function errorDate() {
  const $inputDay = document.getElementById("days").value;
  const $inputMonth = document.getElementById("months").value;
  const $inputYear = document.getElementById("years").value;
  const date = new DateComponent($inputYear, $inputMonth, $inputDay);
  const listInputs = document.querySelectorAll(".form__input");
  listInputs.forEach($input => {
    $input.classList.toggle(
      "error-input",
      date.isEmpy() || !date.isValidNumber() || !date.isValidFormat()
    );
  });
}

const $button = document.querySelector(".form__button");
//
$button.addEventListener("click", e => {
  e.preventDefault();
  // Funcion de comprobacion de errores
  errorDate();
});
//   const $error = document.querySelectorAll(".form__error");
//   const $label = document.querySelectorAll(".form__label");
//
// function erros() {
//   $inputs.forEach(($input, index) => {
//     const isEmpy = $input.value === "";
//     const isValidFormat = regex.test($input.value);
//     $input.classList.toggle("error-input", isEmpy || !isValidFormat);
//     $label[index].classList.toggle("error-label", isEmpy || !isValidFormat);
//     $error[index].style.opacity = isEmpy || !isValidFormat ? 1 : 0;
//     $error[index].textContent = isEmpy ? "Field is required" : "Format invalid";
//   });
