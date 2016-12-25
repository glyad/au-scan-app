import { IDocument } from './../../model/contracts';
import { DataService } from './../../model/implementation';
import { autoinject, transient } from 'aurelia-framework';

@autoinject()
export class DocumentsList {
	
    list: Array<IDocument>;
    items;
    canClear: boolean = false;
    canSelectAll: boolean = true;

    constructor(private _dataService: DataService) { 
        this.list = this._dataService.documents;       
    }

	onSelectionChanged(e) {
	    let selected = this.items.getSelected();
	    let names = selected.map(i => i.name);
        this.canClear = names.length != 0;    
        this.canSelectAll = this.list.length != selected.length;            
    }

    
    
}