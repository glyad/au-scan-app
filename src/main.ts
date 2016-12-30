﻿import {Aurelia, ViewLocator} from 'aurelia-framework';
// we want font-awesome to load as soon as possible to show the fa-spinner
import '../styles/styles.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'materialize-css';
import 'aurelia-i18n';
import {I18N} from 'aurelia-i18n';
import * as Backend from 'i18next-xhr-backend';
// import 'aurelia-animator-css';
import 'bootstrap';

// comment out if you don't want a Promise polyfill (remove also from webpack.config.js)
import * as Bluebird from 'bluebird';
Bluebird.config({ warnings: false });

export async function configure(aurelia: Aurelia) {

  ViewLocator.prototype.convertOriginToViewUrl = (origin) => {
    console.log('Origin ModuleId: ' + origin.moduleId + ' Origin ModuleMember: ' + origin.moduleMember);
    let moduleId = origin.moduleId;
    let id = moduleId.endsWith('.ts') ? moduleId.substring(0, moduleId.length - 3) : moduleId;
    console.log('id = ' + id);
    let result = `${id.replace('viewmodels', 'views')}.html`;
    console.log('Result = ' + result);
    return result; 
  };

  aurelia.use
  .standardConfiguration()
  .developmentLogging()
  .plugin('aurelia-materialize-bridge', bridge => bridge.useAll() );

  // Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin('aurelia-html-import-template-loader')

  await aurelia.start();
  aurelia.setRoot('shell/viewmodels/app');

  // if you would like your website to work offline (Service Worker), 
  // install and enable the @easy-webpack/config-offline package in webpack.config.js and uncomment the following code:
  /*
  const offline = await System.import('offline-plugin/runtime');
  offline.install();
  */
}
