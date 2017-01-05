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

    get documents(): Array<IDocument> {
        return this._documents;
    }

    createDocument(): Promise<any> {        
        return new Promise(resolve => setTimeout(() => {
            let lastIndex: number = this._documents.length - 1;
            let id: number = this._documents[lastIndex].id;
            id += 1;

            this._documents.push( { name: 'Document ' + id.toString()
                		, id: id
                        , description: 'This is description of the Document #' + id.toString()
                        , caseId: 'Case #' + id.toString() } );   

            resolve();                                 
        }, 1));
    }

    deleteDocument(id: number): Promise<any> {
        return new Promise(resolve => setTimeout(() => {
            let candidate = this._documents.find((item) => item.id == id);
            if (candidate === undefined)
                throw new Error('The item is not found.');

            let index = this._documents.indexOf(candidate, 0);
            if (index > -1) {
               this._documents.splice(index, 1);
            }

            resolve();
        }, 300));
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
