export abstract class View<T = string> {
  protected elemento: HTMLElement
  private escapar: boolean

  constructor(seletor: string, escapar = false) {
    this.elemento = document.querySelector(seletor) as HTMLElement
    this.escapar = escapar
  }

  protected abstract template(model: T): string

  public update(model: T) {
    let template = this.template(model)
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<script>/, '')
    }
    this.elemento.innerHTML = template
  }
}
