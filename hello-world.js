import { LitElement, html } from 'lit-element';
import './my-message';
export class HelloWorld extends LitElement {
    static get properties(){
        return{
            message: { type: String },
        }
    }
    constructor(){
        super();
        this.message = "Dynamic Message";
    }

    render() {
        return html`Hello World
        <my-message message="Mensaje Estatico"></my-message>

        <my-message .message=${this.message}></my-message>
        `;
    }
}
customElements.define('hello-world', HelloWorld);