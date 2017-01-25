import { IViewModelCreatorService } from './IViewModelCreatorService';
import { Container } from 'aurelia-framework';

export class ViewModelCreatorService implements IViewModelCreatorService {


    public create<T>(type: any, ...rest: any[]): T {
        return <T>Container.instance.get(type);
    }

    // public create<T>(type: any, ...rest: any[]): T {
    //     var vm =  <T>Container.instance.get(type);
    //     <IObjectWrapper>vm.Model = ...rest ;
    // }
}
