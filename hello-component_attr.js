class HelloComponent extends HTMLElement {

    constructor() {
        super();
        this.name = 'Component';
    }

    // invoked when the element is added to a document:
    connectedCallback() {
        this.updateContent();
    }

    // component attributes
    static observedAttributes = ["name"];

    // attribute change
    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[ property ] = newValue;
        this.updateContent();
    }

    updateContent() {
        this.textContent = `Hello ${this.name}!`;
    }

}

// register component
customElements.define( 'hello-component', HelloComponent );
