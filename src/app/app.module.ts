import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatDividerModule} from '@angular/material';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';

/* Site Components Goes Here */
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CallbackComponent } from './components/callback/callback.component';

/* Site Modal Components */
import { ModalComponent } from './modals/modal/modal.component';
import { ModalCancelComponent } from './modals/modal-cancel/modal-cancel.component';
import { ModalConfirmComponent } from './modals/modal-confirm/modal-confirm.component';
import { ModalOkComponent } from './modals/modal-ok/modal-ok.component';
import { ModalOkCancelComponent } from './modals/modal-ok-cancel/modal-ok-cancel.component';
import { ModalVanillaComponent } from './modals/modal-vanilla/modal-vanilla.component';

/* Site Modal Templates */
import { DeleteConfirmationComponent } from './components/modal-templates/delete-confirmation/delete-confirmation.component';
import { ErrorMessageComponent } from './components/modal-templates/error-message/error-message.component';
import { LightboxComponent } from './components/modal-templates/lightbox/lightbox.component';
import { LoginComponent } from './components/modal-templates/login/login.component';
import { LogoutComponent } from './components/modal-templates/logout/logout.component';
import { ReadMessageComponent } from './components/modal-templates/read-message/read-message.component';
import { SendMessageComponent } from './components/modal-templates/send-message/send-message.component';

/* Services */
import { ModalCommunicationService } from './services/modal-communication-service/modal-communication.service';
import { ComponentCommunicationService } from './services/component-communication-service/component-communication.service';

/* Router Linkage Goes Here */
const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CallbackComponent,
    ModalComponent,
    ModalCancelComponent,
    ModalConfirmComponent,
    ModalOkComponent,
    ModalOkCancelComponent,
    ModalVanillaComponent,
    DeleteConfirmationComponent,
    ErrorMessageComponent,
    LightboxComponent,
    LoginComponent,
    LogoutComponent,
    ReadMessageComponent,
    SendMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CKEditorModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FileUploadModule,
    MatMenuModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),
  ],
  providers: [
    ComponentCommunicationService,
    ModalCommunicationService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DeleteConfirmationComponent,
    ErrorMessageComponent,
    LightboxComponent,
    LoginComponent,
    LogoutComponent,
    ReadMessageComponent,
    SendMessageComponent
  ]
})
export class AppModule {
}
