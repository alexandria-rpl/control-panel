// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  uat: false,
  development: true,
  /*dev environment data services */
  controlPanelAccessService: 'http://localhost:8080/control-panel-access-service/rpl/api/ControlPanelAccessServices/',
  libraryFormServices: 'http://localhost:8080/library-form-service/rpl/api/LibraryFormServices/',
  sharedStaticDataServices: 'http://localhost:8080/static-shared-data-service/rpl/api/SharedStaticDataServices/',
  libraryFileUploadServices: 'http://localhost:8080/library-file-upload-services/rpl/api/fileService/',
  libraryReservationServices: 'http://localhost:8080/library-event-reservation-service/api/libraryEventReservationService/',
  libraryEventManagementServices: 'http://localhost:8080/library-event-management-service/api/libraryEventManagementService/',
  librarySettingsServices: 'http://localhost:8080/library-settings-service/api/librarySettingsService/',
  librarySubscriberServices: 'http://localhost:8080/library-subscriber-service/api/librarySubscriberService/',
  librarySimpleContentService: 'http://localhost:8080/library-content-management-service/api/libraryContentManagementService',
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
