import { LitElement, html } from 'lit-element';
import "./myApp";

export class HelloWorld extends LitElement {

    render() {
        return html`Hello World`;
    }
}
customElements.define('hello-world', HelloWorld);