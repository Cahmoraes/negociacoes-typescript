export abstract class View<T = string> {
  protected elemento: HTMLElement

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor) as HTMLElement
  }

  protected abstract template(model: T): string

  public update(model: T) {
    const template = this.template(model)
    this.elemento.innerHTML = template
  }
}
