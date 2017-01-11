import { customElement, observable } from 'aurelia-framework';

@customElement('items-control')
export class ItemsControl {

    @observable()
    itemsSource: any[];
    
    itemsSourceChanged() {
        
    }
}