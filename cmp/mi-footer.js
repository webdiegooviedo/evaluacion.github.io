class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; Oviedo Pimentel Diego Emiliano 2021 `;
    }
}
customElements.define("mi-footer", MiFooter);
