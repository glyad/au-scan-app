import { ObserverLocator } from 'aurelia-binding';
import { Container, BindingEngine } from 'aurelia-framework';


export function getDefaultBindingEngine(): BindingEngine {
    return <BindingEngine>Container.instance.get(BindingEngine);
}

export function getDefaultObserverLocator(): ObserverLocator {
    return <ObserverLocator>Container.instance.get(ObserverLocator);
}

