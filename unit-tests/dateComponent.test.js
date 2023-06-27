import { describe, expect, it, vitest } from 'vitest'
import { DateComponent } from '../build/js/dateComponent'
/**
// Modulos funciones
dateComponent en un principio interactua con el modulo erroDom
(no hereda por que realmente no existe una relacion de padre e hijo) ademas no existen medotos que relaciones e atributos,
ya que solo vamos a usar los metodos para comprobar si se cumple o no , y pintar los errores.
-ErrorDom: solo va a tener encuenta los errors y los va a pintar en la vista,
si todos los errores pasan retornar la diferencia entre la fecha ingresada y la fecha actual.
// ***********************************************************************************************************************************
-RenderComponentDate: este va a recibir el errorDom si es satisfactorio entonces lo pintara y si no pues en un
principio no haria nada ni deveria rotarnar ningun valor, o retornar null.
 */

describe('dateComponent', () => {
  const objDateComponent = new DateComponent()
  it('should be a class', () => expect(DateComponent).toBeTypeOf('function'))
  it('should be four attributes', () => {
    const attributes = Object.keys(objDateComponent)
    expect(attributes.length).to.equal(4)
  })

  it('method setDateComponent should given three values', () => {
    const spySetDateComponet = vitest.spyOn(objDateComponent, 'setDateComponent')
    const param1 = 1
    const param2 = 3
    const param3 = 2
    // Act
    objDateComponent.setDateComponent(param1, param2, param3)
    expect(spySetDateComponet).toHaveBeenCalledWith(param1, param2, param3)
  })

  it('method validFormat return true, if date have a correct format', () => {
    const validYear = 1999
    const validMonth = 11
    const validDay = 31
    objDateComponent.setDateComponent(validYear, validMonth, validDay)
    expect(objDateComponent.validFormat()).toBe(true)
  })

  it('method getDifferencesBetweenDates should return a object', () => {
    const differences = objDateComponent.getDifferencesBetweenDates()
    expect(differences).toEqual(expect.objectContaining({
      years: expect.any(Number),
      months: expect.any(Number),
      days: expect.any(Number)
    }))
  })

  it('calculate difference between currentDate and pastDate', () => {
    objDateComponent.setDateComponent(1984, 9, 24)
    const difference = objDateComponent.getDifferencesBetweenDates()
    expect(difference).toEqual({
      years: 38,
      months: 9,
      days: 3
    })
  })
})
