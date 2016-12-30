import { ViewModelCreatorService } from './../../logofx/view-model/ViewModelCreatorService';
import { IDataService } from './../../model/contracts/IDataService';
import { IViewModelCreatorService } from './../../logofx/view-model/IViewModelCreatorService';
import { DataService } from '../../model/implementation/DataService';
import { autoinject, inject } from 'aurelia-framework';
import { Properties } from './properties';
import { Preview } from './preview';
import { PDFJS } from 'pdfjs-dist';
import 'pdfjs-dist';

@inject(DataService, ViewModelCreatorService) 
export class ScannerScreen {

    isBusy: boolean = false;
    public previewViewModel: Preview;
    public propertiesViewModel: Properties

    constructor(private _dataService: IDataService, 
                private _viewModelCreatorService: IViewModelCreatorService) { }

    created() {
        this.previewViewModel = this._viewModelCreatorService.create<Preview>(Preview);
        this.propertiesViewModel = this._viewModelCreatorService.create<Properties>(Properties);
    }

    onHren(pdf: PDFDocumentProxy): void {
    }


    startScan(){
        this.isBusy = true;
        this._dataService
            .scanDocument()
            .then(() => {
                 this.isBusy = false;
             })
             .catch((e) => {
                 console.log(e);
             });
        }
}