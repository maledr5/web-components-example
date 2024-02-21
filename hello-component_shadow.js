class HelloComponent extends HTMLElement {
    // invoked when the element is added to a document:
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
             <style>
              p {
                color: lightgreen;
              }
            </style>
            <p class="bla">Hello Components!</p>`
    }
}

// register component
customElements.define( 'hello-component', HelloComponent );
