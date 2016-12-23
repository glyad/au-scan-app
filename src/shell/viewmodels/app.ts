import { DocumentsApprovalScreen } from './../../documentsApproval/viewmodels';
import { ScannerScreen } from './../../scanner/viewmodels';
import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';


export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'scannerscreen'], name: 'scannerscreen',      moduleId: '../../scanner/viewmodels/scannerscreen',      nav: true, 		title: 'Scan Documents' }
    , { route: 'documentsapprovalscreen', name: 'documentsapprovalscreen',      moduleId: '../../documentsApproval/viewmodels/documentsapprovalscreen',      nav: true, title: 'Documents Approval' }
    ]);0

    this.router = router;
  }
}
