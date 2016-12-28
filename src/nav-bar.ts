import {customElement} from 'aurelia-framework';

@customElement('nav-bar')
export class NavBar {
    hebrew:boolean;

    constructor(){
    	this.hebrew = false;
    	console.log("ПРОВЕРКА!!!");
    }
  
}