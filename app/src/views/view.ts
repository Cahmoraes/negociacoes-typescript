import { inspect } from '../decorators/inspect.js'
import { logarTempoDeExecucao } from '../decorators/logar-tempo-de-execucao.js'

export abstract class View<T = string> {
  protected elemento: HTMLElement

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor) as HTMLElement
  }

  protected abstract template(model: T): string

  @inspect
  @logarTempoDeExecucao(true)
  public update(model: T) {
    const template = this.template(model)
    this.elemento.innerHTML = template
  }
}
