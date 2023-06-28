export class DateComponent {
  constructor () {
    this.year = 0
    this.month = 0
    this.day = 0
    this.objDate = new Date()
  }

  setDateComponent (year, month, day) {
    this.year = year
    this.month = month
    this.day = day
  }

  getDate () {
    return new Date(this.year, this.month, this.day)
  }

  validFormat () {
    return this.day >= 1 && this.day <= 31 && this.month >= 1 && this.month <= 12 && this.year <= this.objDate.getFullYear() && this.year >= 1
  }

  getDifferencesBetweenDates () {
    const pastDate = this.getDate()
    let years = this.objDate.getFullYear() - pastDate.getFullYear()
    let months = (this.objDate.getMonth() + 1) - pastDate.getMonth()
    const days = this.objDate.getDate() - pastDate.getDate()

    if (this.objDate.getDate() < pastDate.getDate()) {
      months--
    }
    if (months < 0) {
      years--
      months += 12
    }
    return {
      years,
      months,
      days
    }
  }
}
