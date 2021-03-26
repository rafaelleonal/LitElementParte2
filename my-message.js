import { LitElement, html } from 'lit-element';

export class MyMessage extends LitElement {

    static get properties() {
        return{
            message: { type: String },
        }
    }
    constructor(){
        super();
        this.message = '';
    }

    render() {
        return html`<p>
            ${this.message}</p>
        `;
    }
}
customElements.define('my-message', MyMessage);