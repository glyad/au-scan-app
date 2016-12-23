import { IDocument } from './../../model/contracts';
import { DataService } from './../../model/implementation';
import { autoinject, transient } from 'aurelia-framework';

@autoinject()
export class DocumentsList {
	
    list: Array<IDocument>;
    items;

    constructor(private _dataService: DataService) { 
        this.list = this._dataService.documents;       
    }

	onSelectionChanged(e) {
	    let selected = this.items.getSelected();
	    let names = selected.map(i => i.name);
	    //this.logger.log('selection changed: ' + names.join(', '));
    }
    
}