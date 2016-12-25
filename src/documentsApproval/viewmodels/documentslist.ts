import { IDocument } from './../../model/contracts';
import { DataService } from './../../model/implementation';
import { autoinject, transient } from 'aurelia-framework';

@autoinject()
export class DocumentsList {
	
    list: Array<IDocument>;
    items;
    canClear: boolean = false;
    canSelectAll: boolean = true;
    canRemoveSelectedItem: boolean = false;
    selectedDocuments: Array<IDocument> = [];


    constructor(private _dataService: DataService) { 
        this.list = this._dataService.documents;       
    }

	onSelectionChanged(e) {
	    this.selectedDocuments = this.items.getSelected();
	    this.canRemoveSelectedItem 
            = this.canClear 
            = this.selectedDocuments.length > 0;    
        this.canSelectAll = this.list.length != this.selectedDocuments.length;
    }

    removeSelectedItems() {
        
        this.selectedDocuments.forEach(item => {
            let index = this.list.indexOf(item, 0);
            if (index > -1) {
               this.list.splice(index, 1);
            }
        });

        this.items.clearSelection();
    }
    
}