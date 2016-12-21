import { DataService } from '../../model/implementation/DataService';
import { autoinject } from 'aurelia-framework';
import { IDataService } from '../../model/contracts/IDataService';
import { Properties } from './properties';
import { Preview } from './preview';

@autoinject()
export class Scanner {

    isBusy: boolean = false;

    constructor(private _dataService: DataService, 
                private preview: Preview,
                private properties: Properties) { }

    startScan(){
        this.isBusy = true;
        this._dataService
            .scanDocument()
             .then(() => {
                 this.isBusy = false;
             })
             .catch(() => {});
        }
}