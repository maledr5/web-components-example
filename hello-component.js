class HelloComponent extends HTMLElement {
    // invoked when the element is added to a document:
    connectedCallback() {
        this.textContent = 'Hello Component!';
    }
}

// register component
customElements.define( 'hello-component', HelloComponent );
