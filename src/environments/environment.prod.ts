export const environment = {
  production: true,
  development: false,
  uat: false,
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
