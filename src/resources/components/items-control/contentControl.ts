import { customElement, bindable, bindingMode } from 'aurelia-framework';
/**
 * name
 */
@customElement('content-control')
export class ContentControl {
    @bindable({ defaultBindingMode: bindingMode.oneTime }) 
    content: any;
}