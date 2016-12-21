import { autoinject } from 'aurelia-framework';
import { DataService } from '../../model/implementation/DataService';
import { Document } from '../../model/implementation/Document';
import { IDocument } from '../../model/contracts/IDocument';

@autoinject
export class Properties {
    private _document: IDocument;

    constructor(private _dataService: DataService){
        this._document = new Document();
        this._document.id = 1;
    }

    get document() {
        return this._dataService.document;
    }    
}