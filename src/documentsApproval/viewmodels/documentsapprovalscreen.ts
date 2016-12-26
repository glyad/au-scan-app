import { ViewModelCreatorService } from './../../logofx/view-model/ViewModelCreatorService';
import { DocumentsList } from './documentslist';
import { DataService } from './../../model/implementation';
import { autoinject } from 'aurelia-framework';

@autoinject
export class DocumentsApprovalScreen {

    _myList: DocumentsList;

    constructor(private _vmcs: ViewModelCreatorService) {
        //console.log('DocumentsApprovalScreen.ctor. _vmcs = ' + _vmcs);
    }   

    bind() {
        this._myList = this._vmcs.create<DocumentsList>(DocumentsList);
        //console.log('ViewModel is ' + this._myList.list.length.toString());
    }

    get list(): DocumentsList {
        return this._myList;
    }
}