import { DocumentsApprovalScreen } from './../../documentsApproval/viewmodels';
import { ScannerScreen } from './../../scanner/viewmodels';
import { Aurelia, observable } from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {I18N} from 'aurelia-i18n';
import * as Backend from 'i18next-xhr-backend';

@inject(HttpClient, I18N)
export class App {

  router: Router;

  @observable()
  public rtl: boolean = false;

  constructor(public i18n:I18N){
    this.i18n=i18n;
    console.log(this.i18n.i18next);
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
    if (newValue===true){
      console.log(newValue);
      this.i18n.setLocale('he-HE')
      .then( () => {
        // locale is loaded
      });
    };
  }
}
}
