export class View {
    constructor(seletor, escapar = false) {
        this.elemento = document.querySelector(seletor);
        this.escapar = escapar;
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map