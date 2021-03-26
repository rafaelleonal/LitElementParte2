import { LitElement, html } from 'lit-element';

export class MyList extends LitElement {

    static get properties(){
        return{
            list: { type: Array }
        }
    }
    constructor(){
        super();
        this.list = [];
    }

    render() {
        return html` <ul>
            ${this.list.map(item => html ` <li>${item.name}</li>`)}
        </ul>

        <ul>
            ${this.list.map(this._getItem)}
        `;
    }
    _getItem(item){
        return html `<li>${item.name}</li>`
    }
}
customElements.define('my-list', MyList);