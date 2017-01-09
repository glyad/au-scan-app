import { Aurelia, ViewLocator, Container } from 'aurelia-framework';
// we want font-awesome to load as soon as possible to show the fa-spinner
import '../styles/styles.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'materialize-css';
// import {I18N} from 'aurelia-i18n';
// import * as Backend from 'i18next-xhr-backend';

// import 'aurelia-animator-css';
import 'bootstrap';

// comment out if you don't want a Promise polyfill (remove also from webpack.config.js)
import * as Bluebird from 'bluebird';
Bluebird.config({ warnings: false });

// (function () {
//   Container.prototype.get = function(key:any, ...rest) {
//     return Container.prototype.get;
//   }
//   alert('HERE');

// })();

export async function configure(aurelia: Aurelia) {

    ViewLocator.prototype.convertOriginToViewUrl = (origin) => {
        console.log('Origin ModuleId: ' + origin.moduleId + ' Origin ModuleMember: ' + origin.moduleMember);
        let moduleId = origin.moduleId;
        let id = moduleId.endsWith('.ts') ? moduleId.substring(0, moduleId.length - 3) : moduleId;
        id = id.toLowerCase().endsWith('viewmodel') ? id.substring(0, id.length - 5) : id;
        console.log('id = ' + id);
        let result = `${id.replace('viewmodels', 'views')}.html`;
        console.log('Result = ' + result);
        return result; 
    };


  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-materialize-bridge', bridge => bridge.useAll())
    .plugin('aurelia-validation')
    // .plugin('aurelia-i18n', (instance) => {
    //     // register backend plugin
    //     instance.i18next.use(Backend);
      
    //   // adapt options to your needs (see http://i18next.com/docs/options/)
    //     // make sure to return the promise of the setup method, in order to guarantee proper loading
    //     return instance.setup({
    //       backend: {                                  // <-- configure backend settings
    //         loadPath: './locales/{{lng}}/{{ns}}.json', // <-- XHR settings for where to get the files from
    //       },
    //       lng : 'de',
    //       attributes : ['t','i18n'],
    //       fallbackLng : 'en',
    //       debug : false
    //     });
    // });
;

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
