import { DocumentsApproval } from './../../documentsApproval/viewmodels/documentsApproval';
import { Scanner } from './../../scanner/viewmodels/scanner';
import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';


export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'scanner'], name: 'scanner',      moduleId: '../../scanner/viewmodels/scanner',      nav: true, 		title: 'Scan Documents' }
    , { route: 'documentsApproval', name: 'documentsApproval',      moduleId: '../../documentsApproval/viewmodels/documentsApproval',      nav: true, title: 'Documents Approval' }
    ]);

    this.router = router;
  }
}
