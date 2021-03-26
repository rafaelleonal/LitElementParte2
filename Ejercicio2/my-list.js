import { LitElement, html } from 'lit-element';

export class MyList extends LitElement {

    static get properties(){
        return{
            title: { type: String },
            items: { type: Array }
        }
    }
    constructor(){
        super();
        this.title = '';
        this.items = [];
    }

    render() {
        return html` 
        <h1>${this.title}</h1>
        <ul>
            ${this.items.map(item => html ` <li>${item.name} (${item.year})</li>`)}
        </ul>

        <ul>
            ${this.items.map(this._getItem)}
        `;
    }
    _getItem(item){
        return html `<li>${item.name} (${item.year})</li>`
    }
}
customElements.define('my-list', MyList);