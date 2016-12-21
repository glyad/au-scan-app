import { Scanner } from './../../Scanner/viewmodels/scanner';
import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';


export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'scanner'], name: 'Scanner',      moduleId: '../../Scanner/viewmodels/scanner.ts',      nav: true, 		title: 'Scan Documents' }
    //, { route: 'docsForAprovement', name: 'docsForAprovement',      moduleId: './docsForAprovement',      nav: true, title: 'Documents Aprovement' }
    ]);

    this.router = router;
  }
}
