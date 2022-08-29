export function domInjector(seletor) {
    return function (target, propertyKey) {
        let elemento;
        const getter = function () {
            if (!elemento)
                elemento = document.querySelector(seletor);
            return elemento;
        };
        Reflect.defineProperty(target, propertyKey, {
            get: getter,
        });
    };
}
//# sourceMappingURL=domInject.js.map