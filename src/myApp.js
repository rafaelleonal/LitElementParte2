import { LitElement, html } from 'lit-element';
import "./hello-world";
import "./my-list";

export class MyApp extends LitElement {
    static get properties(){
        return{
            items: { type: Array }
        }
    }
    constructor(){
        super();
        this.items = [
        {
            name: "The Dark Knight",
            year: 2008
        },
        {
            name: "Matrix",
            year: 1999
        },
        {
            name: "Inception",
            year: 2010
        },
        {
            name: "Fight Club",
            year: 1999
        },
    ]
    }

    render() {
        return html`
        <my-list title="My Favorites Movies"></my-list>
        <my-list .items=${this.items}></my-list>
        `;
    }
}
customElements.define('my-app', MyApp);