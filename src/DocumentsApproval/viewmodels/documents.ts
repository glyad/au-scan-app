import { IDocument } from './../../model/contracts/IDocument';
import { DataService } from './../../model/implementation/DataService';
import { autoinject, transient } from 'aurelia-framework';

@autoinject
@transient
export class Documents {
	
    documents: Array<IDocument>

    constructor(private _dataService: DataService) {        
    }

    attached() {
        this.documents = this._dataService.documents;
    }
}