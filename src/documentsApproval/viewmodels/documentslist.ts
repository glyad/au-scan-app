import { BindingEngine } from 'aurelia-framework';
import { Container, observable } from 'aurelia-framework';
import { ObjectViewModel } from './../../logofx/view-model/objectViewModel';
import { WrappingCollection } from './../../logofx/view-model/WrappingCollection';
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
    selectedDocuments: Array<ObjectViewModel<IDocument>> = [];
    
    @observable
    wc: WrappingCollection;
    isBusy: boolean = false;


    constructor(private _dataService: DataService) { 
        this.list = this._dataService.documents;    

        this.wc = new WrappingCollection((item) => { return new ObjectViewModel<IDocument>(<IDocument>item) }, this._dataService.documents);   
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