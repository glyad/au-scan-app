import { autoinject } from 'aurelia-framework';
import { IDocument } from './../../model/contracts/IDocument';
import { DocumentViewModel } from './documentViewModel';
import { WrappingCollection } from './../../logofx/view-model/WrappingCollection';
import { DataService } from './../../model/implementation';

@autoinject
export class Probe {

    private _wc: WrappingCollection;
    public isBusy: boolean = false;

    constructor(private _dataService: DataService) { 
         this._wc = new WrappingCollection((item) => { return new DocumentViewModel(<IDocument>item) }, this._dataService.documents);   

         console.log('Probe: ' + this._wc.length);
    }

    public get documents(): WrappingCollection {
        return this._wc;
    }

    public get canSelectAll(): boolean {
        return this.documents.canSelectAll();
    }
    
    public get canClear(): boolean {
        return this.documents.canUnselectAll();
    }

    public get canRemoveSelectedItem(): boolean {
        return this.canClear;
    }

    public selectAll() {
        this.documents.selectAll();
    }

    public clearSelection() {
        this.documents.unselectAll();
    }

    public removeSelectedItems() {
        
        this.documents.getSelectedItems().forEach(item => {
            this.isBusy = true;

            this._dataService.deleteDocument(item.model.id)
                .then(() => this.isBusy = false)
                .catch((reason) => {
                    alert(reason.toString());
                    this.isBusy = false;
                });            
        });
    }
    
    public addItem(){
        this._dataService.createDocument();
    }

    public addMany() {
        this._dataService.createRangeOfDocuments(5);
    }

    public remove() {
        this._dataService.deleteDocument(this._dataService.documents[0].id);
    }

    public removeMany() {
        this._dataService.deleteLastOfDocuments(5);
    }
    
}