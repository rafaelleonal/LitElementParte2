import { LitElement, html } from 'lit-element';
import "./hello-world";
import "./my-list";

export class MyAPp extends LitElement {
    static get properties(){
        return{
            list : { type: Array }
        }
    }
    constructor(){
        super();
        this.list = [
        {
            name: "FOO"
        },
        {
            name: "GOO"
        }
    ]
    }

    render() {
        return html`<hello-world></hello-world>
        <my-list .list=${this.list}></my-list>
        `;
    }
}
customElements.define('my-app', MyAPp);