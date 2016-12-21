import { IDocument } from './../../model/contracts/IDocument';
import { DataService } from './../../model/implementation/DataService';
import { autoinject, transient } from 'aurelia-framework';

@autoinject()
export class Documents {
	
    list: Array<IDocument>

    constructor(private _dataService: DataService) { 
        this.list = this._dataService.documents;       
    }

    attached() {
        //this.list = this._dataService.documents;
    }
}