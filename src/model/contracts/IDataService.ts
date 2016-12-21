import { IDocument } from './IDocument';

export interface IDataService {

    documents: Array<IDocument>;

    scanDocument(): void;
    // getDocument(id: number);
    // getDocuments(): void;
    // createDocument(): void;
    // deleteDocument(id: number): void;
    // updateDocument(id: number): void;
}
