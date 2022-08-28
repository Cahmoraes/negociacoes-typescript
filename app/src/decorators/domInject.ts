export function domInjector(seletor: string) {
  return function (target: object, propertyKey: PropertyKey) {
    let elemento: HTMLElement | null

    const getter = function () {
      if (!elemento) elemento = document.querySelector(seletor) as HTMLElement
      return elemento
    }

    Reflect.defineProperty(target, propertyKey, {
      get: getter,
    })
  }
}
