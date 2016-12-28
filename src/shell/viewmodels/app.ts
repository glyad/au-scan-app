import { DocumentsApprovalScreen } from './../../documentsApproval/viewmodels';
import { ScannerScreen } from './../../scanner/viewmodels';
import { Aurelia, observable } from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';


export class App {
 
  router: Router;

  @observable()
  public rtl: boolean = false;

  constructor(){
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'scannerscreen'], name: 'scannerscreen',      moduleId: '../../scanner/viewmodels/scannerscreen',      nav: true, 		title: 'Scan Documents', }
    , { route: 'documentsapprovalscreen', name: 'documentsapprovalscreen',      moduleId: '../../documentsApproval/viewmodels/documentsapprovalscreen',      nav: true, title: 'Documents Approval' }
    ]);

    this.router = router;
  }

  private rtlChanged(newValue: boolean, oldValue: boolean): void {
  	console.log('New Value is ' + newValue);
  }
 
}
