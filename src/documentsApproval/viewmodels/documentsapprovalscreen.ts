import { IViewModelCreatorService, ViewModelCreatorService } from './../../logofx/view-model';
import { DocumentsList } from './documentslist';
import { DataService } from './../../model/implementation';
import { inject } from 'aurelia-framework';

@inject(ViewModelCreatorService)
export class DocumentsApprovalScreen {

    _myList: DocumentsList;
    scale: number = 0.8;

    constructor(private _viewModelCreatorService: IViewModelCreatorService) {
        //console.log('DocumentsApprovalScreen.ctor. _vmcs = ' + _vmcs);
    }   

    bind() {
        this._myList = this._viewModelCreatorService.create<DocumentsList>(DocumentsList);
        //console.log('ViewModel is ' + this._myList.list.length.toString());
        //setTimeout(() => {this.scale = 0.8}, 2000);
    }

    attached() {
        //this.scale = 0.8;
    //    setTimeout(() => {this.scale = 0.2}, 200);
    //    setTimeout(() => {this.scale = 0.3}, 400);
    //    setTimeout(() => {this.scale = 0.4}, 600);
    //    setTimeout(() => {this.scale = 0.5}, 800);
    //    setTimeout(() => {this.scale = 0.6}, 1000);
    //    setTimeout(() => {this.scale = 0.7}, 1200);
       //setTimeout(() => {this.scale = 0.8}, 1400);

        
        
    }

    get list(): DocumentsList {
        return this._myList;
    }
}