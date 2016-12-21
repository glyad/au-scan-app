import { customElement, bindable, bindingMode } from 'aurelia-framework';

@customElement('busy-indicator')
export class BusyIndicator {
  
   @bindable({ defaultBindingMode: bindingMode.oneWay })
   busy: boolean = false;

   @bindable({ defaultBindingMode: bindingMode.oneWay })
   image: string = '';

}
