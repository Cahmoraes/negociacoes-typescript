export function escapar(
  target: unknown,
  propertyKey: PropertyKey,
  descriptor: PropertyDescriptor,
) {
  const metodoOriginal = descriptor.value
  descriptor.value = function (...args: unknown[]) {
    let retorno = Reflect.apply(metodoOriginal, this, args)

    if (typeof retorno === 'string') {
      console.log(
        `@escapar em ação na classe ${
          this.constructor.name
        } para o método ${String(propertyKey)}`,
      )

      retorno = retorno.replace(/<script>[\s\S]*?<script>/, '')
    }

    return retorno
  }

  return descriptor
}
