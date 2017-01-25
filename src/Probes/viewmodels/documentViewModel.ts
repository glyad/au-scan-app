import { Container, View } from 'aurelia-framework';
import { ValidationRules } from 'aurelia-validation';
import { MaterializeFormValidationRenderer } from 'aurelia-materialize-bridge';

import { DataService } from './../../model/implementation';
import { IDocument } from './../../model/contracts';
import { ObjectViewModel } from './../../logofx/view-model';

export class DocumentViewModel extends ObjectViewModel<IDocument> {

    
    constructor(model: IDocument){
        super(model);

        this.controller.addRenderer(new MaterializeFormValidationRenderer());
     }

    
    
    activate(params, routeConfig, navigationInstruction) {
        console.log('DocumentViewModel -> activate.');
    }

    deactivate() {
        console.log('DocumentViewModel -> deactivate.');
    }

    // created(owningView: View, myView: View) {
    //     //console.log(owningView.fragment.textContent);

    //  }
  
    canDeactivate() {
        console.log('canDeactivate() called.')
        return false;
    }
}