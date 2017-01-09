import {metadata} from 'aurelia-metadata';
import {Router, RouterConfiguration} from 'aurelia-router';

export class Route {
    name: string;
    moduleId: string;
    
}

export function route(route: Route){
    return function(target, key, descriptor) {
    };
}