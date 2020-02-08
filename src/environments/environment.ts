// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  uat: false,
  development: true,
  /*dev environment data services */
  controlPanelAccessService: 'http://localhost:8080/control-panel-access-service/rpl/api/',
  libraryFormServices: 'http://localhost:8080/library-form-service/rpl/api/LibraryFormServices/',
  sharedStaticDataServices: 'http://localhost:8080/static-shared-data-service/rpl/api/SharedStaticDataServices/',

  clientID: '[set auth0 clientID]',
  domain: '[set auth0 domain]',
  callbackURL: '[set auth0 callback url]'
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
