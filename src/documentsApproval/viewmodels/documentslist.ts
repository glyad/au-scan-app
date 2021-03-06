import { DocumentViewModel } from './../../Probes/viewmodels/documentViewModel';
import { BindingEngine } from 'aurelia-framework';
import { Container, observable } from 'aurelia-framework';
import { ObjectViewModel } from './../../logofx/view-model/objectViewModel';
import { WrappingCollection } from './../../logofx/view-model/WrappingCollection';
import { IDocument } from './../../model/contracts';
import { DataService } from './../../model/implementation';
import { autoinject, transient } from 'aurelia-framework';

@autoinject()
export class DocumentsList {
	
    items;
    canClear: boolean = false;
    canSelectAll: boolean = true;
    canRemoveSelectedItem: boolean = false;
    selectedDocuments: Array<ObjectViewModel<IDocument>> = [];
    
    wc: WrappingCollection;
    isBusy: boolean = false;


    constructor(private _dataService: DataService) { 
        this.wc = new WrappingCollection((item) => { return new DocumentViewModel(<IDocument>item) }, this._dataService.documents);   
    }

	onSelectionChanged(e) {
	    this.selectedDocuments = this.items.getSelected();
	    this.canRemoveSelectedItem 
            = this.canClear 
            = this.selectedDocuments.length > 0;    
        this.canSelectAll = this.wc.length != this.selectedDocuments.length;
    }

    removeSelectedItems() {
        
        this.selectedDocuments.forEach(item => {
            this.isBusy = true;

            this._dataService.deleteDocument(item.model.id)
                .then(() => this.isBusy = false)
                .catch((reason) => {
                    alert(reason.toString());
                    this.isBusy = false;
                });            
        });

        this.items.clearSelection();
    }
    
}