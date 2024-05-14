const template = document.createElement('template');
let a = "Click me";
template.innerHTML = `

<style>
    span {
        color: red;
    }
</style>
    <div class="gallery">
        <button>${a}</button>
        <span>This is the gallery</span>
    </div>
`;

class WebGallery extends HTMLElement {

    shadowRoot = null;
    constructor() {
        super();

        this.shadowRoot = this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log("connected")
    }
}
customElements.define('web-gallery', WebGallery);


window.onload = () => {

 }
