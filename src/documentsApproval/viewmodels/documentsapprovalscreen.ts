import { IViewModelCreatorService, ViewModelCreatorService } from './../../logofx/view-model';
import { DocumentsList } from './documentslist';
import { DataService } from './../../model/implementation';
import { inject } from 'aurelia-framework';

@inject(ViewModelCreatorService)
export class DocumentsApprovalScreen {

    _myList: DocumentsList;

    constructor(private _viewModelCreatorService: IViewModelCreatorService) {
        //console.log('DocumentsApprovalScreen.ctor. _vmcs = ' + _vmcs);
    }   

    bind() {
        this._myList = this._viewModelCreatorService.create<DocumentsList>(DocumentsList);
        //console.log('ViewModel is ' + this._myList.list.length.toString());
    }

    get list(): DocumentsList {
        return this._myList;
    }
}