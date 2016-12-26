import { IViewModelCreatorService } from './IViewModelCreatorService';
import { Container, singleton, autoinject } from 'aurelia-framework';

//@autoinject()
//@singleton()
export class ViewModelCreatorService implements IViewModelCreatorService {


    public create<T>(type): T {
        return <T>Container.instance.get(type);
    }
}
