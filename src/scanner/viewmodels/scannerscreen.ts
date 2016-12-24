import { DataService } from '../../model/implementation/DataService';
import { autoinject } from 'aurelia-framework';
import { Properties } from './properties';
import { Preview } from './preview';

@autoinject
export class ScannerScreen {

    isBusy: boolean = false;

    constructor(private _dataService: DataService, 
                private previewViewModel: Preview,
                private propertiesViewModel: Properties) { }

    startScan(){
        this.isBusy = true;
        this._dataService
            .scanDocument()
             .then(() => {
                 this.isBusy = false;
             })
             .catch((e) => {
                 console.log(e);
             });
        }
}