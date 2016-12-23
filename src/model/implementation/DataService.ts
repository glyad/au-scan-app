import { Document } from '.';
import { IDocument, IDataService } from './../contracts';
import { singleton } from 'aurelia-framework';

export class DataService implements IDataService {
    
    private _documents: Array<IDocument> = [];

    imagePath : string = '../../assets/3.png';

    document: Document = new Document();

    constructor () {

        console.log('DataService.ctr');

		for (let i = 0; i < 100; i++) {
			this._documents
            	.push (	{ name: 'Document ' + i.toString()
                		, id: i
                        , description: 'This is description of the Document #' + i.toString()
                        , caseId: 'Case #' + i.toString() } );
        }

    }

    get documents() {
        return this._documents;
    }

    UpdateDocumentData( name: string, 
                        id: number,
                        description: string,
                        caseId: string): Promise<any> {

        
        return new Promise(resolve => setTimeout(() => {
            this.document = { name: name, id: id, description: description, caseId: caseId};
            resolve();
        }, 1000));
    }

    UpdateImage(id: number): Promise<any> {
        return new Promise(resolve => setTimeout(() => {
            this.imagePath = "../../assets/" + id.toString() + ".png";
            console.log(this.imagePath);
            resolve();
        }, 1000));
    }

    scanDocument(): Promise<any> {
        return new Promise (async resolve => {
            console.log('scanDocument is called: ');
            await this.UpdateDocumentData("Petya", 2, "Alkash", "12-3-45");
            await this.UpdateImage(1);
            await this.UpdateImage(2);
            await this.UpdateImage(3);          

            resolve();
        })
    }
}
